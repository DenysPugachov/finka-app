export default function ExpenseItem({ expense }) {
    const { title, image } = expense;
    return (
        <li>
            {/* <h1>{image}</h1> */}
            <h3>{title}</h3>
            <button className="button">➕</button>
        </li>
    );
}
