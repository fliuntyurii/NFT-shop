import { finalId } from '../ProductList/ProductListContainer'
import style from './ProductPage.module.css'

const ProductPage = (props) => {
    const index = props.nft.findIndex(el => el.id == finalId)
    return (
        <div className={style.productPage}>
            <div className={style.productBlock}>
                <div className={style.header}>
                    <p>Product Name</p>
                    <button onClick={props.closeModalWindow} className={style.close}></button>
                </div>
                <div className={style.body}>
                    <p>{props.nft[index].name}</p>
                    <img src={props.nft[index].imageUrl} alt="" />
                    <p>{props.nft[index].amount}</p>
                    <p>{props.nft[index].price}</p>
                    <div>
                        <p>{props.nft[index].size.width}</p>
                        <p>{props.nft[index].size.height}</p>
                    </div>
                    {/* <div>
                        <p>{props.nft[index].comments[0].description || 'null'}</p>
                        <p>{props.nft[index].comments[0].date || 's'}</p>
                    </div> */}
                </div>
                <div className={style.footer}>
                    <button id={finalId} onClick={props.deleteNft} className={style.delete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;