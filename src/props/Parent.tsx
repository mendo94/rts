import { Example } from "./Child";

export const Parent = () => {
  return (
    <div>
      <Example color="red" onClick={() => console.log("clicked")}>
        heloooo
      </Example>
    </div>
  );
};
