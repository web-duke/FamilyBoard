import { Task } from "../../utils/interfaces/tasksInterfaces";

export const ADD_TASK = "ADD_TASK";
export const addTask = (task: Task) => ({
  type: ADD_TASK,
  payload: task,
});
