import "./LoginForm.css";

export default function LoginForm() {
  return (
    <form className="login-form">
      <label htmlFor="name">
        Nombre
        <input type="text" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" />
      </label>
      <button type="submit">Login</button>
      <p>Regístrate</p>
    </form>
  );
}
