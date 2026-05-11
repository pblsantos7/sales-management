import products from "../data/products.js";
import generateID from "../utils/generateID.js"
import validateProduct from "../validators/validatorProduct.js";

function createProduct(name, price, quantity) {
    const productValidation = validateProduct(name, price, quantity)
    if (!productValidation.valid) {
        return productValidation
    }
    const newId = generateID(products);
    const product = {
        id: newId,
        name,
        price: Number(price),
        quantity: Number(quantity)
    };
    products.push(product);
    return product;
}

export default createProduct

