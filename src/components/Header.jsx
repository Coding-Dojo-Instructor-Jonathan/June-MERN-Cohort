import styles from "../assets/css/Header.module.css"

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <h1>Reactive Coffee Co.</h1>
            <nav>
                <a href="#">Drink Menu</a>
                <a href="#">Create New Drink</a>
            </nav>
        </header>
    )
}

export default Header;