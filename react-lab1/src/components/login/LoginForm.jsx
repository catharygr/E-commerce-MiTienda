import "./LoginForm.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import useForm from "../../custom-hooks/useForm";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const { form, setName, setEmail, reset } = useForm();

  // Función que maneja el evento de submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.isLogged) {
      setUser({
        ...user,
        isLogged: false,
      });
    } else if (!user.isLogged) {
      if (!form.name || !form.email) {
        alert("Por favor, rellena todos los campos");
        return;
      }
      setUser({
        ...user,
        ...form,
        isLogged: true,
      });
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form"
    >
      {!user.isLogged && (
        <>
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
        </>
      )}
      {user.isLogged ? <button>Logoff</button> : <button>Login</button>}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
