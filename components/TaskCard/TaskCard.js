import styled from "styled-components";
import { useState } from "react";
import { css } from "styled-components";

import AddTaskForm from "@/pages/addTask";

export default function TaskCard({ task, updateTask }) {
  const [editMode, setEditMode] = useState(false);
  const handleEdit = (event) => {
    // Handle edit button click
    event.preventDefault(); // Prevent default form submission behavior
    //setEditMode(false); // Set edit mode to false to save user's information
    setEditMode(!editMode);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setEditMode(false);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    updateTask(data);
  }

  return (
    <>
      {editMode ? (
        <Card>
          <StyledLabel htmlFor="title">Title:</StyledLabel>
          <StyledInput
            id="title"
            type="text"
            name="title"
            minlength="3"
            maxlength="30"
            placeholder="Enter a title"
            required
            value={task.title}
          />

          <StyledLabel htmlFor="description">Description:</StyledLabel>
          <TextareaForDescription
            id="description"
            type="text"
            name="description"
            minlength="3"
            maxlength="100"
            placeholder="Enter a description"
            required
            value={task.description}
          ></TextareaForDescription>

          <StyledLabel htmlFor="prio">Priority:</StyledLabel>
          <StyledSelect id="prio" name="prio" required>
            <option selected={task.prio === "Urgent"} value="Urgent">
              Urgent
            </option>
            <option selected={task.prio === "Medium"} value="Medium">
              Medium
            </option>
            <option selected={task.prio === "Low"} value="Low">
              Low
            </option>
          </StyledSelect>

          <StyledLabel htmlFor="dueDate">Due Date:</StyledLabel>
          <StyledInput
            type="date"
            id="dueDate"
            name="dueDate"
            required
            value={task.dueDate}
          />

          <StyledLabel htmlFor="category">Category:</StyledLabel>
          <StyledSelect id="category" name="category" required>
            <option
              selected={task.category === "Tasks in Backlog"}
              value="Tasks in Backlog"
            >
              Backlog
            </option>
            <option
              selected={task.category === "Tasks in Progress"}
              value="Tasks in Progress"
            >
              In Progress
            </option>
            <option
              selected={task.category === "Awaiting Feedback"}
              value="Awaiting Feedback"
            >
              Awaiting Feedback
            </option>
            <option selected={task.category === "Done"} value="Done">
              Done
            </option>
          </StyledSelect>
          <SaveTaskButton type="submit" onClick={handleSubmit}>
            Save
          </SaveTaskButton>
        </Card>
      ) : (
        <Card>
          <Title>Title: {task.title}</Title>
          <Description>Description: {task.description}</Description>
          <Priority>Priority: {task.prio}</Priority>
          <DueDate>DueDate: {task.dueDate}</DueDate>
          <Category>Category: {task.category}</Category>
          <EditButton type="submit" onClick={handleEdit}>
            Edit
          </EditButton>
        </Card>
      )}
    </>
  );
}

const Card = styled.div`
  border: 0.03rem solid #d1d1d1;
  border-radius: 1.25rem;
  min-width: 20rem;
  min-height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const Priority = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const DueDate = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const Category = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;
const EditButton = styled.button``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
export const baseInputStyles = css`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const TextareaForDescription = styled.textarea`
  ${baseInputStyles}
`;

export const StyledSelect = styled.select`
  ${baseInputStyles}
`;

export const SaveTaskButton = styled.button`
  margin-top: 2rem;
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
`;
