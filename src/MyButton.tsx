import styled from "styled-components";
import BarLoader from "react-spinners/BarLoader";

interface StyledProps {
  $loading?: boolean;
}

interface ButtonProps {
  text: string;
  clickFn?: () => void;
  loading?: boolean;
}

const StyledButton = styled.button<StyledProps>`
  background-color: ${(props) => (props.$loading ? "#e2e2e2" : "#1771e7")};
  border: 1px solid ${(props) => (props.$loading ? "#d6d6d6" : "#1877f2")};
  border-radius: 8px;
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
    background-color: #1459b4;
    border: 1px solid #165ebd;
    color: #d3e1f3;
    font-size: 15px;
    font-weight: bold;
    transition: 0.2s;
  }
`;

export const MyButton: React.FC<ButtonProps> = ({
  text = "Click me",
  clickFn,
  loading = false,
}) => {
  return (
    // $ transient prop, not added to the rendered DOM element, only passed to the Styled Component
    // used here to prevent the reserved attribute 'loading' to be set on the DOM element <StyledButton>
    <StyledButton $loading={loading}>
      {!!loading && <BarLoader width={60} color="#1772e9" />}
      {!loading && <div onClick={clickFn}>{text}</div>}
    </StyledButton>
  );
};
