import { addPoints, groupByCustomers, groupByMonth } from "./transaction.api";

const testData = [
    {
      sale_id: "02806d8b-b158-4b8c-90db-87e5d3283454",
      customer_id: "083ad411-c2a2-434d-b302-6591fa8389f5",
      product_id: "82eb3ef5-7961-400a-9c96-e0a8dd1469d5",
      sale_price: 73.7,
      sale_time: new Date("Jun 25 2022 03:30:34"),
    },
    {
      sale_id: "50cbd7e7-0b54-46c1-a82c-2d12b809b7a7",
      customer_id: "083ad411-c2a2-434d-b302-6591fa8389f5",
      product_id: "f6880819-7b6c-447a-b20d-08d7d8d0e09c",
      sale_price: 164.3,
      sale_time: new Date("May 12 2022 21:16:32"),
    },
    {
      sale_id: "548905d2-1c3e-4652-a236-c2eedfd4bc06",
      customer_id: "083ad411-c2a2-434d-b302-6591fa8389f5",
      product_id: "3dd6e01c-7eb1-4f5e-a026-6d706dfcdd5c",
      sale_price: 22.67,
      sale_time: new Date("May 18 2022 09:34:32"),
    },
    {
      sale_id: "76dc17de-ae18-482b-b897-f6e0830571da",
      customer_id: "083ad411-c2a2-434d-b302-6591fa8389f5",
      product_id: "f82f0915-93b5-4f49-bef3-14e7c4c511bb",
      sale_price: 121.17,
      sale_time: new Date("Tue May 24 2022 11:43:07"),
    },
    {
      sale_id: "14567a2d-7b25-4b3d-98cc-87e460c942b6",
      customer_id: "083ad411-c2a2-434d-b302-6591fa8389f5",
      product_id: "01a8f565-f0e6-4802-8859-9fb8a798707d",
      sale_price: 188.32,
      sale_time: new Date("Jul 27 2022 16:57:44"),
    },
  ];

describe('add points', () => {
    it('should add the correct number of points', () => {
        let transactionsWithPoints = addPoints(testData)
        expect(transactionsWithPoints[0].pointsEarned).toEqual(23)
        expect(transactionsWithPoints[1].pointsEarned).toEqual(178)
        expect(transactionsWithPoints[2].pointsEarned).toEqual(0)
        expect(transactionsWithPoints[3].pointsEarned).toEqual(92)
        expect(transactionsWithPoints[4].pointsEarned).toEqual(226)
    })
})

describe('group by customer', () => {
    let testCustomerId = testData[0].customer_id
    let customerObj = groupByCustomers(testData)
    it('should return an object with customer ID keys', () => {
        expect(customerObj).toHaveProperty(testCustomerId)
    })

    it('should have an array of transactions for the customer key', () => {
        expect(testData).toEqual(expect.arrayContaining(customerObj[testCustomerId]));
    })
})

describe('group by month', () => {
    let dataWithPoints = addPoints(testData)
    let dataByMonth = groupByMonth(dataWithPoints)
    it('should return an object with total rewards and months', () => {
        expect(dataByMonth).toHaveProperty('4')
        expect(dataByMonth).toHaveProperty('5')
        expect(dataByMonth).toHaveProperty('6')
        expect(dataByMonth).toHaveProperty('totalRewards')
    })
})