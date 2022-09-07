import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.tagline}>Lama pizza is the most delicious pizza in the world!</h2>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.title}>Find our restaurants</h4>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.title}>Working hours</h4>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;