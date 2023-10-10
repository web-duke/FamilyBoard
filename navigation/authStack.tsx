import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import SignIn from "../src/screens/SignIn";
import SignOut from "../src/screens/SignUp";
import Welcome from "../src/screens/Welcome";

const Stack = createStackNavigator();

export default function AuthStack() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t("familyBoard")} component={Welcome} />
        <Stack.Screen name={t("signIn")} component={SignIn} />
        <Stack.Screen name={t("signUp")} component={SignOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
