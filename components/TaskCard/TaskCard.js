import styled from "styled-components";
import { useState } from "react";
import { css } from "styled-components";

import AddTaskForm from "@/pages/addTask";

export default function TaskCard({ task, updateTask }) {
  const [editMode, setEditMode] = useState(false);
  const [taskout, setTaskOut] = useState({ ...task });

  const handleEdit = (event) => {
    // Handle edit button click
    event.preventDefault(); // Prevent default form submission behavior
    //setEditMode(false); // Set edit mode to false to save user's information
    setEditMode(!editMode);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskOut((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    setEditMode(false);
    updateTask(taskout);
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
            value={taskout.title}
            onChange={handleChange}
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
            value={taskout.description}
            onChange={handleChange}
          ></TextareaForDescription>

          <StyledLabel htmlFor="prio">Priority:</StyledLabel>
          <StyledSelect id="prio" name="prio" required onChange={handleChange}>
            <option selected={taskout.prio === "Urgent"} value="Urgent">
              Urgent
            </option>
            <option selected={taskout.prio === "Medium"} value="Medium">
              Medium
            </option>
            <option selected={taskout.prio === "Low"} value="Low">
              Low
            </option>
          </StyledSelect>

          <StyledLabel htmlFor="dueDate">Due Date:</StyledLabel>
          <StyledInput
            type="date"
            id="dueDate"
            name="dueDate"
            required
            value={taskout.dueDate}
            onChange={handleChange}
          />

          <StyledLabel htmlFor="category">Category:</StyledLabel>
          <StyledSelect
            id="category"
            name="category"
            required
            onChange={handleChange}
          >
            <option
              selected={taskout.category === "Tasks in Backlog"}
              value="Tasks in Backlog"
            >
              Backlog
            </option>
            <option
              selected={taskout.category === "Tasks in Progress"}
              value="Tasks in Progress"
            >
              In Progress
            </option>
            <option
              selected={taskout.category === "Awaiting Feedback"}
              value="Awaiting Feedback"
            >
              Awaiting Feedback
            </option>
            <option selected={taskout.category === "Done"} value="Done">
              Done
            </option>
          </StyledSelect>
          <SaveTaskButton type="submit" onClick={handleSubmit}>
            Save
          </SaveTaskButton>
        </Card>
      ) : (
        <Card>
          <Title>{taskout.title}</Title>
          <Description>{taskout.description}</Description>
          <Priority>
            <strong>Priority:</strong> {taskout.prio}
          </Priority>
          <DueDate>
            <strong>Due Date:</strong> {taskout.dueDate}
          </DueDate>
          <Category>
            <strong>Category:</strong> {taskout.category}
          </Category>
          <EditButton type="submit" onClick={handleEdit}>
            Edit
          </EditButton>
        </Card>
      )}
    </>
  );
}

const Card = styled.div`
  border-radius: 1.25rem;
  width: 20rem;
  min-height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: white;
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
  width: 10rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: #2a3647;
  color: #fff;
  &:hover {
    background-color: #5cbf2a;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const EditButton = styled.button`
  margin-top: 2rem;
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 5rem;
  height: 2rem;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: #2a3647;
  color: #fff;

  &:hover {
    background-color: #5cbf2a;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
