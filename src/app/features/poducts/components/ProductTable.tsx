const ProductsTable = () => {
  const products = [
    {
      productResourceId: "a5f18da0-c009-4067-a791-fd293f6ede1b",
      name: "Papas",
    },
    {
      productResourceId: "2a5c779b-9883-481f-bf73-4e3c615f84c5",
      name: "Arroz",
    },
    {
      productResourceId: "e73c8a12-5d69-4b0f-9a47-1f22a8d90b61",
      name: "Frijoles",
    },
  ];

 return (
    <div>
      <h2>Lista de productos</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>Product Resource ID</th>
              <th>Nombre</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.productResourceId}>
                <td>{product.productResourceId}</td>
                <td>{product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;