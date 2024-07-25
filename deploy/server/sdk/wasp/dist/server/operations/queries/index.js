import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { getTasks as getTasks_ext } from 'wasp/ext-src/queries';
// PUBLIC API
export const getTasks = createAuthenticatedOperation(getTasks_ext, {
    Task: prisma.task,
});
//# sourceMappingURL=index.js.map