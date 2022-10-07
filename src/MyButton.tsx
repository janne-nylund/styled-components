import styled from "styled-components";

interface StyleProps {
  text: string;
  clickFn?: () => void;
  loading?: boolean;
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.loading ? "#e2e2e2" : "#1877f2")};
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  width: 6rem;
  height: 36px;
  line-height: 20px;
  padding: 0 16px 0 16px;
  transition: 0.3s;
  cursor: pointer;
  margin: 10px;

  // when hovered
  &:hover {
    background-color: #1768d1;
    color: #aac7ee;
    font-size: 15px;
    transition: 0.3s;
  }
`;

export const MyButton = ({ text, clickFn, loading }: StyleProps) => {
  return (
    <StyledButton onClick={clickFn ? clickFn : null} loading={loading}>
      {loading ? "Loading..." : text}
    </StyledButton>
  );
};
