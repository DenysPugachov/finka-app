import Button from "./Button";

export default function ExpenseItem({ expense }) {
    const { title, image } = expense;
    return (
        <li>
            {/* <>{image}</> */}
            <h3>{title}</h3>
            <Button>➕</Button>
        </li>
    );
}
