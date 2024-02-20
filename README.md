# Qualentum React: Lab4, Lab3, Lab2, Lab1

## Flujo de la App
- Basándome en la estructura de la aplicación, he situado el estado en el componente App.jsx. Este estado almacena el valor que el usuario busca a través del componente Header y posteriormente se lo pasa al componente MainContent.

### Header
- En el componente Header.jsx he creado un useState que se utlizará para controlar el formulario con el input.
- Cuando se ejecuta onSubmit en el formulario el valor de este se pasará al componente padre App.jsx utilizando el seter del otro state que está en App y que hemos pasado a Header.jsx como props.

### App
- En el App.jsx cuando recibo el término de busqueda del usuario que he recibido de Header.jsx lo paso al componente MainContent.jsx.

### MainContent
- En MainContent he importado la data y utilizando el término de busca para filtrar los productos
- Cada tarjeta de producto es un componente ProductCard que muestra los detalles de un producto individual.

---------------------------------------------------------------------------------------------------------------------
# Lab2

## Contexto de usuario
- Según lo pedido en el problema de este Lab, intentado usar todos los hooks que hemos aprendido en este fastbook.
- He utilizado el useContext, este contexto tiene todos los datos del usuario centralizado y presentado como un objecto con las siguientes propiedades: nombre, email, si está logeado, modo de color, y el último es un array con el id de los productos metido en el carrito
- El estado inicial se define de la siguiente manera: primero acudimos a localStorage para averiguar si existe datos de usuario de una sesión anterior , en tal caso se carga los datos ya existentes.
- En el caso que se trate de la primera visita, creamos un nuevo usuario.
- Utlizando useEffect dentro del contexto tenemos un useEffect que acude a localStorage y guarda los datos del usuario después del primer renderiz y cada vez que se cambie el estado de ususario.
- En resumen este código define un proveedor de contexto que administra el estado del usuario y proporciona esa información a los componentes hijos, además de guardar y recuperar el estado del usuario en localStorage.
- 
## Contexto de ruta
- Lo uso para renderizar diferentes partes de la aplicación y en este caso son los componentes mainContent cuando hago click al logo y shoppingCart cuando hago click al carrito de compra.

## Modo de tema de color
- En el Header he importado el contexto de usuario y cuando se hace click al icono se actualiza el contexto de usuario con su nueva preferencia representada con un boleano, a base de este boleano aplico diferentes clases de css a los elementos donde se cambia el color y se intercambia el icono de modo de colores.

## Promotion
- Utilizo ambos contextos el de usuario y el de ruta para cambiar el contenido de la promoción.

## Botón de añadir el carrito
- Este botón también actualiza el contexto de usuario añadiendo el id del producto a un array que es el que representa los productos en el carrito de compra, y que utlizaremos para construirlo.

## ShoppingCart
- La lógica del shoppingCart la he desarrollado de la siguiente manera: Iterando sobre el array de productos en el contexto de usuario, he creado un objecto donde key es el id del producto y su valor es el número de veces que se añadió al array de productos.
- Luego utilizo este nuevo objecto para extraer sus llaves con Object.keys y mapeando busco en data el producto con el mismo id y retorno un nuevo objecto con todas las propiedades del producto más una nueva key llamada quantity que representa cuántas unidades de productos se quiere comprar.
- El resultado es un array con todos los detalles de los productos en el carrito sobre el cual mapeo y le muestro al usuario todos los detalles y precios. 

## Formulario para loguear 
- Este formulario también modifica el contexto de usuario con el value captado que serían el nombre, email y si es†á logueado o no.
- He aprovechado el state de los inputs del formulario para utlizar los dos hooks, useReducer y custom hooks
- He creado un custom hooks useForm dentro de el he utilizado useReducer con el estado inicial de un objecto con name y email.
- Tres funciones setName , setEmail, reset que despachan type y las primera dos también payload que en este caso sería el value de cada elemento input en el formulario.
- Al final se retorna las tres funciones y el estado form.
- Este customs hooks se importa en el formulario para loguear donde se consume sus funciones y estado para actualizar el contexto global del usuario y así quedará más limpio.

------------------------------------------------------------------------------------------------------------------------
# Lab 3

## Configuracion del Router con React-Router-Dom

