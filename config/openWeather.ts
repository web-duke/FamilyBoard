import Constants from "expo-constants";

const openWeatherConfig = {
  apiKey: Constants.expoConfig?.extra?.openWeatherApiKey,
};

export default openWeatherConfig;
