import isEmpty from "../utils/isEmpty.js";

function validateName(name){
    const validateNameEmpty = isEmpty(name)
    if(!validateNameEmpty.valid){
        return validateNameEmpty
    }
    return {valid: true}
}

function validateCPF(cpf){
    const validateCPFEmpty = isEmpty(cpf)
    if(!validateCPFEmpty.valid){
        return validateCPFEmpty
    }
    const cpfRegex = /^\d{11}$/;
    if(!cpfRegex.test(cpf)){
        return {valid: false, error: "CPF_INVALID_FORMAT" }
    }
    return {valid: true}
}

function validateClient(name, cpf){
    const functionValidateName = validateName(name)
    const functionValidateCPF = validateCPF(cpf)

    if(!functionValidateName.valid){
        return functionValidateName
    }

    if(!functionValidateCPF.valid){
        return functionValidateCPF
    }

    return {valid: true}
}

export default validateClient