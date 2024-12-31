"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const addTodo = (event) => {
    event.preventDefault();

    const todoTextInput = document.getElementById("todo-text-input");

    setTodoList((val) => [
      ...val,
      {
        id: new Date().valueOf(),
        todoText: todoTextInput.value,
        isDone: false,
      },
    ]);

    todoTextInput.value = "";
  };

  const updateTodo = (id) => {
    setTodoList((val) => {
      const index = val.findIndex((item) => item.id === id);
      return [
        ...val.slice(0, index),
        { ...val[index], isDone: !val[index].isDone },
        ...val.slice(index + 1),
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodoList((val) => {
      const index = val.findIndex((item) => item.id === id);
      return [...val.slice(0, index), ...val.slice(index + 1)];
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 h-screen max-h-svh">
      <h1 className="text-4xl font-semibold my-6">Todo App</h1>

      <form className="flex" onSubmit={addTodo}>
        <div>
          <Label htmlFor="todo-text-input" className="sr-only">
            Todo Text
          </Label>
          <Input id="todo-text-input" required className="rounded-r-none" />
        </div>
        <Button className="rounded-l-none">Add Todo</Button>
      </form>
      <div className="w-full flex flex-col gap-4 p-4 flex-1">
        {todoList
          .filter((todoItem) => {
            switch (filterType) {
              case "completed":
                return todoItem.isDone === true;
              case "pending":
                return todoItem.isDone === false;
              default:
                return true;
            }
          })
          .map((todoItem) => {
            return (
              <div className="flex items-center gap-4" key={todoItem.id}>
                <div>
                  <Label htmlFor="isdone-checkbox" className="sr-only">
                    Todo Text
                  </Label>
                  <Checkbox
                    id="isdone-checkbox"
                    checked={todoItem.isDone}
                    onCheckedChange={() => updateTodo(todoItem.id)}
                  />
                </div>
                <p
                  className="flex-1"
                  style={{
                    textDecoration: todoItem.isDone ? "line-through" : "none",
                  }}
                >
                  {todoItem.todoText}
                </p>
                <Button
                  variant="destructive"
                  onClick={() => deleteTodo(todoItem.id)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
      </div>
      <div className="flex w-full">
        <Button
          className="flex-1 rounded-none"
          variant={filterType === "all" ? "default" : "secondary"}
          onClick={() => setFilterType("all")}
        >
          All
        </Button>
        <Button
          className="flex-1 rounded-none"
          variant={filterType === "pending" ? "default" : "secondary"}
          onClick={() => setFilterType("pending")}
        >
          Pending
        </Button>
        <Button
          className="flex-1 rounded-none"
          variant={filterType === "completed" ? "default" : "secondary"}
          onClick={() => setFilterType("completed")}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default Todo;
