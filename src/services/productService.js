import products from "../data/products.js";
import generateID from "../utils/generateID.js"
import validateProduct from "../validators/validatorProduct.js";

export function createProduct(name, price, quantity) {
    const productValidation = validateProduct(name, price, quantity)
    if (!productValidation.valid) {
        return productValidation
    }
    const newId = generateID(products)
    const product = {
        id: newId,
        name,
        price: Number(price),
        quantity: Number(quantity)
    };
    products.push(product);
    return product;
}

export function updateProduct(id, name, price, quantity){
    const productIndex = products.findIndex(product => product.id === id)
    if(productIndex === -1){
        return {success: false, error: "PRODUCT_NOT_FOUND"}
    }

    const originalProduct = products[productIndex]
    const validation = validateProduct(name, price, quantity)

    if(!validation.valid){
        return validation
    }

    const updatedProduct = {
        ...originalProduct,
        name,
        price: Number(price),
        quantity: Number(quantity) 
    }
    products[productIndex] = updatedProduct
    return updatedProduct
}


