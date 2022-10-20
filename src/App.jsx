import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "use-local-storage";
import About from "./components/About/About";
import NotFound from "./components/General/NotFound";
import Navigation from "./components/General/Navigation";
import { useState } from "react";
import Welcome from "./components/General/Settings/Welcome";
import WorkExampleRouter from "./components/Routes/WorkExampleRouter";
import SideBar from "./components/UI/SideBar";
import Footer from "./components/General/Footer";

function App() {
  const [name, setName] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [check, setCheck] = useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "dark"
  );

  const switchTheme = (color) => {
    setTheme(color);
  };

  const themePackage = {
    name,
    onToggle: switchTheme,
    setName: setName,
    setCheck: setCheck,
  };

  return (
    <Router>
      <div data-theme={theme}>
        <header>
          <Navigation
            username={name}
            onToggle={switchTheme}
            setShowSidebar={setShowSidebar}
          />
        </header>

        <main>
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={<About name={name} age={30} town="St. John's" />}
            />
            <Route
              path="/examples/*"
              element={<WorkExampleRouter setShowSidebar={setShowSidebar} />}
            />
            <Route
              path="/settings"
              element={
                <Welcome
                  themePackage={themePackage}
                  name={name}
                  check={check}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showSidebar && <SideBar themePackage={themePackage} />}
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