## Main.jsx
- He utilizado UserProvider para proporcionar un contexto de usuario y RouterProvider para manejar el enrutamiento.

## createBrowserRouter()
- He definido las rutas de la aplicación, incluyendo la ruta raíz ("/"), "/product/:id", "/cart", y una ruta de comodín ("*") para ruta no definidas que en este caso renderizará un componente mostrando una página de error 404.

## Layout.jsx
- Este componente renderiza 4 componentes: Header, Promotion, Footer y Outlet para el resto de rutas anidadas

## Header.jsx
- He utilizado <Link></Link> para crear un enlace de navegación a la página de inicio y carrito de compras. 
- El formulario de búsqueda lo he modificado para que en lugar de usar state de React, utilice useSearchParams de react router dom.

## MainContent.jsx
- Este componente muestra una lista de productos. He utilizado el hook useSearchParams para obtener el valor del parámetro de búsqueda "search" de la URL. Este valor se utiliza para filtrar los productos que se muestran, basándose en el título del producto. 
- Los productos filtrados se mapean a componentes ProductCard y se renderizan.

## LoginForm.jsx
- He utilizado el hook useNavigate para redirigir al usuario a la página de inicio cuando cierra sesión, o a la última página visitada cuando inicia sesión.
- Y useLocation para obtener la última ruta visitada por el usuario antes de iniciar sesión. Cuando el usuario inicia sesión, se le redirige a esta ruta.

## Promotion.jsx
- He utilizado useLocation para obtener la ruta actual en la que se encuentra el usuario. La ruta se extrae de location.pathname y se divide para obtener la parte relevante de la ruta. A base de esta información y si el usuaeio es logueado o no imprime diferente mensajes.

## ProductDetails.jsx
- He utilizado useParams para obtener el id del producto de la ruta y que muestre los detalles del producto. Le he proporcionado un botón para agregar el producto al carrito de compras y otro para volver al listado.

## ShoppingCart.jsx
- He desarrollado una función handleCheckout() que se activa cuando el usuario decide finalizar la compra y vacíar el carrito de compras.

## ProtectedRouter.jsx
-  Es el componente que protege las rutas que requieren autenticación y utiliza useLocation para guardar la ubicación actual antes de redirigir al usuario.

---------------------------------------------------------------------------------------------------------------------
# Lab4

## Conexiones a API

## UserContext.jsx
- En el contexto de usuario he añadido una nueva propiedad "role". En el componente LoginForm a la hora de registarse el usuario verficamos si el email incluye (includes()) " @admin". En tal caso le asignamos role "@admin" y si no role "user".
- Esta propiedad role lo he utilizado para renderizar condicionalmete los tres botones: editar, eliminar y añadir un nuevo producto. Estos botones lo he ubicado en los Componentes ProducCard y el de nuevo producto en MainContent. 
- Toda la lógica de la funcionalidad de los botones la he desarrolado en el costum hook useProducts.

## Modal.jsx 
- He desarrollado sólo un modal que su funcionalidad la modifico con state modalType, todo los demás funcionalidad es†á desarrollada en useProducts.jsx 

## Custom hook useProducts.jsx
- En el primer he desarrollado toda la funcionalidad requerida utilizando datos locales
- Posteriormente he instalado JSON-Server y he configurado dos puntos de determinación products y users y he instalado la libreria Axios que la he utilizado para conectar las operaciones CRUD al servidor.
- He utilizado useEffect donde me conectado utilizando axios.get() a mi API y he utilizado los datos que me ha devuelto con la promesa en vez de los datos locales.
- Con el métodos axios.post actualizo API con el nuevo producto como mi estado local de producto. 
- Con el método axios.put editos los productos y los guardo.
- Todo esto dentro de una función async/await con try/catch para gestionar los errores.
- Los dos states isLoading y error lo he utilizado para gestionar los tiempos de cargas y errores.

## Loader.jsx
- Este componente lo he creado para utilizarlo condicionalmente mientras se cargan los datos desde la API.

## ShoppingCard.jsx
- He utilizado useEffect muy parecido al de el custom hook useProducts para descargar productos del API fintrando los que estaban en el carrito para presentarlo actualizado en la pantalla.





Un saludo.


















