import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
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
  return { form, setName, setEmail };
}
