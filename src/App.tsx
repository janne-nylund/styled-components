import { useEffect, useState } from "react";
import { ButtonWrapper } from "./ButtonWrapper";
import { MyButton } from "./MyButton";
import { fiboNums } from "./helperFns/fiboNums";
import { Greeting } from "./Greeting";
import { InputWrapper } from "./InputWrapper";
import { MyInput } from "./StyledInput";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="content">
      <Greeting />
      <Greeting name="John" />
      <h1>Pick a number</h1>
      <ButtonWrapper>
        {fiboNums(5).map((num) => (
          <MyButton
            key={num + Math.random()}
            text={num.toString()}
            clickFn={() => alert(`You chose: ${num}`)}
            loading={isLoading}
          />
        ))}
      </ButtonWrapper>
      <InputWrapper>
        <MyInput type="text" label="Enter first name" placeholder="Name" />
      </InputWrapper>
      <InputWrapper>
        <MyInput type="email" label="Enter email address" placeholder="Email" />
      </InputWrapper>
    </div>
  );
};

export default App;
