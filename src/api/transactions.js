import { faker } from "@faker-js/faker";

const numberOfcustomers = 10;
const numberOfRecords = 100;

const customers = new Array(numberOfcustomers).fill(0).map((_) => {
  return faker.datatype.uuid();
});

export const transactionMockData = new Array(numberOfRecords)
  .fill(0)
  .map((_) => {
    return {
      sale_id: faker.datatype.uuid(),
      customer_id:
        customers[
          faker.datatype.number({ min: 0, max: numberOfcustomers - 1 })
        ],
      product_id: faker.datatype.uuid(),
      sale_price: faker.datatype.number({ max: 200, min: 1, precision: 0.01 }),
      sale_time: faker.date.between("2022-05-01", "2022-07-30"),
    };
  });
