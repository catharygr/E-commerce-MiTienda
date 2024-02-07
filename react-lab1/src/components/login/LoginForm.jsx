import "./LoginForm.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contextos/userContext";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  // Función que maneja el evento de login
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      ...form,
      isLogged: true,
    });
    setForm({
      name: "",
      email: "",
    });
  };

  // Función que maneja el evento de logoff
  const handleLogoff = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      isLogged: false,
    });
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
        <button onClick={handleLogoff}>Logoff</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
