import styled from "styled-components";

export default function TaskCard(data) {
  return (
    <Card>
      <Title>Title: {data.task.title}</Title>
      <Description>Description:{data.task.description} </Description>
      <Priority>Priority: {data.task.prio}</Priority>
      <DueDate>DueDate: {data.task.dueDate}</DueDate>
      <Category>Category: {data.task.category}</Category>
    </Card>
  );
}

const Card = styled.div`
  border: 0.03rem solid #d1d1d1;
  border-radius: 0.3rem;
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
