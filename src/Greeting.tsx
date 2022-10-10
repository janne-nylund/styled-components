interface GreetingProps {
  // name as optional so default prop can be set
  name?: string;
}

export const Greeting: React.FC<GreetingProps> = ({ name = "World" }) => {
  return <h3>Hello {name}</h3>;
};
