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

interface AddTaskModalInterface {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: React.FC<AddTaskModalInterface> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [title, setTitle] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);
  const [priorityIndex, setPriorityIndex] = useState(1);

  const statusButtons = TaskStatusEnumToI18nArray();
  const priorityButtons = TaskPriorityEnumToI18nArray();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: TaskStatusIndexToEnum(statusIndex),
      priority: TaskPriorityIndexToEnum(priorityIndex),
    };

    dispatch(addTask(newTask));
    setModalVisible(false);
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

          <Button title="Submit" onPress={handleSubmit} />
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
