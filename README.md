# Qualentum React: Lab3, Lab2, Lab1

### He conectado mi repositorio con Netlify para que lo puedas ver el resultado del problema sin que tengas que bajar el repositorio.
https://qualentum-ecommerce-catary.netlify.app
 
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

Un saludo.
