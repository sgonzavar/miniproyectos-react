import React, { useState, useEffect } from 'react';
import AppUI from './components/AppUI'


// const defaulTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el cursso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'LALALALAA', completed: false },
// ];

const useLocalStorage = (itemName, initValue) => {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [item, setItem] = React.useState(initValue);

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initValue));
					parsedItem = initValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 1000);
	});

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	return {
		item,
		saveItem,
		loading,
		error,
	};
}

function App() {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOv1', []);
	const [searchValue, setSearchValue] = useState("");

	const completedTodos = todos.filter(item => !!item.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoTxt = todo.text.toLowerCase();
			const searchTxt = searchValue.toLowerCase();
			return todoTxt.includes(searchTxt);
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};



	return (
		<AppUI
			loading={loading}
			error={error}
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;