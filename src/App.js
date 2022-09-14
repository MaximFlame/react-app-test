import './App.css';
import {UserTable} from "./components/UserTable";
import {Social} from "./components/Social";
import {Hobbies} from "./components/Hobbies";
import {SwimmingExpierience} from "./components/SwimmingExpierience";
import {Youtube} from "./components/Youtube";
import {ContactMe} from "./components/ContactMe";

function App() {
    return (<div>
                            <div className="App">
                                <div className="container">
                                    <UserTable />
                                    <Social/>
                                    <Hobbies/>
                                    <SwimmingExpierience/>
                                    <Youtube/>
                                </div>
                                    <div className="box-model">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                            </div>
            </div>
    );
}
export default App;
