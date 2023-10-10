import React from "react";
import { ThemeProvider } from "react-native-elements";
import styled from "styled-components/native";

import "../config/firebase";
import RootNavigation from "../navigation";

import "../localization/i18n";

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
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
