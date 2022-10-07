import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import About from "./components/about-components/About";
import Users from "./components/user-components/Users";
import Form from "./components/form-components/Form";
import Game from "./card-game/Game";
import Navigation from "./components/Basic-Components/Navigation";
import TaskTracker from "./task-tracker/TaskTracker";
import { useState } from "react";
import Welcome from "./components/Basic-Components/Welcome";

function App() {
  const [username, setName] = useState("");
  const [check, setCheck] = useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "blue"
  );

  const switchTheme = (color) => {
    setTheme(color);
  };

  return (
    <Router>
      <div data-theme={theme}>
        <header>
          <Navigation username={username} onToggle={switchTheme} />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Welcome
                onToggle={switchTheme}
                setName={setName}
                setCheck={setCheck}
                name={username}
                check={check}
              />
            }
          />
          <Route
            path="/About"
            element={<About name={username} age={30} town="St. John's" />}
          />
          <Route path="/Users" element={<Users />} />
          <Route
            path="/Form"
            element={
              <Form
                setName={setName}
                onToggle={switchTheme}
                setCheck={setCheck}
              />
            }
          />
          <Route path="/Game" element={<Game />} />
          <Route path="/Tracker/*" element={<TaskTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
