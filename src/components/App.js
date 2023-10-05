import { useState } from "react";

const balanceCategoriesArr = [
  {
    id: 10,
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
    amount: 0,
  }
]

const expensesCategoriesArr = [
  {
    id: 11,
    title: "Food",
    amount: 0,
  },
  {
    id: 2,
    title: "Closes",
    amount: 0,
  },
  {
    id: 3,
    title: "Cosmetics",
    amount: 0,
  },
  {
    id: 4,
    title: "Home",
    amount: 0,
  },
  {
    id: 5,
    title: "Medicine",
    amount: 0,
  },
  {
    id: 6,
    title: "Transport",
    amount: 0,
  },
  {
    id: 7,
    title: "Adventures",
    amount: 0,
  },
  {
    id: 8,
    title: "Other",
    amount: 0,
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

  function handleBtnClick(id) {
    setSelectedItemId(id)
    console.log('id', id)
  }

  return (
    <div className={`panel panel__${category}`}>
      <h2 className="panel__title">{category}: _222.22zl.</h2>
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



