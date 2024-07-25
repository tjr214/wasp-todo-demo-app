import { Task } from "wasp/entities";
import { CreateTask, UpdateTask } from "wasp/server/operations";
type CreateTaskPayload = Pick<Task, "description">;
export declare const createTask: CreateTask<CreateTaskPayload, Task>;
type UpdateTaskPayload = Pick<Task, "id" | "isDone">;
export declare const updateTask: UpdateTask<UpdateTaskPayload, {
    count: number;
}>;
export {};
