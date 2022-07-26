import { useEffect, useState } from "react";
import { addPoints, groupByMonth } from "../api/api";
import useIsLoading from "../hooks/useIsLoading";

const CustomerCard = (props) => {
  const [transactionsByMonth, setTransactionsByMonth] = useState();
  const [isLoading, setIsLoading, spinner] = useIsLoading(true);
  const { transactions } = props;

  useEffect(() => {
    let dataWithPoints = addPoints(transactions);
    let dataByMonth = groupByMonth(dataWithPoints);
    setTransactionsByMonth(dataByMonth);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <section className="customer-card">{spinner}</section>;
  } else {
    return (
      <section className="customerCard">
        <h2>Customer id: {transactions[0].customer_id}</h2>
        <h3>{`Total Rewards Points: ${transactionsByMonth.totalRewards}`}</h3>
        {Object.keys(transactionsByMonth).map((key) => {
          if (key !== "totalRewards") {
            let month = new Date(
              transactionsByMonth[key].transactions[0].sale_time
            );
            let monthStr = new Intl.DateTimeFormat("en-US", {
              month: "long",
            }).format(month);
            return (
              <h4 key={monthStr}>
                {monthStr}: {transactionsByMonth[key].rewards} points
              </h4>
            );
          }
        })}
      </section>
    );
  }
};

export default CustomerCard;
