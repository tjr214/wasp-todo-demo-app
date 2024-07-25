import { type _Task, type AuthenticatedQueryDefinition, type Payload } from 'wasp/server/_types';
export type GetTasks<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedQueryDefinition<[
    _Task
], Input, Output>;
