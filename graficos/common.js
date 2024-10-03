const getCSS = (variavel) => {

    return getComputedStyle(document.body).getPropertyvalue(variavel)
    
    }
    
    export {getCSS}