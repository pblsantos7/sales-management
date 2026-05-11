import clients from '../data/clients.js'
import generateID from '../utils/generateID.js'
import validateClient from '../validators/validatorClient.js'

function createClient(name, cpf){
    const clientValidation = validateClient(name, cpf)
    if(!clientValidation.valid){
        return clientValidation
    }
    const newId = generateID(clients)
    const client = {
        id: newId,
        name,
        cpf
    }
    clients.push(client)
    return client
}

export default createClient