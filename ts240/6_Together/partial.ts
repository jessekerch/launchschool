interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
  let idx = products.findIndex(prod => prod.id === productId);
  if (idx !== -1) {
    products[idx] = { ...products[idx], ...updatedValues };
  } else {localStorage
    console.log('Product not found');
  }
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});

console.log(products);

