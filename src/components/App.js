import ExpensesList from "./ExpensesList";

const expensesArr = [
  {
    id: 1,
    title: "🍎 Food",
    // image: "🍎",
  },
  {
    id: 2,
    title: "👕 Close",
    // image: "👕",
  },
  {
    id: 3,
    title: "🧴 Cosmetics",
    // image: "🧴",
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">

        <ExpensesList expensesArr={expensesArr} />

      </div>
    </div>
  );
}


