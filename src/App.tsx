import { Button } from "./components/Button";
import { User } from "./components/User";

const App = () => {
  return (
    <div>
      <User name="Abhi" age={22} isStudent={false}>
        hello
      </User>
      <Button label = "click me" disabled = {false} onclick = {() => console.log('button is clicked')}/>
    </div>
  );
};

export default App;
