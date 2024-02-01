export default function HeaderMenu() {
  const menuData = [
    { id: 1, title: "Inicio" },
    { id: 2, title: "Categorias" },
    { id: 3, title: "Ofertas" },
    { id: 4, title: "Contacto" },
  ];
  return (
    <nav>
      <ul>
        {menuData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
}
