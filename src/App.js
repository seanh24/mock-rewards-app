import { useEffect, useState } from "react";
import "./App.css";
import CustomerCard from "./components/customerCard";
import { mockFetch } from "./services/api";
import { groupCustomers } from "./utils/groupCustomers";

function App() {
  const [transactions, setTransactions] = useState();
  const [customers, setCustomers] = useState();

  useEffect(() => {
    mockFetch().then((data) => setTransactions(data));
  }, []);

  useEffect(() => {
    if (transactions) {
      let tempData = groupCustomers(transactions);
      setCustomers(tempData);
    }
  }, [transactions]);

  return (
    <div className="App">
      <h1>Rewards System</h1>
      {!customers
        ? ""
        : Object.keys(customers).map((customer) => {
            return <CustomerCard key={customer} data={customers[customer]} />;
          })}
    </div>
  );
}

export default App;
