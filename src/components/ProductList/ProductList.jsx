import style from "./ProductList.module.css"

const ProductList = (props) => {
    const addImage = 'https://clipart-best.com/img/plus/plus-clip-art-115.png';

    return (
        <div className={style.block}>
            <a name='products'></a>            
            <div className={style.nav}>   
                <h2>Products</h2>
                <div>
                    <div>Sort by: <button>Price</button> | <button>Name</button></div>
                </div>
            </div>
            <div className={style.nftPage}>
                <div className={style.nftBlock}>
                    <img src={addImage} className={style.nftImage} />
                    <h3>Add new card</h3>
                    <p>Transaction Fee 5%</p>
                    <p>Sell card</p>
                    <div className={style.button}>
                        <button>Add</button>
                    </div>
                </div>
                {
                    props.nft.map(nft => <div key={nft.id} className={style.nftBlock}>
                        <img src={nft.imageUrl} className={style.nftImage} />
                        <h3>{nft.name}</h3>
                        <p>Amount: {nft.amount}</p>
                        <p>Price: {nft.price}$</p>
                        <div className={style.button}>
                            <button>Info</button>
                            <button>Buy</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    )
}

export default ProductList;