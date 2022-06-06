const config = {
    // Backend config
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-api-prod-attachmentsbucket-w2mugfqw0dc8',
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://am3u5egud1.execute-api.us-east-1.amazonaws.com',
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_9YeIQQ0DF',
        APP_CLIENT_ID: '6o4aner6be5kjodupb64a69vfg',
        IDENTITY_POOL_ID: 'us-east-1:cc786932-b9e3-413c-b6a5-c1c9da5bc7a2',
    },
};

export default config;
