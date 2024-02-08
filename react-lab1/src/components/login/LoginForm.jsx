import "./LoginForm.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import useForm from "../../custom-hooks/useForm";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const { form, setName, setEmail, reset } = useForm();

  // Función que maneja el evento de login
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      ...form,
      isLogged: true,
    });
    reset();
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
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={(e) => setEmail(e.target.value)}
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
