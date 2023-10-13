import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import AddTaskModal from "../components/modals/AddTaskModal";
import { Task } from "../../utils/interfaces/tasksInterfaces";

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>{t("tasks.addNew")}</Text>
      </TouchableOpacity>

      <AddTaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
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

export default Home;
