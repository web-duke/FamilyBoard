import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
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

const StyledTextError = styled.Text`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  background-color: red;
  color: #ffffff;
`;

const auth = getAuth();

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: t("errors.emailPasswordMandatory"),
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: (error as Error).message,
      });
    }
  }

  return (
    <StyledView>
      {!!value.error && <StyledTextError>{value.error}</StyledTextError>}

      <Input
        placeholder={t("email")}
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        leftIcon={<Icon name="envelope" size={16} />}
      />

      <Input
        placeholder={t("password")}
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={16} />}
      />

      <Button title={t("signIn")} onPress={signIn} />
    </StyledView>
  );
};

export default SignIn;
