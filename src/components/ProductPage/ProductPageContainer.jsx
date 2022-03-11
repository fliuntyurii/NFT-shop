import ProductPage from "./ProductPage"
import { connect } from 'react-redux';
import { useState } from "react";
import { toggleModalWindow, baseUrl } from "../../redux/productPageReducer.tsx";
import { setNftData, setNftDataThunk } from "../../redux/productPageReducer.tsx";

const ProductPageContainer = (props) => {

    const [confirmDelete, setconfirmDelete] = useState(false);

    const closeModalWindow = () => {
        props.isModalWindow ? props.toggleModalWindow(false) : props.toggleModalWindow(true);
        confirmDelete && setconfirmDelete(false)
    }

    const confirmWindow = () => {
        confirmDelete ? setconfirmDelete(false) : setconfirmDelete(true);
    }
    
    const deleteNft = (ev) => {
        const id = ev.target.getAttribute('id');
        
        fetch(`${baseUrl}${id}`, { 
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => data);
        confirmDelete ? setconfirmDelete(false) : setconfirmDelete(true);
        props.setNftDataThunk();
        
        props.toggleModalWindow(false);     
    }
    
    return (
        <div>
            {props.isModalWindow ? 
                <ProductPage 
                    deleteNft={deleteNft}
                    nft={props.nft} 
                    closeModalWindow={closeModalWindow} 
                    confirmWindow={confirmWindow}
                    confirmDelete={confirmDelete}
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