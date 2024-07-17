/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, ChangeEvent, FormEvent } from "react";
import TodoItem from "./TodoItem";
import { ITask } from "../Interfaces";

/**
 * *TodoList component manages the state and rendering of the todo list.
 */
const TodoList: React.FC = () => {
  // State to manage the current task input value
  const [task, setTask] = useState<string>("");
  // State to manage the list of tasks
  const [todoList, setTodoList] = useState<ITask[]>([]);
    // TODO: add other state variables here

  /**
   * Handles changes to the input fields for task and deadline.
   * @param e - The change event from the input fields.
   */
  const handleNewTask = (e: ChangeEvent<HTMLInputElement>): void => {
    // TODO
  };

  /**
   * Adds a new task to the todo list.
   * @param e - The form submission event.
   */
  const addTask = (e: FormEvent): void => {
    e.preventDefault();
    // TODO

  };

  /**
   * Deletes a task from the todo list based on its ID.
   * @param taskIdToDelete - The ID of the task to delete.
   */
  const deleteTask = (taskIdToDelete: number): void => {
    // TODO
  };

  /**
   * Toggles the completion status of a task based on its ID.
   * @param taskIdToComplete - The ID of the task to toggle completion.
   */
  const completeTask = (taskIdToComplete: number): void => {
    // TODO
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
        // TODO: Create a form to handle task and deadline inputs
        {/* add more elements here */}

     
      <br /> 

      // TODO : Render the TodoItem components here
      {/* {todoList.map((task: ITask, key: number) => {
        return (
          <TodoItem
            task={task}
            key={key}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        );
      })} */}
    </div>
  );
};

export default TodoList;
