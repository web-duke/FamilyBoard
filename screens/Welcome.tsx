import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-elements";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  justify-content: center;
  gap: 20;
`;

const Welcome: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <StyledView>
      <Button
        title={t("signIn")}
        onPress={() => navigation.navigate(t("signIn"))}
      />

      <Button
        title={t("signUp")}
        type="outline"
        onPress={() => navigation.navigate(t("signUp"))}
      />
    </StyledView>
  );
};

export default Welcome;
