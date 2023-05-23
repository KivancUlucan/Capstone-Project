import { useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import styled from "styled-components";

export default function Board({ tasks, updateTaskParent }) {
  const updateTask = function (task) {
    updateTaskParent(task);
  };

  return (
    <CardContainer>
      <h1>Board</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} updateTask={updateTask} />
      ))}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
