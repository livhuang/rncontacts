import {DEV_BACKEND_URL, PROD_BACKEND_URL} from "@env";

const devEnvironmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

console.log("DEV_BACKEND_URL???: >>>>>", devEnvironmentVariables);
console.log("PROD_BACKEND_URL???: >>>>>", PROD_BACKEND_URL);


export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;

/* 
the constant __DEV__ tells us 
if we are in the development environment or not...

returns true if the app is running on development mode,
otherwise returns false...
 */
