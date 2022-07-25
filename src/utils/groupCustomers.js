export const groupCustomers = (transactions) => {
    let tempCustomers = {};
    transactions.forEach((item) => {
      if(tempCustomers[item.customer_id]) {
        tempCustomers[item.customer_id].push(item)
      } else {
        tempCustomers[item.customer_id] = [item]
      }
    })

    return tempCustomers
  }