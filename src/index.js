import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your shopee cart!");

const item1 = await createItem("Roupa do Homem-Aranha", 90.92, 2);
const item2 = await createItem("Batman minatura", 19.99, 5);
const item3 = await createItem("Saco de pancada", 150.99, 1);

await cartService.addItem(myWishList, item3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart, 1);
await cartService.displayCart(myWishList, 2);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);