import SummaryCard from "@/components/SummaryCard/SummaryCard";
import styled from "styled-components";

export default function HomePage({ tasks }) {
  return (
    <SummaryContainer>
      <h1>Summary</h1>
      <Section1>
        <SummaryCard text="Tasks in Backlog" size="normal" tasks={tasks} />
        <SummaryCard text="Tasks in Progress" size="normal" tasks={tasks} />
      </Section1>
      <Section2>
        <SummaryCard text="Upcomming Deadline" size="large" tasks={tasks} />
      </Section2>
      <Section3>
        <SummaryCard text="Awaiting Feedback" size="normal" tasks={tasks} />
        <SummaryCard text="Done" size="normal" tasks={tasks} />
      </Section3>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  margin-left: 1rem;
`;
const Section1 = styled.section`
  display: flex;
  gap: 1rem;
`;
const Section2 = styled.section`
  display: flex;
  gap: 1rem;
`;
const Section3 = styled.section`
  display: flex;
  gap: 1rem;
`;
