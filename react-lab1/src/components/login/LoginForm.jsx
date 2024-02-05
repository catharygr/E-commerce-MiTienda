import "./LoginForm.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexto/userContext";

export default function LoginForm() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // console.log("El usuario cambió");
  }, [user]);

  console.log(user.isLogged);
  return (
    <form className="login-form">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
      />
      {user.isLogged ? <button>Lagout</button> : <button>Login</button>}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
