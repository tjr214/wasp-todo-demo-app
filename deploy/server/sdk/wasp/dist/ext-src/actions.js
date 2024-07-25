import { HttpError } from "wasp/server";
// This is the function to create a new task.
// Input: the "description" of the new task.
// Output: the newly created `Task`.
export const createTask = async (
// args, (old way)
{ description }, // Destructure from `args` (better way)
context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.create({
        data: {
            // description: args.description, (old way)
            description, // (better way)
            user: { connect: { id: context.user.id } }, // assign task to user via user's id
        },
    });
};
// This is the function to update a user's task.
// Input: the "id" of the Task and the new state of "isDone".
// Output: a `BatchPayload` from the Prisma Client. Destructure into `count: number`.
export const updateTask = async (
// args,
{ id, isDone }, // Destructure these from the usual `args` param
context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.updateMany({
        where: {
            id, // would otherwise be `id: args.id` (aka old way)
            user: {
                id: context.user.id, // Make sure we are only updating tasks owned by current user
            },
        },
        data: {
            isDone: isDone, // instead of `isDone: args.isDone`
        },
    });
};
//# sourceMappingURL=actions.js.map