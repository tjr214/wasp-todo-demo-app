import { type _Task, type AuthenticatedActionDefinition, type Payload } from 'wasp/server/_types';
export type CreateTask<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Task
], Input, Output>;
export type UpdateTask<Input extends Payload = never, Output extends Payload = Payload> = AuthenticatedActionDefinition<[
    _Task
], Input, Output>;
