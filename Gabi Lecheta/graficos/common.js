const getcsS = (variavel) => {

    const bodystyles = getComputedStyle(document.body)
    
    return bodyStyles.getPropertyValue(variavel)
    
    }
    
    const tickConfig = {
    
    family: getCSS('--font'),
    
    size: 16,
    
    color: getcss('--primary-color')

    }
    
    export {getcss, tickConfig}