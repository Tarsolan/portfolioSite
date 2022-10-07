import { Link } from "react-router-dom";

const TaskFooter = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to="/aboutTask">Back to About Page</Link>
    </footer>
  );
};

export default TaskFooter;
