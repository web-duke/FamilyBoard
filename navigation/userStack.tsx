import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import openWeatherConfig from "../config/openWeather";
import DrawerComponent from "../src/components/DrawerComponent";

const Stack = createStackNavigator();

export default function UserStack() {
  const [weather, setWeather] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherConfig.apiKey}&units=metric&lang=${i18n.language}`
      );
      const temperature = Math.round(response.data.main.temp);
      const feelsLike = Math.round(response.data.main.feels_like);
      const condition =
        response.data.weather[0].description.charAt(0).toUpperCase() +
        response.data.weather[0].description.slice(1);
      const humidity = response.data.main.humidity;

      setWeather(
        `${condition}, ${temperature}°C, ${t(
          "weather.feelsLike"
        )} ${feelsLike}°C, ${humidity}%  ${t("weather.humidity")}`
      );
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={weather || t("familyBoard")}
          component={DrawerComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
