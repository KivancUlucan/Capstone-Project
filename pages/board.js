import { useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import styled from "styled-components";

export default function Board({ tasks, updateTaskParent }) {
  const updateTask = function (task) {
    updateTaskParent(task);
  };

  const uniqueCategories = tasks.reduce((categories, task) => {
    if (!categories.includes(task.category)) {
      categories.push(task.category);
    }
    return categories;
  }, []);

  const TaskList = ({ tasks }) => {
    return (
      <>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} updateTask={updateTask} />
        ))}
      </>
    );
  };

  return (
    <CardContainer>
      <h1>Board</h1>
      {uniqueCategories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <TaskList
            tasks={tasks.filter((task) => task.category === category)}
          />
        </div>
      ))}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
