import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator initialRouteName={t("home")}>
      <Drawer.Screen name={t("home")} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
