import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import Home from "../src/screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t("familyBoard")} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
