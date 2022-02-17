import ProductList from "./ProductList";
import { connect } from 'react-redux';
import { setNftDataThunk } from '../../redux/productPageReducer.tsx';
import React from "react";

class ProductListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.props.setNftDataThunk()
    }


    insertAfter = (elem, refElem) => {
        return this.myRef.current.insertBefore(elem, refElem.nextSibling)
    }

    sortToLow = () => {
        for (let i = 0; i < this.myRef.current.children.length; i++) {
            for (let n = i; n < this.myRef.current.children.length; n++) {
                if (+this.myRef.current.children[i].getAttribute('data-price') > +this.myRef.current.children[n].getAttribute('data-price')) {
                    let replaceNode = this.myRef.current.replaceChild(this.myRef.current.children[n], this.myRef.current.children[i]);
                    this.insertAfter(replaceNode, this.myRef.current.children[i]);
                }
            }
        }
    }

    sortToHigh = () => {
        for (let i = 0; i < this.myRef.current.children.length; i++) {
            for (let n = i; n < this.myRef.current.children.length; n++) {
                if (+this.myRef.current.children[i].getAttribute('data-price') < +this.myRef.current.children[n].getAttribute('data-price')) {
                    let replaceNode = this.myRef.current.replaceChild(this.myRef.current.children[n], this.myRef.current.children[i]);
                    this.insertAfter(replaceNode, this.myRef.current.children[i]);
                }
            }
        }
    } 

    sortByName = () => {
        for (let i = 0; i < this.myRef.current.children.length; i++) {
            for (let n = i; n < this.myRef.current.children.length; n++) {
                if (this.myRef.current.children[i].getAttribute('data-name') > this.myRef.current.children[n].getAttribute('data-name')) {
                    let replaceNode = this.myRef.current.replaceChild(this.myRef.current.children[n], this.myRef.current.children[i]);
                    this.insertAfter(replaceNode, this.myRef.current.children[i]);
                }
            }
        }
    }

    render() {

        return (
            <ProductList sortByName={this.sortByName} 
                sortToLow={this.sortToLow} 
                sortToHigh={this.sortToHigh} myRef={this.myRef} 
                nft={this.props.nft} 
            />
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