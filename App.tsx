import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import "./localization/i18n";

const Container = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

const WelcomeText = styled.Text`
  color: blue;
  font-size: 24px;
`;

export default function App() {
  const { t } = useTranslation();

  return (
    <Container>
      <WelcomeText>{t("welcome")}</WelcomeText>
    </Container>
  );
}
