import { User } from "./components/User";

const App = () => {
  return (
    <div>
      <User name="Abhi" age={22} isStudent={false}>
        hello
      </User>
    </div>
  );
};

export default App;
