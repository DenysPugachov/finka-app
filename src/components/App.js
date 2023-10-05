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
    amount: -5,
  },
  {
    id: 2,
    title: "Closes",
    amount: -410,
  },
  {
    id: 3,
    title: "Cosmetics",
    amount: -34,
  },
  {
    id: 4,
    title: "Home",
    amount: -115,
  },
  {
    id: 5,
    title: "Medicine",
    amount: -7,
  },
  {
    id: 6,
    title: "Transport",
    amount: -117,
  },
  {
    id: 7,
    title: "Adventures",
    amount: -110,
  },
  {
    id: 8,
    title: "Other",
    amount: -10,
  }
]

export default function App() {
  const [expenseslist, setExpensesList] = useState(expensesCategoriesArr)
  const [amountSpend, setAmountSpend] = useState("")
  const [selectedExpenseId, setSelectedExpenseId] = useState(null)

  function handleExpenseClicked(clickedId) {
    // add class "selected"
    setSelectedExpenseId(currentlySelectedId => currentlySelectedId === clickedId ? null : clickedId)
  }

  function handleSumbitAmountSpend(e) {
    e.preventDefault()
    if (!selectedExpenseId) return alert("Choose category!")
    //update expanse array
    setExpensesList(curExpensesList => curExpensesList.map(expenseItem => expenseItem.id === selectedExpenseId ? { ...expenseItem, amount: expenseItem.amount - amountSpend } : expenseItem))
    setAmountSpend("")
  }

  return (
    <div className="app">

      {/* <PanelBalance list={balanceCategoriesArr} category="balance" /> */}
      <PanelExpenses
        list={expenseslist}
        category="expenses"
        selectedExpenseId={selectedExpenseId}
        expenseClicked={handleExpenseClicked}
      />

      <form
        className="input-container"
        onSubmit={handleSumbitAmountSpend}
      >
        <input
          required
          type="number"
          placeholder="Amount here..."
          value={amountSpend}
          onChange={(e) => setAmountSpend(Number(e.target.value))}
        />
        <button type="submit" className="button">✓</button>
      </form>

    </div>
  );
}


// function PanelBalance({ list, category }) {
//   const [selectedItemId, setSelectedItemId] = useState(null)
//   const sumOfAmounts = list.reduce((acc, cur) => acc + cur.amount, 0)

//   function handleBtnClick(id) {
//     setSelectedItemId(currentId => currentId === id ? null : id)
//   }

//   return (
//     <div className={`panel panel__${category}`}>
//       <h1 className="panel__title">Sum of {category}: {sumOfAmounts} zl.</h1>
//       <div className="panel__content">
//         {list.map(item =>
//           <ItemBtn
//             key={item.id}
//             itemObj={item}
//             onBtnClick={handleBtnClick}
//             selectedItemId={selectedItemId}
//           />)}
//       </div>
//     </div>
//   )
// }


function PanelExpenses({ list, category, selectedExpenseId, expenseClicked }) {
  const sumOfAmounts = list.reduce((acc, cur) => acc + cur.amount, 0)
  return (
    <div className={`panel panel__${category}`}>
      <h1 className="panel__title">Sum of {category}: {sumOfAmounts} zl.</h1>
      <div className="panel__content">
        {list.map(itemObj =>
          <ItemBtn
            key={itemObj.id}
            itemObj={itemObj}
            onBtnClick={expenseClicked}
            selectedItemId={selectedExpenseId}
          />)}
      </div>
    </div>
  )
}


function ItemBtn({ itemObj, onBtnClick, selectedItemId }) {
  const { title, amount, id } = itemObj
  const isSelected = selectedItemId === id
  // console.log('ItemBtn selectedItemId', selectedItemId)

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



