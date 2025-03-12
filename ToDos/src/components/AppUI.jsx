import React, { Fragment } from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
// import './App.css';
import uniqid from 'uniqid';

const AppUI = ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) => {
    return (
        <Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue} //envio de props desde el estado de app
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {searchedTodos.map(item => (
                    <TodoItem
                        key={uniqid()}
                        text={item.text}
                        completed={item.completed}
                        onComplete={() => { completeTodo(item.text) }}
                        onDelete={() => { deleteTodo(item.text) }}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </Fragment>
    )
}

export default AppUI
