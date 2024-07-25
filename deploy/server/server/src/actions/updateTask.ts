import { prisma } from 'wasp/server'

import { updateTask } from '../../../../../src/actions'


export default async function (args, context) {
  return (updateTask as any)(args, {
    ...context,
    entities: {
      Task: prisma.task,
    },
  })
}
