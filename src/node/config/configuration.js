import configLoader from './config-loader';

let envSpecificConfig;

export default {
  init() {
    return configLoader()
      .then((config) => {
        config.appId = process.env.APP_ID || config.appId;
        envSpecificConfig = config;
        return config;
      });
  },
  retrieve(key) {
    return envSpecificConfig[key];
  },
};
