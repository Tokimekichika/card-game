
import styles from './StartPage.module.css';
import moon from './img/moon.png'
import mount_behind from './img/mountains_behind.png'
import mount_front from './img/mountains_front.png'
import stars from './img/stars.png'

const StartPage = () => {
    const Play = () => {

    }

    return (
        <body>
            <section>
                <img src={stars} id={styles.stars} alt='stars'/>
                <img src={moon} id={styles.moon} alt='moon'/>
                <img src={mount_behind} id={styles.mount_behind} alt='mount_behind'/>
                <h2 id={styles.text}>Welcome to the <span>Card Game</span></h2>
                <button id={styles.btn} onClick={Play}>Start</button>
                <img src={mount_front} id={styles.mount_front} alt='mount_front'/>
            </section>
        </body>
    )
}



export default StartPage;
