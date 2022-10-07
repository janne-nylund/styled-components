import { useEffect, useState } from "react";
import { ButtonWrapper } from "./ButtonWrapper";
import { MyButton } from "./MyButton";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const fiboNums = (howMany: number) => {
    const sequence = [];
    for (let i = 0, a = 0, b = 1; i < howMany; i++) {
      if (i % 2 === 0) {
        sequence.push(a);
        a += b;
      } else {
        sequence.push(b);
        b += a;
      }
    }
    return sequence;
  };

  return (
    <div className="content">
      <ButtonWrapper>
        {fiboNums(10).map((num) => (
          <MyButton
            key={Math.random()}
            text={num}
            clickFn={() => alert(`You chose: ${num}`)}
            loading={isLoading}
          />
        ))}
      </ButtonWrapper>
    </div>
  );
}

export default App;
