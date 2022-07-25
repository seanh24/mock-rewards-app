export const splitByMonth = (data) => {
    let monthObj = {};
    data.forEach(item => {
        let month = item.sale_time.getMonth();
        if(monthObj[month]) {
            monthObj[month].transactions.push(item)
            monthObj[month].rewards += item.pointsEarned
        } else {
            monthObj[month] = {}
            monthObj[month].transactions = [item]
            monthObj[month].rewards = item.pointsEarned
        }
    })
    let sum = 0;
    Object.keys(monthObj).forEach(key => {
        sum += monthObj[key].rewards
    })
    monthObj.totalRewards = sum;
    return monthObj
}