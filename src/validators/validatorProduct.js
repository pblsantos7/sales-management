import isEmpty from "../utils/isEmpty.js";

function validateName(name) {
    const validateEmptyName = isEmpty(name)
    if (!validateEmptyName.valid) {
        return validateEmptyName
    }
    return { valid: true };
}

function validatePrice(price) {
    const validateEmptyPrice = isEmpty(price)
    if (!validateEmptyPrice.valid) {
        return validateEmptyPrice
    }
    const convertedPrice = Number(price)
    if (isNaN(convertedPrice)) {
        return { valid: false, error: "PRICE_NOT_NUMBER" }
    }
    if (convertedPrice <= 0) {
        return { valid: false, error: "NEGATIVE_OR_ZERO_PRICE" };
    }
    return { valid: true }
}

function validateQuantity(quantity) {
    const validateEmptyQuantity = isEmpty(quantity)
    if (!validateEmptyQuantity.valid) {
        return validateEmptyQuantity
    }
    const convertedQuantity = Number(quantity)
    if (isNaN(convertedQuantity)) {
        return { valid: false, error: "QUANTITY_IS_NOT_NUMBER" };
    }
    if (convertedQuantity < 0) {
        return { valid: false, error: "QUANTITY_NEGATIVE" };

    }
    return { valid: true }
}

function validateProduct(name, price, quantity) {
    const functionValidateName = validateName(name)
    const functionValidatePrice = validatePrice(price)
    const funtionValidateQuantity = validateQuantity(quantity)

    if (!functionValidateName.valid) {
        return functionValidateName
    }
    if (!functionValidatePrice.valid) {
        return functionValidatePrice
    }
    if (!funtionValidateQuantity.valid) {
        return funtionValidateQuantity
    }
    return { valid: true }
}

export default validateProduct