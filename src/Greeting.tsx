import styled from "styled-components";

interface GreetingProps {
  // name as optional so default prop can be set
  name?: string;
}

const StyledHeader = styled.h3`
  color: dodgerblue;
`;

export const Greeting: React.FC<GreetingProps> = ({ name = "World" }) => {
  return <StyledHeader>Hello {name}</StyledHeader>;
};
