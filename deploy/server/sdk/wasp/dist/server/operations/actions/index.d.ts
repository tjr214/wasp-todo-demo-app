import { type AuthenticatedOperationFor } from '../wrappers.js';
import { createTask as createTask_ext } from 'wasp/ext-src/actions';
import { updateTask as updateTask_ext } from 'wasp/ext-src/actions';
export type CreateTask_ext = typeof createTask_ext;
export declare const createTask: AuthenticatedOperationFor<CreateTask_ext>;
export type UpdateTask_ext = typeof updateTask_ext;
export declare const updateTask: AuthenticatedOperationFor<UpdateTask_ext>;
