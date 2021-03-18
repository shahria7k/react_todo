import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
import DB from "./firebase";
function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		DB.collection("todos").onSnapshot((snapshot) => {
			setTodos(snapshot.docs.map((doc) => doc.data().todo));
		});
	}, []);
	const addTodo = (event) => {
		event.preventDefault();
		DB.collection("todos").add({
			todo: input,
		});
		setTodos([...todos, input]);
		console.log(todos);
	};
	const buttonStyle = {
		marginTop: "10px",
	};
	return (
		<div className="App">
			<h1>🚀 hello world </h1>
			<form>
				<FormControl>
					<InputLabel> Write a Todo</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					<Button
						style={buttonStyle}
						disabled={!input}
						variant="contained"
						color="primary"
						n
						type="submit"
						onClick={addTodo}
					>
						Add Todo ✅
					</Button>
				</FormControl>
			</form>
			<ul>
				{todos.map((todo) => (
					<Todo text={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
