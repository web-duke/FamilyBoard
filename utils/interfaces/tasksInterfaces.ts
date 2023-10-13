import { TaskPriority, TaskStatus } from "../enums/tasksEnums";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}
