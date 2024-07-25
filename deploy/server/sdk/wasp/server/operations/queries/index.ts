
import { prisma } from 'wasp/server'
import {
  type UnauthenticatedOperationFor,
  createUnauthenticatedOperation,
  type AuthenticatedOperationFor,
  createAuthenticatedOperation,
} from '../wrappers.js'
import { getTasks as getTasks_ext } from 'wasp/ext-src/queries'

// PRIVATE API
export type GetTasks_ext = typeof getTasks_ext

// PUBLIC API
export const getTasks: AuthenticatedOperationFor<GetTasks_ext> =
  createAuthenticatedOperation(
    getTasks_ext,
    {
      Task: prisma.task,
    },
  )

