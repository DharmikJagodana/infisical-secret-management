export enum ActorType {
  PLATFORM = "platform",
  USER = "user",
  SERVICE = "service",
  IDENTITY = "identity"
}

export enum UserAgentType {
  WEB = "web",
  CLI = "cli",
  K8_OPERATOR = "k8-operator",
  TERRAFORM = "terraform",
  NODE_SDK = "node-sdk",
  PYTHON_SDK = "python-sdk",
  OTHER = "other"
}

export enum EventType {
  GET_SECRETS = "get-secrets",
  DELETE_SECRETS = "delete-secrets",
  GET_SECRET = "get-secret",
  CREATE_SECRET = "create-secret",
  UPDATE_SECRET = "update-secret",
  DELETE_SECRET = "delete-secret",
  GET_WORKSPACE_KEY = "get-workspace-key",
  AUTHORIZE_INTEGRATION = "authorize-integration",
  UPDATE_INTEGRATION_AUTH = "update-integration-auth",
  UNAUTHORIZE_INTEGRATION = "unauthorize-integration",
  CREATE_INTEGRATION = "create-integration",
  DELETE_INTEGRATION = "delete-integration",
  ADD_TRUSTED_IP = "add-trusted-ip",
  UPDATE_TRUSTED_IP = "update-trusted-ip",
  DELETE_TRUSTED_IP = "delete-trusted-ip",
  CREATE_SERVICE_TOKEN = "create-service-token", // v2
  DELETE_SERVICE_TOKEN = "delete-service-token", // v2
  CREATE_IDENTITY = "create-identity",
  UPDATE_IDENTITY = "update-identity",
  DELETE_IDENTITY = "delete-identity",
  LOGIN_IDENTITY_UNIVERSAL_AUTH = "login-identity-universal-auth",
  ADD_IDENTITY_UNIVERSAL_AUTH = "add-identity-universal-auth",
  UPDATE_IDENTITY_UNIVERSAL_AUTH = "update-identity-universal-auth",
  GET_IDENTITY_UNIVERSAL_AUTH = "get-identity-universal-auth",
  CREATE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET = "create-identity-universal-auth-client-secret",
  REVOKE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET = "revoke-identity-universal-auth-client-secret",
  GET_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRETS = "get-identity-universal-auth-client-secret",
  CREATE_ENVIRONMENT = "create-environment",
  UPDATE_ENVIRONMENT = "update-environment",
  DELETE_ENVIRONMENT = "delete-environment",
  ADD_WORKSPACE_MEMBER = "add-workspace-member",
  REMOVE_WORKSPACE_MEMBER = "remove-workspace-member",
  CREATE_FOLDER = "create-folder",
  UPDATE_FOLDER = "update-folder",
  DELETE_FOLDER = "delete-folder",
  CREATE_WEBHOOK = "create-webhook",
  UPDATE_WEBHOOK_STATUS = "update-webhook-status",
  DELETE_WEBHOOK = "delete-webhook",
  GET_SECRET_IMPORTS = "get-secret-imports",
  CREATE_SECRET_IMPORT = "create-secret-import",
  UPDATE_SECRET_IMPORT = "update-secret-import",
  DELETE_SECRET_IMPORT = "delete-secret-import",
  UPDATE_USER_WORKSPACE_ROLE = "update-user-workspace-role",
  UPDATE_USER_WORKSPACE_DENIED_PERMISSIONS = "update-user-workspace-denied-permissions",
  CREATE_CA = "create-certificate-authority",
  GET_CA = "get-certificate-authority",
  UPDATE_CA = "update-certificate-authority",
  DELETE_CA = "delete-certificate-authority",
  GET_CA_CSR = "get-certificate-authority-csr",
  GET_CA_CERT = "get-certificate-authority-cert",
  SIGN_INTERMEDIATE = "sign-intermediate",
  IMPORT_CA_CERT = "import-certificate-authority-cert",
  GET_CA_CRL = "get-certificate-authority-crl",
  ISSUE_CERT = "issue-cert",
  GET_CERT = "get-cert",
  DELETE_CERT = "delete-cert",
  REVOKE_CERT = "revoke-cert",
  GET_CERT_BODY = "get-cert-body",
  CREATE_PKI_ALERT = "create-pki-alert",
  GET_PKI_ALERT = "get-pki-alert",
  UPDATE_PKI_ALERT = "update-pki-alert",
  DELETE_PKI_ALERT = "delete-pki-alert",
  CREATE_PKI_COLLECTION = "create-pki-collection",
  GET_PKI_COLLECTION = "get-pki-collection",
  UPDATE_PKI_COLLECTION = "update-pki-collection",
  DELETE_PKI_COLLECTION = "delete-pki-collection",
  GET_PKI_COLLECTION_ITEMS = "get-pki-collection-items",
  ADD_PKI_COLLECTION_ITEM = "add-pki-collection-item",
  DELETE_PKI_COLLECTION_ITEM = "delete-pki-collection-item",
  ORG_ADMIN_ACCESS_PROJECT = "org-admin-accessed-project",
  CREATE_CERTIFICATE_TEMPLATE = "create-certificate-template",
  UPDATE_CERTIFICATE_TEMPLATE = "update-certificate-template",
  DELETE_CERTIFICATE_TEMPLATE = "delete-certificate-template",
  GET_CERTIFICATE_TEMPLATE = "get-certificate-template",
  CREATE_CERTIFICATE_TEMPLATE_EST_CONFIG = "create-certificate-template-est-config",
  UPDATE_CERTIFICATE_TEMPLATE_EST_CONFIG = "update-certificate-template-est-config",
  GET_CERTIFICATE_TEMPLATE_EST_CONFIG = "get-certificate-template-est-config",
  UPDATE_PROJECT_SLACK_CONFIG = "update-project-slack-config",
  GET_PROJECT_SLACK_CONFIG = "get-project-slack-config",
  INTEGRATION_SYNCED = "integration-synced"
}
