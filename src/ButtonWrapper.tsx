import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledWrapper = styled.div`
  margin: 20px auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 8rem;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 4px rgba(0, 0, 0, 0.04), 0 1px 8px rgba(0, 0, 0, 0.04),
    0 1px 16px rgba(0, 0, 0, 0.04);
`;

export const ButtonWrapper: React.FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
