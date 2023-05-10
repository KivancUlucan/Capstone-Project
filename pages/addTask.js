import styled from "styled-components";
import { useState } from "react";

export default function AddTaskForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <AddTask_Form onSubmit={handleSubmit}>
      <h1>Add Task</h1>

      <LabelForTitle htmlFor="title">Title:</LabelForTitle>
      <InputForTitle
        id="title"
        type="text"
        name="title"
        minlength="3"
        maxlength="30"
        required
      />

      <LabelForDescription htmlFor="description">
        Description:
      </LabelForDescription>
      <TextareaForDescription
        id="description"
        type="text"
        name="description"
        minlength="3"
        maxlength="100"
        required
      ></TextareaForDescription>

      <LabelForPriority htmlFor="prio">Priority:</LabelForPriority>
      <select id="prio" name="prio" required>
        <option value="Urgent">Urgent</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <LabelForDueDate htmlFor="dueDate">Due Date:</LabelForDueDate>
      <InputForDueDate type="date" id="dueDate" name="dueDate" required />

      <LabelForCategory htmlFor="category">Category:</LabelForCategory>
      <select id="category" name="category" required>
        <option value="Backlog">Backlog</option>
        <option value="In Progress">In Progress</option>
        <option value="Awaiting Feedback">Awaiting Feedback</option>
        <option value="Done">Done</option>
      </select>

      <button type="submit">Add Task</button>
    </AddTask_Form>
  );
}

const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddTask_Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const LabelForTitle = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
const InputForTitle = styled.input`
  box-sizing: border-box;
  border-radius: 0.6rem;
  width: 22.5rem;
`;
const LabelForDescription = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
const TextareaForDescription = styled.textarea`
  box-sizing: border-box;
  border-radius: 0.6rem;
  width: 22.5rem;
`;
const LabelForPriority = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
const LabelForDueDate = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const InputForDueDate = styled.input`
  box-sizing: border-box;
  border-radius: 0.6rem;
  width: 22.5rem;
`;
const LabelForCategory = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
