type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;

const shoes: ShippableProduct = {
  name: "shoes",
  price: 80,
  weight: 5,
  shippingCost: 20,
}
