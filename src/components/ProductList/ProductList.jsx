import React from "react";
import Preloader from "../Preloader/Preloader";
import style from "./ProductList.module.css"

const ProductList = (props) => { 
    return (
        <div className={style.block}>
            <a name='products'></a>            
            <div className={style.nav}>   
                <h2>Products</h2>
                <div>
                    <div>Sort by: 
                        <button onClick={props.sortToLow}>Low $</button> | 
                        <button onClick={props.sortToHigh}>High $</button> | 
                        <button onClick={props.sortByName}>Name</button>
                    </div>
                </div>
            </div>
            <Preloader isFetching={props.isFetching} />
            <div className={style.nftPage} ref={props.myRef}>                
                {
                    props.nft.map(nft => 
                    <div key={nft.id} data-name={nft.name} data-price={nft.price} className={style.nftBlock}>
                        <img src={nft.imageUrl} className={style.nftImage} />
                        <h3>{nft.name}</h3>
                        <p>Amount: {nft.amount}</p>
                        <p>Price: {nft.price}$</p>
                        <div className={style.button}>
                            <button id={nft.id} onClick={props.openModalWindow}>Info</button>
                            <button>Buy</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    )
}

export default ProductList;