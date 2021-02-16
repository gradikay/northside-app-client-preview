// This file is exported to src/index.js
// **** NOTE **** FOR SECURITY REASONS -- Put variable in a .env (file) --
// ------ Communication with Backend / API

// Development Configuration from AWS
const dev = {
    s3: {
        REGION: "us-east-2", 
        ATTACHEMENTS_BUCKET_NAME: "northside-app-services-dev-attachmentsbucket-1ptqj8yaq4v4y"
    },
    apiGateway: {
        REGION: "us-east-2",
        SERVICE_ENDPOINT: "https://4dlw7e2gr2.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_XuU5Enkuo",
        USER_POOL_CLIENT_ID: "29vmv4q84h3gt190ikbdqci831",
        IDENTITY_POOL_ID: "us-east-2:fefc0d21-b02b-4673-92e0-6f01e9b46ccd"
    }
};

// Production Configuration from AWS
const prod = {
    s3: {
        REGION: "...",
        ATTACHEMENTS_BUCKET_NAME: "..."
    },
    apiGateway: {
        REGION: "...",
        SERVICE_ENDPOINT: "..."
    },
    cognito: {
        REGION: "...",
        USER_POOL_ID: "...",
        USER_POOL_CLIENT_ID: "...",
        IDENTITY_POOL_ID: "..."
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 1000000,
    ...config
};