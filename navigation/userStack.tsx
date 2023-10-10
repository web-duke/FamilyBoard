import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import Home from "../src/screens/Home";

const Stack = createStackNavigator();

export default function UserStack() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t("home")} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
