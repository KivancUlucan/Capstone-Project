import styled from "styled-components";
import { useState, useEffect } from "react";

export default function SummaryCard({ text, size, tasks }) {
  const [categoryCounts, setCategoryCounts] = useState(0);

  useEffect(() => {
    const counts = tasks.filter((task) => text === task.category).length;

    setCategoryCounts(counts);
  }, [tasks]);

  return (
    <>
      <Card key={text} size={size} tasks={tasks}>
        <SummaryNumber>{categoryCounts}</SummaryNumber>
        <SummaryText>{text}</SummaryText>
      </Card>
    </>
  );
}

const Card = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.03rem solid #d1d1d1;
  border-radius: 1.25rem;
  box-shadow: 0rem 0rem 0.25rem rgba(0, 0, 0, 0.1);
  width: ${(props) => {
    if (props.size === "large") return "21rem";
    return "10rem";
  }};
  height: 6.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SummaryNumber = styled.span`
  font-size: 2rem;
`;
const SummaryText = styled.span`
  padding-top: 1rem;
`;
