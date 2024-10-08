/*****************************************************************************************
 * Accesses a variable inside of .env file and cache for later usage; throws an error if its not found.
 *
 * caching the values to improve the performance.
 *
 * Usage:
 *
 * import accessEnv from "helpers/accessEnv";
 *
 * const redirectionHost = accessEnv("MAJOR_VERSION", 1);
 ****************************************************************************************/
import Config from 'react-native-config';

const cache: Record<string, string> = {};

const accessEnv = (key: string, defaultValue?: string | number): string => {
  // If the .env variable is not declared
  if (!(key in Config)) {
    if (defaultValue !== undefined) {
      return defaultValue.toString(); // Convert defaultValue to string if provided
    }
    throw new Error(`${key} not found in .env`);
  }

  // If returned as undefined
  if (Config[key] === undefined || Config[key] === null) {
    if (defaultValue !== undefined) {
      return defaultValue.toString(); // Convert defaultValue to string if provided
    }
    throw new Error(`${key} not found in .env`);
  }

  if (cache[key] !== undefined) {
    return cache[key];
  }

  cache[key] = Config[key]; // Use type assertion to tell TypeScript it's a string

  return Config[key]; // Use type assertion to tell TypeScript it's a string
};

export default accessEnv;
