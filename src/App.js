import { useEffect, useState } from "react";
import "./App.css";
import CustomerCard from "./components/customerCard";
import { mockFetch } from "./api/api";
import { groupByCustomers } from "./api/api";
import useIsLoading from "./hooks/useIsLoading";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading, spinner] = useIsLoading(true);

  useEffect(() => {
    mockFetch().then((data) => setTransactions(data));
  }, []);

  useEffect(() => {
    if (transactions) {
      let tempData = groupByCustomers(transactions);
      setCustomers(tempData);
      setIsLoading(false);
    }
  }, [transactions]);

  return (
    <div className="App">
      <h1>Rewards System</h1>
      {isLoading
        ? spinner
        : Object.keys(customers).map((customer) => {
            return (
              <CustomerCard key={customer} transactions={customers[customer]} />
            );
          })}
    </div>
  );
}

export default App;
