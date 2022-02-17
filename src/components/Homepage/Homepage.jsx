import style from "./Homepage.module.css";

const Homepage = (props) => {
    const discountImg = 'https://previews.123rf.com/images/valentint/valentint1505/valentint150502811/39925513-icono-de-10-por-ciento-de-descuento-bot%C3%B3n-azul-de-internet-sobre-fondo-blanco-.jpg'
    const nftImg = 'https://root-nation.com/wp-content/uploads/2021/09/NFT-1.jpg'
    return (
        <div className={style.homepage}>
            <a name='home'></a>
            <div className={style.button}>
                <i onClick={props.toggleChange} className={style.left}></i>
            </div>
            {
                props.toggle ? 
                    <div className={style.banner}>
                        <p>Welcome to my NFT collection</p>
                        <span>You can get it for the best price</span>
                        <img className={style.nftImage} src={nftImg} alt="" />
                        {/* <div className={style.line}></div> */}
                        <button>Buy now</button>
                    </div> 
                :
                    <div className={style.banner}>
                        <p>Discount every friday</p>
                        <span>from 5:00 PM to 6:00 PM</span>
                        <img src={discountImg} alt="" />
                        <button>Buy now</button> 
                    </div>
            }
            <div className={style.button}>
                <i onClick={props.toggleChange} className={style.right}></i>
            </div>
        </div>
    )
}

export default Homepage;