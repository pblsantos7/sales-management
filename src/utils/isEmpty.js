function isEmpty(value){
    if(value.trim() === ""){
        return {valid: false, error: "EMPTY_FIELD"}
    }
    return {valid: true}
}

export default isEmpty