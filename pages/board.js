import { useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import styled from "styled-components";

export default function Board({ tasks }) {
  console.log(tasks);
  return (
    <CardContainer>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
