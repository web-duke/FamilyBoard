import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, View } from "react-native";

const auth = getAuth();

const DrawerSignOutButton: React.FC = () => {
  const { t } = useTranslation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return <Button title={t("signOut")} onPress={handleSignOut} />;
};

export default DrawerSignOutButton;
