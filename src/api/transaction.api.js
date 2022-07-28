import { transactionMockData } from "./transactions";

const mockDataCall = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(transactionMockData);
    }, 3000);
  });
};

export const mockFetch = async () => {
  let data = await mockDataCall();
  return data;
};

export const groupByMonth = (customerTransactions) => {
  let monthObj = {};
  customerTransactions.forEach((item) => {
    let month = item.sale_time.getMonth();
    if (monthObj[month]) {
      monthObj[month].transactions.push(item);
      monthObj[month].rewards += item.pointsEarned;
    } else {
      monthObj[month] = {};
      monthObj[month].transactions = [item];
      monthObj[month].rewards = item.pointsEarned;
    }
  });
  let sum = 0;
  Object.keys(monthObj).forEach((key) => {
    sum += monthObj[key].rewards;
  });
  monthObj.totalRewards = Math.floor(sum);
  return monthObj;
};

export const addPoints = (transactions) => {
  let tempData = transactions.map((item) => {
    let points = 0;
    if (item.sale_price > 100) {
      points += (item.sale_price - 100) * 2 + 50;
    } else if (item.sale_price > 50) {
      points += item.sale_price - 50;
    }
    return {
      ...item,
      pointsEarned: Math.floor(points),
    };
  });

  return tempData;
};

export const groupByCustomers = (transactions) => {
  let tempCustomers = {};
  transactions.forEach((item) => {
    if (tempCustomers[item.customer_id]) {
      tempCustomers[item.customer_id].push(item);
    } else {
      tempCustomers[item.customer_id] = [item];
    }
  });
  return tempCustomers;
};
