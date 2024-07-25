import { AuthUser } from "wasp/auth";
import { FormEvent, ChangeEvent } from "react";
import { Task } from "wasp/entities";
import { createTask, updateTask, getTasks, useQuery } from "wasp/client/operations";
import { logout } from "wasp/client/auth";

// import { Button } from "./components/ui/button";

// import "./style.css";

// Our `MainPage` Component for the TodoApp
export const MainPage = ({ user }: { user: AuthUser }) => {
	// First, run `getTasks` from the Server and get us some tasks!
	const { data: tasks, isLoading, error } = useQuery(getTasks);

	console.log(user);

	// Now render the main page!
	return (
		<div>
			{/* Let the User add more Tasks to their list */}
			<AddNewTaskForm />

			{/* If dB retrieval of `tasks` is successful, try rendering them out */}
			{tasks && <FullTasksList tasks={tasks} />}

			{isLoading && "Loading..."}
			{error && "Error: " + error}
			<button onClick={logout}>Logout</button>
			{/* <Button>Hello</Button> */}
		</div>
	);
};

// This is a Component that loops through the Task[] array and renders each Task
const FullTasksList = ({ tasks }: { tasks: Task[] }) => {
	if (!tasks?.length) return <div>No Tasks</div>;
	return (
		<div>
			{tasks.map((task, idx) => (
				<SingleTaskView task={task} key={idx} />
			))}
		</div>
	);
};

// Component that does the actual rendering of each individual task entry
const SingleTaskView = ({ task }: { task: Task }) => {
	// Define behavior to handle updating the Task when marked done/undone
	const handleIsDoneChange = async (event: ChangeEvent<HTMLInputElement>) => {
		try {
			// Call the Server via RPC
			await updateTask({
				id: task.id,
				isDone: event.target.checked,
			});
		} catch (error: any) {
			window.alert("Error while updating task: " + error.message);
		}
	};
	return (
		<div>
			<input type="checkbox" id={String(task.id)} checked={task.isDone} onChange={handleIsDoneChange} />
			{task.description}
		</div>
	);
};

// This Component let's us add new Tasks for the User
const AddNewTaskForm = () => {
	// Define behavior for handling the form submit action
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const target = event.target as HTMLFormElement;
			const description = target.description.value;
			target.reset();
			await createTask({ description }); // RPC call to Server
		} catch (err: any) {
			window.alert("Error: " + err.message);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input name="description" type="text" defaultValue="" />
			<input type="submit" value="Create Task" />
		</form>
	);
};
