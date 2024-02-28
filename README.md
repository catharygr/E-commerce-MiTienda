# Qualentum React: Lab5

## Redux- Redux-Toolkit
- Según lo pedido en el problema he modificado el contexto de los productos del app que tiene comunicación HTTP.
-  Lo he pasado totalmente a Redux, sin perder su funcionalidad ni en cuanto a gestiones de errores, ni en cuanto a componentes visuales mostrados en tiempo de espera.
- He creacdo los cuatros Thunks para manipular los productos con el método createAsyncThunk().
- He creado Slice de los productos con los caso correnspondientes a los thunks, para manipilar los tres estados, fullfiled, pending, rejected.
- Para la solicitudes a API he creado cuatro acciones/middleware que solamente manipulan peticiones CRUD.
- Esta funciones se llaman desde sus thunks correspondientes.

Un saludo.



















