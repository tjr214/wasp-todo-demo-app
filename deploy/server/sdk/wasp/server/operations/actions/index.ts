
import { prisma } from 'wasp/server'
import {
  type UnauthenticatedOperationFor,
  createUnauthenticatedOperation,
  type AuthenticatedOperationFor,
  createAuthenticatedOperation,
} from '../wrappers.js'
import { createTask as createTask_ext } from 'wasp/ext-src/actions'
import { updateTask as updateTask_ext } from 'wasp/ext-src/actions'

// PRIVATE API
export type CreateTask_ext = typeof createTask_ext

// PUBLIC API
export const createTask: AuthenticatedOperationFor<CreateTask_ext> =
  createAuthenticatedOperation(
    createTask_ext,
    {
      Task: prisma.task,
    },
  )

// PRIVATE API
export type UpdateTask_ext = typeof updateTask_ext

// PUBLIC API
export const updateTask: AuthenticatedOperationFor<UpdateTask_ext> =
  createAuthenticatedOperation(
    updateTask_ext,
    {
      Task: prisma.task,
    },
  )
