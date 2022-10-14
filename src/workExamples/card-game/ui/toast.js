import { toast, Flip, Bounce, Slide } from "react-toastify";

const toastProps = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
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

export { successToast, errorToast, infoToast };
