import { type AuthenticatedOperationFor } from '../wrappers.js';
import { getTasks as getTasks_ext } from 'wasp/ext-src/queries';
export type GetTasks_ext = typeof getTasks_ext;
export declare const getTasks: AuthenticatedOperationFor<GetTasks_ext>;
