import { ForbiddenError } from "@casl/ability";
import { Knex } from "knex";

import { TPermissionServiceFactory } from "@app/ee/services/permission/permission-service";
import { ProjectPermissionActions, ProjectPermissionSub } from "@app/ee/services/permission/project-permission";
import { BadRequestError } from "@app/lib/errors";

import { TProjectMembershipDALFactory } from "../project-membership/project-membership-dal";
import { TProjectKeyDALFactory } from "./project-key-dal";
import { TGetLatestProjectKeyDTO, TUploadProjectKeyDTO } from "./project-key-types";

type TProjectKeyServiceFactoryDep = {
  permissionService: TPermissionServiceFactory;
  projectKeyDAL: TProjectKeyDALFactory;
  projectMembershipDAL: TProjectMembershipDALFactory;
};

export type TProjectKeyServiceFactory = ReturnType<typeof projectKeyServiceFactory>;

export const projectKeyServiceFactory = ({
  projectKeyDAL,
  projectMembershipDAL,
  permissionService
}: TProjectKeyServiceFactoryDep) => {
  const uploadProjectKeys = async (
    { receiverId, actor, actorId, projectId, nonce, encryptedKey }: TUploadProjectKeyDTO,
    tx?: Knex
  ) => {
    const { permission } = await permissionService.getProjectPermission(actor, actorId, projectId);
    ForbiddenError.from(permission).throwUnlessCan(ProjectPermissionActions.Edit, ProjectPermissionSub.Member);

    const receiverMembership = await projectMembershipDAL.findOne({
      userId: receiverId,
      projectId
    });
    if (!receiverMembership)
      throw new BadRequestError({
        message: "Failed to validate receiver membership",
        name: "Upload project keys"
      });

    await projectKeyDAL.create({ projectId, receiverId, encryptedKey, nonce, senderId: actorId }, tx);
  };

  const getLatestProjectKey = async ({ actorId, projectId, actor }: TGetLatestProjectKeyDTO) => {
    await permissionService.getProjectPermission(actor, actorId, projectId);
    const latestKey = await projectKeyDAL.findLatestProjectKey(actorId, projectId);
    return latestKey;
  };

  const getProjectPublicKeys = async ({ actor, actorId, projectId }: TGetLatestProjectKeyDTO) => {
    const { permission } = await permissionService.getProjectPermission(actor, actorId, projectId);
    ForbiddenError.from(permission).throwUnlessCan(ProjectPermissionActions.Read, ProjectPermissionSub.Member);
    return projectKeyDAL.findAllProjectUserPubKeys(projectId);
  };

  return {
    uploadProjectKeys,
    getProjectPublicKeys,
    getLatestProjectKey
  };
};
