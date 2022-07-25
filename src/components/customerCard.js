import { useEffect, useState } from "react";
import { addPoints } from "../utils/addPoints";
import { splitByMonth } from "../utils/splitByMonth";

const CustomerCard = (props) => {
  const [refactoredData, setRefactoredData] = useState();

  const { data } = props;

  useEffect(() => {
    let dataWithPoints = addPoints(data);
    let dataByMonth = splitByMonth(dataWithPoints);
    setRefactoredData(dataByMonth);
  }, []);

  return (
    <section className="customerCard">
      <h2>Customer id: {data[0].customer_id}</h2>
      <h3>
        {refactoredData &&
          `Total Rewards Points: ${refactoredData.totalRewards}`}
      </h3>
      {!refactoredData
        ? ""
        : Object.keys(refactoredData).map((key) => {
            if (key !== "totalRewards") {
              let month = new Date(
                refactoredData[key].transactions[0].sale_time
              );
              let monthStr = new Intl.DateTimeFormat("en-US", {
                month: "long",
              }).format(month);
              return (
                <h4 key={monthStr}>
                  {monthStr}: {refactoredData[key].rewards} points
                </h4>
              );
            }
          })}
    </section>
  );
};

export default CustomerCard;
