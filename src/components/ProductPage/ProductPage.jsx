import { finalId } from '../ProductList/ProductListContainer'
import style from './ProductPage.module.css'

const ProductPage = (props) => {
    console.log(props.nft[1].size.width)
    const index = props.nft.findIndex(el => el.id == finalId)
    return (
        <div className={style.productPage}>
            <div className={style.productBlock}>
                <div className={style.header}>
                    <p>Card #{props.nft[index].id}</p>
                    <button onClick={props.closeModalWindow} className={style.close}></button>
                </div>
                <div className={style.body}>
                    <p><span>NFT:</span> {props.nft[index].name}</p>
                    <img src={props.nft[index].imageUrl} alt="" />
                    <p><span>Amount:</span> {props.nft[index].amount}<span className={style.pcs}> pcs</span></p>
                    <p><span>Price:</span> {props.nft[index].price}$</p>
                    <div>
                    <span>Size:</span>
                        <p><span>Width:</span> {props.nft[index].size.width}mm</p>
                        <p><span>Height:</span> {props.nft[index].size.height}mm</p>
                    </div>
                    <div className={style.commentBlock}>
                    </div>
                </div>
                <div className={style.footer}>
                    <div>
                        <input type="text" placeholder='comment' />
                        <button className={style.delete}>Submit</button>
                    </div>
                    <button onClick={props.confirmWindow} className={style.delete}>Delete</button>
                </div>
                {
                    props.confirmDelete && 
                    <div className={style.confirmedMenu}>
                        <div>
                            <button id={finalId} onClick={props.deleteNft}>Confirm</button>
                            <button onClick={props.closeModalWindow}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductPage;