import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputWrapper: React.FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
