import styles from "../styles/AddButton.module.css";

const AddButton = ({setClose}) => {
    return (
        <button className={styles.mainAddButton} onClick={() => setClose(false)}>
            Add New Pizza
        </button>
    )
}

export default AddButton;