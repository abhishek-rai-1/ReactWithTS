import { Button } from "./Button";

const App = () => {
  return (
    <div>
      <Button
        label="click me"
        disabled={false}
        onclick={() => console.log("button is clicked")}
      />
    </div>
  );
};

export default App;
