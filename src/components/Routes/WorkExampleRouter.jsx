import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../../workExamples/User/Users";
import TaskTracker from "../../workExamples/task-tracker/TaskTracker";
import Game from "../../workExamples/card-game/Game";

const WorkExampleRouter = () => {
  return (
    <Routes>
      <Route path="/game" element={<Game />} />
      {/* <Route path="/tracker/*" element={<TaskTracker />} /> */}
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default WorkExampleRouter;
