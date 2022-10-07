import { useEffect, useState } from "react";
import { ButtonWrapper } from "./ButtonWrapper";
import { MyButton } from "./MyButton";
import { fiboNums } from "./helperFns/fiboNums";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="content">
      <h1>Pick a number</h1>
      <ButtonWrapper>
        {fiboNums(10).map((num) => (
          <MyButton
            key={num + Math.random()}
            text={num.toString()}
            clickFn={() => alert(`You chose: ${num}`)}
            loading={isLoading}
          />
        ))}
      </ButtonWrapper>
    </div>
  );
}

export default App;
