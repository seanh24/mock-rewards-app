import { addPoints, groupByMonth } from "../api/transaction.api";

const CustomerCard = (props) => {
  const { transactionsByCustomer } = props;

  let dataWithPoints = addPoints(transactionsByCustomer);
  let dataByMonth = groupByMonth(dataWithPoints);

  return (
    <section className="customer-card" data-testid="customer-card">
      <h2>Customer id: {transactionsByCustomer[0].customer_id}</h2>
      <h3 data-testid="total-rewards">{`Total Rewards Points: ${dataByMonth.totalRewards}`}</h3>

      {!dataByMonth
        ? ""
        : Object.keys(dataByMonth).map((key) => {
            if (key !== "totalRewards") {
              let month = new Date(dataByMonth[key].transactions[0].sale_time);
              let monthStr = new Intl.DateTimeFormat("en-US", {
                month: "long",
              }).format(month);
              return (
                <h4
                  className="customer-card__month"
                  data-testid="monthly-reward"
                  key={monthStr}
                >
                  {monthStr}: {dataByMonth[key].rewards} points
                </h4>
              );
            }
          })}
    </section>
  );
};

export default CustomerCard;
