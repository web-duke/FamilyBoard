import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const Welcome: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        title={t("signIn")}
        onPress={() => navigation.navigate(t("signIn"))}
      />

      <Button
        title={t("signUp")}
        type="outline"
        onPress={() => navigation.navigate(t("signUp"))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});

export default Welcome;
