import isEmpty from "../utils/isEmpty.js";

function validateName(name){
    const validateNameEmpty = isEmpty(name)
    if(!validateNameEmpty.success){
        return validateNameEmpty
    }
    return {success: true}
}

function validateCPF(cpf){
    const validateCPFEmpty = isEmpty(cpf)
    if(!validateCPFEmpty.success){
        return validateCPFEmpty
    }
    const cpfRegex = /^\d{11}$/;
    if(!cpfRegex.test(cpf)){
        return {success: false, error: "CPF_INVALID_FORMAT" }
    }
    return {success: true}
}

function validateClient(name, cpf){
    const functionValidateName = validateName(name)
    const functionValidateCPF = validateCPF(cpf)

    if(!functionValidateName.success){
        return functionValidateName
    }

    if(!functionValidateCPF.success){
        return functionValidateCPF
    }

    return {success: true}
}

export default validateClient
