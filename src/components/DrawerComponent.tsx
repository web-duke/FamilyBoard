import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import Home from "../screens/Home";
import DrawerSignOutButton from "./DrawerSignOutButton";

const Drawer = createDrawerNavigator();

const DrawerComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName={t("home")}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerSignOutButton />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name={t("home")} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
