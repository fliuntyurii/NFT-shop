import ProductList from "./ProductList";
import { connect } from 'react-redux';
import { setNftDataThunk } from '../../redux/productPageReducer.jsx';
import React from "react";

class ProductListContainer extends React.Component {

    componentDidMount() {
        this.props.setNftDataThunk()
    }

    render() {
        return (
            <ProductList nft={this.props.nft} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nft: state.productPage.nft,
        productPage: state.productPage
    }
}

export default connect(mapStateToProps, { setNftDataThunk })(ProductListContainer);