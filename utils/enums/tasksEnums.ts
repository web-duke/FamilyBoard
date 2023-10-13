import { t } from "i18next";

export enum TaskStatus {
  TODO = "todo",
  WIP = "wip",
  DONE = "done",
}

export enum TaskPriority {
  HIGH = "high",
  NORMAL = "normal",
  LOW = "low",
}

export const TaskStatusIndexToEnum = (index: number): TaskStatus => {
  const keys = Object.keys(TaskStatus);
  return TaskStatus[keys[index] as keyof typeof TaskStatus];
};

export const TaskPriorityIndexToEnum = (index: number): TaskPriority => {
  const keys = Object.keys(TaskPriority);
  return TaskPriority[keys[index] as keyof typeof TaskPriority];
};

export const TaskStatusEnumToI18nArray = () =>
  Object.values(TaskStatus).map((val) => t("tasks.status." + val));

export const TaskPriorityEnumToI18nArray = () =>
  Object.values(TaskPriority).map((val) => t("tasks.priority." + val));
