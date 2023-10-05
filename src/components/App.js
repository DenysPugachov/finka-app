const deposits = [
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
    id: 5,
    title: "Other",
    amount: 0,
  },
  {
    id: 0,
    title: "➕",
    amount: ""
  }
]


export default function App() {
  return (
    <div className="app">

      <div className="panel panel__balance">
        <h2 className="panel__title">Balance: _222.22zl.</h2>
        <div className="panel__content">
          {deposits.map(data =>
            <DepositItem key={data.id} data={data} />)}
        </div>
      </div>

      <div className="panel panel__expenses">
        <h2 className="panel__title">Expenses: _222.22zl.</h2>
        <div className="panel__content">
          {deposits.map(data =>
            <DepositItem key={data.id} data={data} />)}
        </div>
      </div>

      <form className="input-container">
        <input type="number" placeholder="Amount here..." />
        <button type="submit" className="button">✓</button>
      </form>

    </div>
  );
}

function DepositItem({ data }) {
  const { title, amount } = data
  return (
    <button className="button">
      <h5>{title}</h5>
      {amount}zl.
    </button>
  )
}



