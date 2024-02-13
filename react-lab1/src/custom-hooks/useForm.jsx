import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload.trim() };
    case "SET_EMAIL":
      return { ...state, email: action.payload.trim() };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
};

export default function useForm() {
  const [form, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  const setName = (name) => {
    dispatch({ type: "SET_NAME", payload: name });
  };
  const setEmail = (email) => {
    dispatch({ type: "SET_EMAIL", payload: email });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return { form, setName, setEmail, reset };
}
