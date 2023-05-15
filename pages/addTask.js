import styled, { css } from "styled-components";

export default function AddTaskForm({ handleAddTask }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddTask(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Add Task</h1>

      <StyledLabel htmlFor="title">Title:</StyledLabel>
      <StyledInput
        id="title"
        type="text"
        name="title"
        minlength="3"
        maxlength="30"
        placeholder="Enter a title"
        required
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
      ></TextareaForDescription>

      <StyledLabel htmlFor="prio">Priority:</StyledLabel>
      <StyledSelect id="prio" name="prio" required>
        <option value="Urgent">Urgent</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </StyledSelect>

      <StyledLabel htmlFor="dueDate">Due Date:</StyledLabel>
      <StyledInput type="date" id="dueDate" name="dueDate" required />

      <StyledLabel htmlFor="category">Category:</StyledLabel>
      <StyledSelect id="category" name="category" required>
        <option value="Backlog">Backlog</option>
        <option value="In Progress">In Progress</option>
        <option value="Awaiting Feedback">Awaiting Feedback</option>
        <option value="Done">Done</option>
      </StyledSelect>

      <AddTaskButton type="submit">Add Task</AddTaskButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const baseInputStyles = css`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  ${baseInputStyles}
`;

const TextareaForDescription = styled.textarea`
  ${baseInputStyles}
`;

const StyledSelect = styled.select`
  ${baseInputStyles}
`;

const AddTaskButton = styled.button`
  margin-top: 2rem;
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
`;
