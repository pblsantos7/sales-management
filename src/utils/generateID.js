function generateID(entities){
    let id = 0
    for(let i = 0; i < entities.length; i++){
        if(entities[i].id > id){
            id = entities[i].id
        }
    }
    return id + 1
}

export default generateID