import isEmpty from "../utils/isEmpty.js";

function validateName(name) {
    const validateEmptyName = isEmpty(name)
    if (!validateEmptyName.success) {
        return validateEmptyName
    }
    return { success: true };
}

function validatePrice(price) {
    const validateEmptyPrice = isEmpty(price)
    if (!validateEmptyPrice.success) {
        return validateEmptyPrice
    }
    const convertedPrice = Number(price)
    if (isNaN(convertedPrice)) {
        return { success: false, error: "PRICE_NOT_NUMBER" }
    }
    if (convertedPrice <= 0) {
        return { success: false, error: "NEGATIVE_OR_ZERO_PRICE" }
    }
    return { success: true }
}

function validateQuantity(quantity) {
    const validateEmptyQuantity = isEmpty(quantity)
    if (!validateEmptyQuantity.success) {
        return validateEmptyQuantity
    }
    const convertedQuantity = Number(quantity)
    if (isNaN(convertedQuantity)) {
        return { success: false, error: "QUANTITY_IS_NOT_NUMBER" }
    }
    if (convertedQuantity < 0) {
        return { success: false, error: "QUANTITY_NEGATIVE" }

    }
    if (!Number.isInteger(convertedQuantity)) {
        return { success: false, error: "QUANTITY_IS_NOT_WHOLE" }
    }

    return { success: true }
}

function validateProduct(name, price, quantity) {
    const functionValidateName = validateName(name)
    const functionValidatePrice = validatePrice(price)
    const funtionValidateQuantity = validateQuantity(quantity)

    if (!functionValidateName.success) {
        return functionValidateName
    }
    if (!functionValidatePrice.success) {
        return functionValidatePrice
    }
    if (!funtionValidateQuantity.success) {
        return funtionValidateQuantity
    }
    return { success: true }
}

export default validateProduct
