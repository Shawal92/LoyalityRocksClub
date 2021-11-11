import Constants from "expo-constants";

const ENV = {
  dev: {
    
    apiUrl: "https://apidev.carnivallrc.co.uk/api",
  },
  staging: {
    apiUrl: "https://apidev.carnivallrc.co.uk/api",
  },
  prod: {
    apiUrl: "https://apidev.carnivallrc.co.uk/api",
  },
};
// first method
// const getCurrentSettings = () => {
//   if (__DEV__) return settings.dev;
//   if (Constants.manifest.releaseChannel === "staging") return settings.staging;
//   return settings.prod;
// };

// export default getCurrentSettings();

//second way
function getEnvVars(env = '') {
   // using `indexOf` will let you pick up dev, develop, development, dev-v1, dev-v2, dev-v3, and so on..
  // Returns `-1` if the value is not found.
    if (env === null || env === undefined || env === '') return ENV.dev
    if (env.indexOf('dev') !== -1) return ENV.dev
    if (env.indexOf('staging') !== -1) return ENV.staging
    if (env.indexOf('prod') !== -1) return ENV.prod
  }
  export default getEnvVars(Constants.manifest.releaseChannel)

  // Third Way
//   const getEnvVars = (env = Constants.manifest.releaseChannel) => {
//     // What is __DEV__ ?
//     // This variable is set to true when react-native is running in Dev mode.
//     // __DEV__ is true when run locally, but false when published.
//     if (__DEV__) {
//       return ENV.dev
//     } else if (env === 'staging') {
//       return ENV.staging
//     } else if (env === 'prod') {
//       return ENV.prod
//     }
//   }
//   export default getEnvVars