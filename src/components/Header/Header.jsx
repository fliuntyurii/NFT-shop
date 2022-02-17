import style from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div><p>NFT collection</p></div>
            <div className={style.navigation}>
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#contacts">Contacts</a>
                <a className={style.cart} href="">Cart</a>
            </div>
        </div>
    )
}

export default Header;