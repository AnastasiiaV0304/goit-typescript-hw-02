import toast from "react-hot-toast";

type ErrorObject = string | Error;

export const showError = (error: ErrorObject): void => {
  toast.error(error instanceof Error ? error.message : String(error), {
    position: "top-center",
    duration: 5000,
  });
};
