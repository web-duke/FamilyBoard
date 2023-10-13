import { Action } from "redux";
import { ADD_TASK } from "../actions/taskActions";
import { Task } from "../../utils/interfaces/tasksInterfaces";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

interface AddTaskAction extends Action {
  type: "ADD_TASK";
  payload: Task;
}

type TaskActions = AddTaskAction;

const tasksReducer = (state = initialState, action: TaskActions): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default tasksReducer;
