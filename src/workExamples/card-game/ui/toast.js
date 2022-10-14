import { toast, Flip, Bounce, Slide } from "react-toastify";

const toastProps = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Slide,
};

const highScoreProps = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Flip,
};

const successToast = (message) => {
  toast.success(message, toastProps);
};

const errorToast = (message) => {
  toast.error(message, toastProps);
};

const infoToast = (message) => {
  toast.info(message, toastProps);
};

const highScoreToast = (message) => {
  toast.success(message, highScoreProps);
};

export { successToast, errorToast, infoToast, highScoreToast };
