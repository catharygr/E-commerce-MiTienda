# qualentum-react-lab1
 
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

Un saludo.