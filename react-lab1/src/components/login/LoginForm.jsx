import "./LoginForm.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();

  // if (user.isLogged) {
  //   setUser({
  //     ...user,
  //     isLogged: false,
  //     role: "user",
  //   });
  //   navigate("/");
  // } else if (!user.isLogged) {
  //   if (!form.name || !form.email) {
  //     alert("Por favor, rellena todos los campos");
  //     return;
  // }

  //   const userEmail = form.email.trim();
  //   const role = userEmail.includes("@admin") ? "admin" : "user";

  //   setUser({
  //     ...user,
  //     ...form,
  //     isLogged: true,
  //     role,
  //   });
  //   reset();
  //   navigate(location.state?.pathname);
  // }
  // };

  const onSubmit = handleSubmit((form) => {
    if (user.isLogged) {
      setUser({
        ...user,
        isLogged: false,
        role: "user",
      });
      navigate("/");
    } else if (!user.isLogged) {
      if (!form.name || !form.email) {
        alert("Por favor, rellena todos los campos");
        return;
      }

      const userEmail = form.email.trim();
      const role = userEmail.includes("@admin") ? "admin" : "user";

      setUser({
        ...user,
        ...form,
        isLogged: true,
        role,
      });
      navigate(location.state?.pathname);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="login-form"
    >
      {!user.isLogged && (
        <>
          <label htmlFor="name">Nombre</label>
          {errors.name && (
            <p className="login-form-error-msg">{errors.name.message}</p>
          )}
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Por favor, ingrese su nombre",
              onBlur: () => trigger("name"),
            })}
          />
          <label htmlFor="email">Email</label>
          {errors.email && (
            <p className="login-form-error-msg">{errors.email.message}</p>
          )}
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Por favor, ingrese su email",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "El mail no es válido",
              },
              onBlur: () => trigger("email"),
            })}
          />
          <label htmlFor="password">Contraseña</label>
          {errors.password && (
            <p className="login-form-error-msg">{errors.password.message}</p>
          )}
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Por favor, ingrese su contraseña",
              onBlur: () => trigger("password"),
              minLength: { value: 8, message: "Minimo 8 caracteres" },
            })}
          />
          <label htmlFor="confirmPassword">Repite la contraseña</label>
          {errors.confirmPassword && (
            <p className="login-form-error-msg">
              {errors.confirmPassword.message}
            </p>
          )}
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Por favor, repita la contraseña",
              onBlur: () => trigger("confirmPassword"),
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
          />
        </>
      )}
      {user.isLogged ? <button>Logoff</button> : <button>Login</button>}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
