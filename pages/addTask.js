import styled, { css } from "styled-components";

export default function AddTaskForm({ handleAddTask }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddTask(data);
  }

  return (
    <Wraper>
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
          <option value="Tasks in Backlog">Backlog</option>
          <option value="Tasks in Progress">In Progress</option>
          <option value="Awaiting Feedback">Awaiting Feedback</option>
          <option value="Done">Done</option>
        </StyledSelect>

        <AddTaskButton type="submit">Add Task</AddTaskButton>
      </StyledForm>
    </Wraper>
  );
}
export const Wraper = styled.div`
  display: flex;
  align-items: center;
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
  border: 0.01rem solid #d1d1d1;
  border-radius: 0.3rem;
  min-width: 15rem;
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

export const AddTaskButton = styled.button`
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
