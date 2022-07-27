import { render, screen } from "@testing-library/react";
import CustomerCard from "./components/customerCard";
import { testData } from "./testData";
import "@testing-library/jest-dom";

describe("Customer Card", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<CustomerCard transactions={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a customer card", () => {
    render(<CustomerCard transactions={testData} />);
    const totalRewards = screen.getByTestId("total-rewards");
    const monthlyRewards = screen.getAllByTestId("monthly-reward");
    console.log(totalRewards);
    expect(totalRewards).toBeInTheDocument();
    expect(monthlyRewards).toHaveLength(3);
  });
});
