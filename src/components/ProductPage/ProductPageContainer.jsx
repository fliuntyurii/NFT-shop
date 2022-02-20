import ProductPage from "./ProductPage"
import { connect } from 'react-redux';
import { useState } from "react";
import { toggleModalWindow } from "../../redux/productPageReducer.tsx";
import { setNftData, setNftDataThunk } from "../../redux/productPageReducer.tsx";

const ProductPageContainer = (props) => {

    const [confirmDelete, setconfirmDelete] = useState(false);

    const closeModalWindow = () => {
        props.isModalWindow ? props.toggleModalWindow(false) : props.toggleModalWindow(true);
    }
    
    const deleteNft = (ev) => {
        const id = ev.target.getAttribute('id');
        
        fetch('https://my-json-server.typicode.com/fliuntyurii/NFT-shop/Products/' + id, { 
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => data);
        
        props.toggleModalWindow(false);     
    }
    
    return (
        <div>
            {props.isModalWindow ? 
                <ProductPage 
                    deleteNft={deleteNft}
                    nft={props.nft} 
                    closeModalWindow={closeModalWindow} 
                /> : 
            null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isModalWindow: state.productPage.isModalWindow,
        nft: state.productPage.nft
    }
}

export default connect(mapStateToProps, { setNftData, toggleModalWindow, setNftDataThunk })(ProductPageContainer);