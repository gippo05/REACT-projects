import styles from "./Header.module.css"


function Header(){

    return(
        <header>
            <nav className={styles.navbar}>
                <div className="my-Logo">LOGO</div>

                <div className={styles.navbarLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                </div>
                <ul>
                    
                </ul>
            </nav>
        </header>
    );

}

export default Header