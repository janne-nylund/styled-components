import styled from "styled-components";

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
}

const StyledLabel = styled.label`
  color: rgb(14, 182, 90);
  font-size: 0.8rem;
  font-weight: bold;
  font-variant: small-caps;
  margin-left: 1.5rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.1s;
  transform: translate(-0.5rem, -5.2rem);
`;

const StyledInput = styled.input`
  color: #333;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 50px;
  display: block;
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: hsl(0, 0%, 75%);
    transition: all 0.2s;
  }

  &:focus {
    outline: 1px solid rgba(0, 153, 70, 0.3);
    outline-offset: 2px;
    box-shadow: 0 1px 16px rgba(0, 153, 70, 0.1);
  }

  &:placeholder-shown + ${StyledLabel} {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;

export const MyInput: React.FC<InputProps> = ({ type, label, placeholder }) => {
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        spellCheck="false"
      />
      <StyledLabel>{label.toLowerCase()}</StyledLabel>
    </>
  );
};
