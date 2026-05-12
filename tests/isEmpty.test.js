import test from "node:test"
import assert from "node:assert"
import isEmpty from "../src/utils/isEmpty.js"

test("returns an error when value is an empty string", () => {
    const result = isEmpty("")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when value is null", () => {
    const result = isEmpty(null)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when value is undefined", () => {
    const result = isEmpty(undefined)

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns an error when value contains only spaces", () => {
    const result = isEmpty(" ")

    assert.equal(result.success, false)
    assert.equal(result.error, "EMPTY_FIELD")
})

test("returns success when value has text", () => {
    const result = isEmpty("joao")

    assert.equal(result.success, true)
})

test("returns success when value is zero", () => {
    const result = isEmpty(0)
    
    assert.equal(result.success, true)
})
