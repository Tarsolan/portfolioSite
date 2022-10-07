import PropTypes from "prop-types";

const TaskButton = ({ color, text, onClick }) => {
  return (
    <button
      className="task-btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

TaskButton.defaultProps = {
  color: "steelblue",
  text: "Add",
};

TaskButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default TaskButton;
