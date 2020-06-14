import { toast } from "react-toastify";

export const SuccessMessage = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
}

export const WarningMessage = (message) => {
    toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
      });
}

export const ErrorMessage = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
}