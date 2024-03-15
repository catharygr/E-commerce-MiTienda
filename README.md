# Qualentum E-commerce Mi Tienda 

https://qualentum-ecommerce-catary.netlify.app

## Proyecto de una tienda ficticia - Orientado por el profesor y desarrollado por mi.
### lab 1 -  Se ha solicitado, crear la extructura básica de un ecommerce estático, salvo la barra de búsqueda dónde aparecian sólo quellos elementos cuyo nombre contenga el texto que introduzca el usuario.
- Para esto he ceado en Header.jsx un useState para controlar el formulario con el input.
- En el App.jsx cuando recibo el término de busqueda del usuario que he recibido de Header.jsx lo paso al componente MainContent.jsx.
### Lab 2 -  Añadir nuevas funcionalidades con Hooks
- He utilizado el useContext, este contexto tiene todos los datos del usuario centralizado y presentado como un objecto con las siguientes propiedades: nombre, email, si está logeado, modo de color, y el último es un array con el id de los productos metido en el carrito.
- En el componente Promotion.jsx utilizo ambos contextos el de usuario y el de ruta para cambiar el contenido de la promoción.
- En el ShoppingCart.jsx utilizo el contexto para extraer sus llaves y con map() busco en data el producto con el mismo id.
- En el formulario para loguear he aprovechado el state de los inputs del formulario para utlizar los dos hooks, useReducer y custom hooks.
- Este customs hooks se importa en el formulario para loguear donde se consume sus funciones y estado para actualizar el contexto global del usuario y así quedará más limpio.
### Lab 3 -  Configuracion del Router con React-Router-Dom
- En Main.jsx he utilizado UserProvider para proporcionar un contexto de usuario y RouterProvider para manejar el enrutamiento.
- Con la función createBrowserRouter() he definido las rutas
- En Layout.jsx se renderiza 4 componentes: Header, Promotion, Footer y Outlet para el resto de rutas anidadas.
- En Header.jsx el formulario de búsqueda lo he modificado para que en lugar de usar state de React, utilice useSearchParams de react router dom.
- En mainContent.jsx he utilizado el hook useSearchParams para obtener el valor del parámetro de búsqueda "search" de la URL.
- En LoginForm.jsx he utilizado el hook useNavigate para redirigir al usuario y useLocation para obtener la última ruta visitada por el usuario.
- En Promotion.jsx he utilizado useLocation para obtener la ruta actual en la que se encuentra el usuario.
- En ProductDetails.jsx he  utilizado useParams para obtener el id del producto de la ruta y que muestre los detalles del producto. Le he proporcionado un botón para agregar el producto al carrito de compras y otro para volver al listado.
- En ShoppingCart.jsx he desarrollado una función handleCheckout() que se activa cuando el usuario decide finalizar la compra y vacíar el carrito de compras.
- ProtectedRouter.jsx es el componente que protege las rutas que requieren autenticación y utiliza useLocation para guardar la ubicación actual antes de redirigir al usuario.
### Lab 4 - Conexiones a API
- He utilizado la libreria Axios que la he utilizado para conectar las operaciones CRUD al servidor.
- Utilizando UseContext.jsx he añadido una nueva propiedad "role". En el componente LoginForm a la hora de registarse el usuario verficamos si el email incluye (includes()) " @admin". En tal caso le asignamos role "@admin" y si no role "user".
- En Modal.jsx He desarrollado sólo un modal que su funcionalidad la modifico con state modalType. Toda los demás funcionalidad está desarrollada en useProducts.jsx
- En el custom hook he instalado JSON-Server y he configurado dos puntos de determinación products y users y he utilizado Axios para crear un CRUD y JSON Server como servidor de desarrollo. Luego he  pasado los datos a Firebase y he compilado la app en Netlify
- Loader.jsx lo he creado para utilizarlo condicionalmente mientras se cargan los datos desde la API.
- En ShoppingCard.jsx y ProductDetails.jsxhHe utilizado useEffect muy parecido al de el custom hook useProducts para descargar productos del API filtrando los que estaban en el carrito para presentarlo actualizado en la pantalla.
### Lab 5 -  Redux- Redux Toolkit
- Según lo pedido en el problema he modificado el contexto de los productos del app que tiene comunicación HTTP.
- Lo he pasado totalmente a Redux, sin perder su funcionalidad ni en cuanto a gestiones de errores, ni en cuanto a componentes visuales mostrados en tiempo de espera.
- He creacdo los cuatros Thunks para manipular los productos con el método createAsyncThunk().
- He creado Slice de los productos con los caso correnspondientes a los thunks, para manipilar los tres estados, fullfiled, pending, rejected.
- Para la solicitudes a API he creado cuatro acciones/middleware que solamente manipulan peticiones CRUD.
- Esta funciones se llaman desde sus thunks correspondientes.
### Lab 6 -  Hook useForm
- He cambiado la gestión de los formularios a React Hook Form
- He aplicado la validación de sus campos sobre posibles errores que puedan surgir cuando el usuario introduzca sus datos.
- He añadido el campo de la contraseña y uno nuevo para repetir la contraseña.
- Para eso he incluido dos inputs en el formulario del componente LoginForm.jsx con sus validaciones para ambos campos
- Utilizando useForm he controlado los formularios y he compartido las indicaciones a los usuarios de forma instantánea
- He desarrollado los criterios mínimos de validación: • Campos requeridos. • Password y repetir password coincidentes. • Formato en e-mail y en la URL de la imagen para un producto. • Textos (nombre, descripción del objeto y categoría del objeto) con longitudes máximas y mínimas. • Precio de los productos mayor que cero.












































