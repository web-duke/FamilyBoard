import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/actions/taskActions";
import {
  TaskPriorityEnumToI18nArray,
  TaskPriorityIndexToEnum,
  TaskStatusEnumToI18nArray,
  TaskStatusIndexToEnum,
} from "../../../utils/enums/tasksEnums";
import { Task } from "../../../utils/interfaces/tasksInterfaces";
import { t } from "i18next";
import { getDatabase, ref, set } from "firebase/database";
import app from "../../../config/firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
let userId: string;
if (user !== null) {
  userId = user.uid;
}

interface AddTaskModalInterface {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: React.FC<AddTaskModalInterface> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);
  const [priorityIndex, setPriorityIndex] = useState(1);
  const db = getDatabase(app);

  const statusButtons = TaskStatusEnumToI18nArray();
  const priorityButtons = TaskPriorityEnumToI18nArray();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoaderVisible(true);

    const newTask: Task = {
      id: Date.now().toString(),
      boardID: `${userId}_board`,
      title,
      status: TaskStatusIndexToEnum(statusIndex),
      priority: TaskPriorityIndexToEnum(priorityIndex),
    };

    try {
      const taskRef = ref(db, `tasks/${userId}/${newTask.id}`);
      await set(taskRef, newTask);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(addTask(newTask));
      setModalVisible(false);
      setLoaderVisible(false);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>X</Text>
          </TouchableOpacity>

          <Text>{t("tasks.addNew")}</Text>

          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />

          <ButtonGroup
            onPress={setStatusIndex}
            selectedIndex={statusIndex}
            buttons={statusButtons}
          />

          <ButtonGroup
            onPress={setPriorityIndex}
            selectedIndex={priorityIndex}
            buttons={priorityButtons}
          />

          <Button
            title="Submit"
            onPress={handleSubmit}
            loading={loaderVisible}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: { backgroundColor: "white", padding: 20, width: "80%" },
});

export default AddTaskModal;
