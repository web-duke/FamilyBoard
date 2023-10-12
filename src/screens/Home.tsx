import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";

interface Task {
  id: string;
  title: string;
  status: "todo" | "wip" | "done";
  priority: "high" | "normal" | "low";
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>ixi</Text>
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

export default Home;
