import styled from "styled-components";

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
        placeholder="Enter a title"
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
        placeholder="Enter a description"
        required
      ></TextareaForDescription>

      <LabelForPriority htmlFor="prio">Priority:</LabelForPriority>
      <SelectForPriority id="prio" name="prio" required>
        <option value="Urgent">Urgent</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </SelectForPriority>

      <LabelForDueDate htmlFor="dueDate">Due Date:</LabelForDueDate>
      <InputForDueDate type="date" id="dueDate" name="dueDate" required />

      <LabelForCategory htmlFor="category">Category:</LabelForCategory>
      <SelectForCategory id="category" name="category" required>
        <option value="Backlog">Backlog</option>
        <option value="In Progress">In Progress</option>
        <option value="Awaiting Feedback">Awaiting Feedback</option>
        <option value="Done">Done</option>
      </SelectForCategory>

      <AddTaskButton type="submit">Add Task</AddTaskButton>
    </AddTask_Form>
  );
}

const AddTask_Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
const LabelForTitle = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const InputForTitle = styled.input`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
const LabelForDescription = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const TextareaForDescription = styled.textarea`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
const LabelForPriority = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const LabelForDueDate = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const InputForDueDate = styled.input`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
const LabelForCategory = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const SelectForPriority = styled.select`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
const SelectForCategory = styled.select`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
  width: 20rem;
  height: 2.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
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
