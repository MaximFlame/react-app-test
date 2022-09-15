import "./App.css";
import { UserTable } from "./components/UserTable";
import { Hobbies } from "./components/Hobbies";
import { SwimmingExpierience } from "./components/SwimmingExpierience";
import { Youtube } from "./components/Youtube";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <UserTable />
          <Hobbies />
          <SwimmingExpierience />
          <Youtube />
          <div className="contact">
            <ContactMe />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 500 }}></div>
    </div>
  );
}
export default App;
