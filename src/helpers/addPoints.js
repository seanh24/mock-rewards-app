export const addPoints = (data) => {
    let tempData = data.map(item => {
        let points = 0;
        if(item.sale_price > 100) {
            points += (item.sale_price - 100)*2 + 50
        } else if (item.sale_price > 50) {
            points += item.sale_price - 50
        }
        return {
            ...item,
            pointsEarned: points
        }
    })
    
    return tempData
}