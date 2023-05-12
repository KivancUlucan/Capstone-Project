import styled from "styled-components";

export default function TaskCard() {
  return (
    <Card>
      <Title>Title:</Title>
      <Description>Description:</Description>
      <Priority>Priority:</Priority>
      <DueDate>DueDate:</DueDate>
      <Category>Category:</Category>
    </Card>
  );
}

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1rem;
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
