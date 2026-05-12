function isEmpty(value) {
    if (value === undefined || value === null) {
        return { success: false, error: "EMPTY_FIELD" }

    }
    if (value.trim() === "") {
        return { success: false, error: "EMPTY_FIELD" }
    }
    return { success: true }
}

export default isEmpty
