import "./LoginForm.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexto/userContext";

export default function LoginForm() {
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin");
  };

  return (
    <form className="login-form">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {user.isLogged ? (
        <button onClick={handleLogin}>Lagout</button>
      ) : (
        <button>Login</button>
      )}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
