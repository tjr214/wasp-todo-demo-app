import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { createTask as createTask_ext } from 'wasp/ext-src/actions';
import { updateTask as updateTask_ext } from 'wasp/ext-src/actions';
// PUBLIC API
export const createTask = createAuthenticatedOperation(createTask_ext, {
    Task: prisma.task,
});
// PUBLIC API
export const updateTask = createAuthenticatedOperation(updateTask_ext, {
    Task: prisma.task,
});
//# sourceMappingURL=index.js.map