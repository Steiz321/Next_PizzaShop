import styles from "../styles/PizzaList.module.css";
import PizzaCard from "/components/PizzaCard"

const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best pizza in the world!</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus tellus sed vestibulum scelerisque. Fusce euismod massa vel nibh vehicula, a commodo mauris sagittis. Mauris malesuada aliquam metus, quis varius erat posuere at. Aenean lacinia orci non sem fermentum, at tincidunt felis egestas. Etiam ultrices justo et aliquet bibendum. Donec et mollis felis.</p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
            </div>
        </div>
    );
}

export default PizzaList;