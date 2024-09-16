import {
	type FC,
	createContext,
	useState,
	useContext,
	type ReactNode,
	useEffect,
} from "react";
import { v4 as uuid } from "uuid";

type TodoContextType = {
	// Todo 3.1
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
	// Todo 3.2

	const value: TodoContextType = {
		// Todo 3.2
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = (): TodoContextType => {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error("useTodo must be used within a TodoProvider");
	}
	return context;
};
