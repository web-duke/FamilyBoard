import { getAuth, signOut } from "firebase/auth";
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

const auth = getAuth();

const Home: React.FC = () => {
  const { t } = useTranslation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledView>
      <Button title={t("signOut")} onPress={handleSignOut} />
    </StyledView>
  );
};

export default Home;
