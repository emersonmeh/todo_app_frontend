export const changeDescription = (event) => ({
    //type é atributo obrigatório na criação da action
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value 
})