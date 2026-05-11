import clients from '../data/clients.js'
import generateID from '../utils/generateID.js'
import validateClient from '../validators/validatorClient.js'

export function createClient(name, cpf){
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

export function updateClient(id, name, cpf){
    const clientIndex = clients.findIndex(client => client.id === id)
    if(clientIndex === -1){
        return {success: false, error: "CLIENT_NOT_FOUND"}
    }

    const originalClient = clients[clientIndex]
    const validation = validateClient(name, cpf)

    if(!validation.valid){
        return validation
    }

    const updatedClient = {
        ...originalClient,
        name,
        cpf
    }
    clients[clientIndex] = updatedClient
    return updatedClient
}