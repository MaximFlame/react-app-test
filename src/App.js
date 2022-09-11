import './App.css';
import {UserTable} from "./components/UserTable";
import {Social} from "./components/Social";
import {Hobbies} from "./components/Hobbies";
import {SwimmingExpierience} from "./components/SwimmingExpierience";
import {Youtube} from "./components/Youtube";
import {ContactMe} from "./components/ContactMe";

function App() {
  return (
    <div className="App">
        <UserTable />
        <Social/>
        <Hobbies/>
        <SwimmingExpierience/>
        <Youtube/>
        <ContactMe/>
    </div>
  );
}

export default App;
