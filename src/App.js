import { useEffect, useState } from "react";
import "./App.css";
import CustomerCard from "./components/customerCard";
import { mockFetch } from "./api/transaction.api";
import { groupByCustomers } from "./api/transaction.api";
import useIsLoading from "./hooks/useIsLoading";

function App() {
  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading, spinner] = useIsLoading(false);

  useEffect(() => {
    setIsLoading(true);
    mockFetch().then((data) => {
      setCustomers(groupByCustomers(data));
      setIsLoading(false);
    });
  }, []);
  //check spinner at start -> create spy for mockfetch and return promise resolve mock data -> check dom renders card properly

  const renderCustomerCards = () => {
    if (customers) {
      return Object.keys(customers).map((customer) => {
        console.log(customers[customer]);
        return (
          <CustomerCard key={customer} transactionsByCustomer={customers[customer]} />
        );
      });
    } else {
      return null
    }
  };

  return (
    <div className="App">
      <h1>Rewards System</h1>
      {isLoading ? spinner : renderCustomerCards()}
    </div>
  );
}

export default App;
