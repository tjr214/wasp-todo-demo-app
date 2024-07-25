import { type QueryFor, createQuery } from './core'
import { GetTasks_ext } from 'wasp/server/operations/queries'

// PUBLIC API
export const getTasks: QueryFor<GetTasks_ext> = createQuery<GetTasks_ext>(
  'operations/get-tasks',
  ['Task'],
)

// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core'
