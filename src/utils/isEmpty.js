function isEmpty(value){
    if(value.trim() === ""){
        return {success: false, error: "EMPTY_FIELD"}
    }
    return {success: true}
}

export default isEmpty
