import SummaryCard from "@/components/SummaryCard/summaryCard";
import styled from "styled-components";

export default function HomePage() {
  return (
    <SummaryContainer>
      <h1>Summary</h1>
      <Section1>
        <SummaryCard text="Tasks in Backlog" size="normal" />
        <SummaryCard text="Tasks in Progress" size="normal" />
      </Section1>
      <Section2>
        <SummaryCard text="Upcomming Deadline" size="large" />
      </Section2>
      <Section3>
        <SummaryCard text="Awaiting Feedback" size="normal" />
        <SummaryCard text="Done" size="normal" />
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
