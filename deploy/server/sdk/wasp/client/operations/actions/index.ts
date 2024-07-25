import { type ActionFor, createAction } from './core'
import { CreateTask_ext } from 'wasp/server/operations/actions'
import { UpdateTask_ext } from 'wasp/server/operations/actions'

// PUBLIC API
export const createTask: ActionFor<CreateTask_ext> = createAction<CreateTask_ext>(
  'operations/create-task',
  ['Task'],
)

// PUBLIC API
export const updateTask: ActionFor<UpdateTask_ext> = createAction<UpdateTask_ext>(
  'operations/update-task',
  ['Task'],
)
