import clients from '../data/clients.js'
import generateID from '../utils/generateID.js'
import validateClient from '../validators/validatorClient.js'

export function createClient(name, cpf){
    const clientValidation = validateClient(name, cpf)
    if(!clientValidation.success){
        return clientValidation
    }
    const newId = generateID(clients)
    const client = {
        id: newId,
        name,
        cpf
    }
    clients.push(client)
    return {success: true, data: client}
}

export function updateClient(id, name, cpf){
    const clientIndex = clients.findIndex(client => client.id === id)
    if(clientIndex === -1){
        return {success: false, error: "CLIENT_NOT_FOUND"}
    }

    const originalClient = clients[clientIndex]
    const validation = validateClient(name, cpf)

    if(!validation.success){
        return validation
    }

    const updatedClient = {
        ...originalClient,
        name,
        cpf
    }
    clients[clientIndex] = updatedClient
    return {success: true, data: updatedClient}
}

export function findClientById(id){
    const client = clients.find(client => client.id === id)
    if(!client){
        return {success: false, error: "CLIENT_NOT_FOUND"}
    }
    return {success: true, data: client}
}

export function listClients(){
    return {success: true, data: [...clients]}
}

export function deleteClient(id){
    const clientIndex = clients.findIndex(client => client.id === id)
    if(clientIndex === -1){
        return {success: false, error: "CLIENT_NOT_FOUND"}
    }
    const deletedClient = clients.splice(clientIndex, 1)[0]
    return {success: true, data: deletedClient}
}
