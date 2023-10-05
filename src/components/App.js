import { useState } from "react";

const balanceCategoriesArr = [
  {
    id: 1,
    title: "Den's Card",
    amount: 123.59
  },
  {
    id: 2,
    title: "Jane's Card",
    amount: 23.59
  },
  {
    id: 3,
    title: "Den's Cash",
    amount: 1523.59
  },
  {
    id: 4,
    title: "Jane's Cash",
    amount: 333.59
  },
  {
    id: 6,
    title: "Alice's Cash",
    amount: 333.59
  },
  {
    id: 5,
    title: "Other",
    amount: 10,
  }
]

const expensesCategoriesArr = [
  {
    id: 1,
    title: "Food",
    amount: 5,
  },
  {
    id: 2,
    title: "Closes",
    amount: 410,
  },
  {
    id: 3,
    title: "Cosmetics",
    amount: 34,
  },
  {
    id: 4,
    title: "Home",
    amount: 115,
  },
  {
    id: 5,
    title: "Medicine",
    amount: 7,
  },
  {
    id: 6,
    title: "Transport",
    amount: 117,
  },
  {
    id: 7,
    title: "Adventures",
    amount: 110,
  },
  {
    id: 8,
    title: "Other",
    amount: 10,
  }
]

export default function App() {
  return (
    <div className="app">

      <Panel list={balanceCategoriesArr} category="balance" />
      <Panel list={expensesCategoriesArr} category="expenses" />

      <form className="input-container">
        <input type="number" placeholder="Amount here..." />
        <button type="submit" className="button">✓</button>
      </form>

    </div>
  );
}


function Panel({ list, category }) {
  const [selectedItemId, setSelectedItemId] = useState(null)
  const sumOfAmounts = list.reduce((acc, cur) => acc + cur.amount, 0)

  function handleBtnClick(id) {
    setSelectedItemId(currentId => currentId === id ? null : id)
  }

  return (
    <div className={`panel panel__${category}`}>
      <h1 className="panel__title">Sum of {category}: {sumOfAmounts} zl.</h1>
      <div className="panel__content">
        {list.map(item =>
          <PanelItem
            key={item.id}
            item={item}
            onBtnClick={handleBtnClick}
            selectedItemId={selectedItemId}
          />)}
      </div>
    </div>
  )
}


function PanelItem({ item, onBtnClick, selectedItemId }) {
  const { title, amount, id } = item
  const isSelected = id === selectedItemId

  return (
    <button
      className={`button ${isSelected ? "selected" : ""}`}
      onClick={() => onBtnClick(id)
      }>
      <h5>{title}</h5>
      {amount} zl.
    </button>
  )
}



