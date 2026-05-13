import test from "node:test"
import assert from "node:assert"
import validateProduct from "../src/validators/validatorProduct.js"

test("returns success when product data is valid", () => {
    const result = validateProduct("bota", 12, 12)

    assert.equal(result.success, true)
})

test("returns success when price and quantity are numeric strings", () => {
    const result = validateProduct("bota", "12.50", "12")

    assert.equal(result.success, true)
})

test("returns success when product quantity is zero", () => {
    const result = validateProduct("bota", 12, 0)

    assert.equal(result.success, true)
})

test("returns an error when product name is empty", () => {
    const result = validateProduct("", 2.50, 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product name contains only spaces", () => {
    const result = validateProduct("   ", 2.50, 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product price is empty", () => {
    const result = validateProduct("bota", "", 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product price contains only spaces", () => {
    const result = validateProduct("bota", "   ", 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product price is not a number", () => {
    const result = validateProduct("bota", "abc", 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "PRICE_NOT_NUMBER")
})

test("returns an error when product price is zero", () => {
    const result = validateProduct("bota", 0, 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "NEGATIVE_OR_ZERO_PRICE")
})

test("returns an error when product price is negative", () => {
    const result = validateProduct("bota", -1, 10)

    assert.equal(result.success, false)
    assert.equal(result.error, "NEGATIVE_OR_ZERO_PRICE")
})

test("returns success when product price is decimal", () => {
    const result = validateProduct("bota", 12.50, 10)

    assert.equal(result.success, true)
})

test("returns an error when product quantity is empty", () => {
    const result = validateProduct("bota", 12, "")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product quantity contains only spaces", () => {
    const result = validateProduct("bota", 12, "   ")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when product quantity is not a number", () => {
    const result = validateProduct("bota", 12, "abc")

    assert.equal(result.success, false)
    assert.equal(result.error, "QUANTITY_IS_NOT_NUMBER")
})

test("returns an error when product quantity is negative", () => {
    const result = validateProduct("bota", 12, -1)

    assert.equal(result.success, false)
    assert.equal(result.error, "QUANTITY_NEGATIVE")
})

test("returns an error when product quantity is decimal", () => {
    const result = validateProduct("bota", 12, 1.5)

    assert.equal(result.success, false)
    assert.equal(result.error, "QUANTITY_IS_NOT_WHOLE")
})

test("returns success when product quantity is a positive integer", () => {
    const result = validateProduct("bota", 12, 10)

    assert.equal(result.success, true)
})

test("returns success when product quantity is an integer string", () => {
    const result = validateProduct("bota", 12, "10")

    assert.equal(result.success, true)
})

