import { StackScreenProps } from "@react-navigation/stack";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const auth = getAuth();
const user = auth.currentUser;
let userId: string;
if (user !== null) {
  userId = user.uid;
}
const db = getDatabase();

const SignUp: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: t("errors.emailPasswordMandatory"),
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      const user = userCredential.user;

      if (user) {
        const userId = user.uid;

        const boardRef = ref(db, `boards/${userId}_board`);
        const newBoard = {
          id: `${userId}_board`,
          owner: userId,
        };

        await set(boardRef, newBoard);
      }

      navigation.navigate(t("signIn"));
    } catch (error) {
      setValue({
        ...value,
        error: (error as Error).message,
      });
    }
  }

  return (
    <View style={styles.container}>
      {!!value.error && <Text style={styles.errorMessage}>{value.error}</Text>}

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

      <Button title={t("signUp")} onPress={signUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  errorMessage: {
    padding: 20,
    backgroundColor: "red",
    color: "#ffffff",
  },
});

export default SignUp;
