import Button from "./Button";

export default function FormAddExpense() {

    return (
        <form className="form-add-friend">
            <label> ❓Expense title</label>
            <input
                required
                type="text"
            // value={name}
            // onChange={e => onSetName(e.target.value)}
            />

            <label>👀 Image</label>
            <input
                placeholder="optional..."
                type="text"
            // value={avatar}
            // onChange={e => onSetAvatar(e.target.value)}
            />

            <Button>Add new Expense</Button>
        </form>
    )
}