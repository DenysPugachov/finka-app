import ExpenseItem from "./ExpenseItem";


export default function ExpensesList({ expensesArr }) {
    return (
        <ul>
            {expensesArr.map(expense =>
                <ExpenseItem
                    key={expense.id + expense.title}
                    expense={expense}

                />)}
        </ul>
    );
}
