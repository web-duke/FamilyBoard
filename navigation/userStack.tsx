import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import openWeatherConfig from "../config/openWeather";
import Home from "../src/screens/Home";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator initialRouteName={t("home")}>
      <Drawer.Screen name={t("home")} component={Home} />
    </Drawer.Navigator>
  );
}

export default function UserStack() {
  const [weather, setWeather] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherConfig.apiKey}`
      );
      const temperature = Math.round(response.data.main.temp - 273.15);
      const condition = response.data.weather[0].main;

      setWeather(`${condition} - ${temperature}°C`);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={weather || t("familyBoard")}
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
