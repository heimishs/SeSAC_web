import React, { useState, useRef } from "react";
import { TodoItemInterface } from "../../types/interface";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // todo List를 담을 state
  const [todos, setTodos] = useState<TodoItemInterface[]>([]);
  //   [{id, text, done}]

  //   새로운 todo 아이템의 테긋트를 받음 state
  const [newTodo, setNewTodo] = useState<string>("");

  //   input 접근을 위한
  const inputRef = useRef<HTMLInputElement>(null);

  //   새로운 todo 추가
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          done: false,
        },
      ];

      setTodos(updatedTodo);
      setNewTodo("");
    }
  };
  //   todo 아이템 완료 state 변경
  const toggleComplete = (id: number) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(updateTodo);
  };
  //   엔터 눌렀을때 todo 추가
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      addTodo();
      setNewTodo("");
      focusInput();
    }
  };
  //   input 포커스 처리하기
  const focusInput = () => {
    inputRef.current?.focus();
  };
  console.log(todos);
  return (
    <div style={{ backgroundColor: "#00ff0022" }}>
      <h2>TodoList</h2>
      <input
        type="text"
        ref={inputRef}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <button>포커스</button>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
      <h2>DoneList</h2>
      <ul>
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
      </ul>
    </div>
  );
}
