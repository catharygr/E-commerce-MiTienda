# Qualentum E-commerce Mi tienda

## Firebase
- He utilizado Axios para crear un CRUD y JSON Server como servidor de desarrollo. Luego he  pasado los datos a Firebase y he compilado la app en Netlify.",

### Este código se usó para traladar la data de un archivo JSON a Firestore

import * as oldData from "../../data/db-backup.json";
import { db } from "../../api/firebase";
import { doc, setDoc } from "firebase/firestore";

Iterate over the products array
oldData.products.forEach(async (product) => {
const string = product.id.toString();
await setDoc(doc(db, "products", string), product);
});

















