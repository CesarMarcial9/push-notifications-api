const OneSignal = require("@onesignal/node-onesignal");
const dotenv = require('dotenv')
dotenv.config();

const api_key_provider = {
  getToken() {
    return process.env.API_KEY;
  },
};

const configuration = OneSignal.createConfiguration({
  authMethods: {
    app_key: {
      tokenProvider: api_key_provider,
    },
  },
});

/**
 * CreateClient creates an instance of OneSignal.DefaultAPI client
 *
 * @returns {OneSignal.DefaultApi} returns a OneSignal client
 */
const CreateClient = () => {
  const client = new OneSignal.DefaultApi(configuration);

  return client;
};

module.exports = CreateClient;
