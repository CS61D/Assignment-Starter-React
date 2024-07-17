/* eslint-disable react/jsx-no-comment-textnodes */
import { ITask } from "../Interfaces";

/**
 * Props interface for the TodoItem component.
 */
interface TodoItemProps {
  task: ITask;
  // TODO: Add more props here
}

/**
 * Functional component representing a single todo item.
 *
 * @component
 * @param {TodoItemProps} props - Props for the component.
 * @returns {JSX.Element} The JSX element representing the todo item.
 */
// TODO: Pass in the rest of the TodoItemProps
const TodoItem = ({task}: TodoItemProps) => {
  return (
    <div className="todo">
      <span>
        // TODO:
        {/* add an input of type checkbox */}
        {/* add a task's taskName and deadline. */}
        {/* add a Delete button */}
      </span>
      <br />
    </div>
  );
};

export default TodoItem;
