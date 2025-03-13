import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	};

	const deleteTodo = (index) => {
		setTodos(todos.filter((_, i) => i !== index));
	};

	return (
		<div className="container">
			<h1>TODOS</h1>
			<ul className="todo-list">
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={addTodo}
						placeholder="What needs to be done?"
					/>
				</li>

				{todos.length === 0 ? (
					<p className="empty-message">No tasks, add one!</p>
				) : (
					todos.map((task, index) => (
						<li key={index} className="todo-item">
							{task}
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={() => deleteTodo(index)}
							></button>
						</li>
					))
				)}
			</ul>
			<div>{todos.length} items left</div>
		</div>
	);
};

export default Home;
