import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "use-local-storage";
import About from "./components/About/About";
import Form from "./components/Welcome/Form";
import NotFound from "./components/General/NotFound";
import Navigation from "./components/General/Navigation";
import { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import WorkExampleRouter from "./components/Routes/WorkExampleRouter";

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

        <main>
          <ToastContainer />
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
              path="/about"
              element={<About name={username} age={30} town="St. John's" />}
            />
            <Route path="/examples/*" element={<WorkExampleRouter />} />
            <Route
              path="/settings"
              element={
                <Form
                  setName={setName}
                  onToggle={switchTheme}
                  setCheck={setCheck}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
