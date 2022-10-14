import PropTypes from "prop-types";
import TaskButton from "./TaskButton";
import { useLocation } from "react-router-dom";

const TaskHeader = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="task-header">
      <h1>{title}</h1>
      {location.pathname === "/examples/tracker" && (
        <TaskButton
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Hide Menu" : "Add New Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

TaskHeader.defaultProps = { title: "Task Tracker" };

TaskHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
const headingStyle = { color: "red", backgroundColor: "black" };

export default TaskHeader;
