const textInputStyles = ( colorScheme ) => {
    return (
        `padding: 15px;
        outline: none;
        box-sizing: border-box;
        &:focus {
        border: 5px solid ${ colorScheme.marigold };
        padding: 10px;
        }
        `
    )
}

const buttonInputStyles = ( colorScheme ) => {
    return (
        `cursor: pointer;
         background-color: ${ colorScheme.marigold };
         &:disabled{
         border: 5px solid ${ colorScheme.marigold };
         background-color: ${ colorScheme.steel };
         color: ${ colorScheme.marigold };
         cursor: not-allowed;
         }
        `
    )
}

const checkboxInputStyles = (colorScheme) => {
    return (
        `
         appearance: none;
         height: 25px;
         width: 25px;
         background-color: white;
         border-radius: 5px;
         border: 5px solid ${ colorScheme.steel };
         margin: 0;
         &:checked{
         background-color: ${ colorScheme.marigold }
         }
         `
    )
}

export const additionalInputStyles = {
    textInputStyles,
    buttonInputStyles,
    checkboxInputStyles
}
