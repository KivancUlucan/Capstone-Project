import { useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import AddTaskForm from "./addTask";
import styled from "styled-components";

export default function Board() {
  const [tasks, setTask] = useState([]);
  const updateTasks = (newTask) => setTask([...tasks, newTask]);
  return (
    <>
      {" "}
      <AddTaskForm updateTasks={updateTasks} />
      <CardContainer>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </CardContainer>
    </>
  );
}
const CardContainer = styled.div`
  display: flex;
`;
