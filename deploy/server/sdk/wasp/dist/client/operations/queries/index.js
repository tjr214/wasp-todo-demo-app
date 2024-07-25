import { createQuery } from './core';
// PUBLIC API
export const getTasks = createQuery('operations/get-tasks', ['Task']);
// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core';
//# sourceMappingURL=index.js.map