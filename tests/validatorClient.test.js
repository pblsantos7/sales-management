import test from "node:test"
import assert from "node:assert"
import validateClient from "../src/validators/validatorClient.js"

test("returns success when client data is valid", () => {
    const result = validateClient("Joao", "12345678901")

    assert.equal(result.success, true)
})

test("returns an error when client name is empty", () => {
    const result = validateClient("", "12345678901")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when client name contains only spaces", () => {
    const result = validateClient("   ", "12345678901")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when client CPF is empty", () => {
    const result = validateClient("Joao", "")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when client CPF contains only spaces", () => {
    const result = validateClient("Joao", "   ")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when client CPF contains letters", () => {
    const result = validateClient("Joao", "1234567890a")

    assert.equal(result.success, false)
    assert.equal(result.error, "CPF_INVALID_FORMAT")
})

test("returns an error when client CPF has less than 11 digits", () => {
    const result = validateClient("Joao", "1234567890")

    assert.equal(result.success, false)
    assert.equal(result.error, "CPF_INVALID_FORMAT")
})

test("returns an error when client CPF has more than 11 digits", () => {
    const result = validateClient("Joao", "123456789012")

    assert.equal(result.success, false)
    assert.equal(result.error, "CPF_INVALID_FORMAT")
})
