import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "react-native-elements";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";

import "./config/firebase";
import RootNavigation from "./navigation";

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
    <ThemeProvider>
      <RootNavigation />
      {/* <Container>
        <WelcomeText>{t("welcome")}</WelcomeText>
      </Container> */}
    </ThemeProvider>
  );
}
