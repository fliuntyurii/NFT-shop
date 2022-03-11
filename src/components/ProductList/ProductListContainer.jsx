import ProductList from "./ProductList";
import { connect } from 'react-redux';
import { setNftDataThunk, toggleModalWindow } from '../../redux/productPageReducer.tsx';
import React, { useRef, useEffect } from "react";

const ProductListContainer = (props) => {
    const myRef = useRef();

    useEffect(() => {
        props.setNftDataThunk();
    }, [props.nft.length])

    const openModalWindow = (ev) => {
        props.isModalWindow ? props.toggleModalWindow(false) : props.toggleModalWindow(true);
        const getId = ev.target;
        return finalId = getId.getAttribute('id');
    }

    const insertAfter = (elem, refElem) => {
        return myRef.current.insertBefore(elem, refElem.nextSibling)
    }

    const sortToLow = () => {
        for (let i = 0; i < myRef.current.children.length; i++) {
            for (let n = i; n < myRef.current.children.length; n++) {
                if (+myRef.current.children[i].getAttribute('data-price') > +myRef.current.children[n].getAttribute('data-price')) {
                    let replaceNode = myRef.current.replaceChild(myRef.current.children[n], myRef.current.children[i]);
                    insertAfter(replaceNode, myRef.current.children[i]);
                }
            }
        }
    }

    const sortToHigh = () => {
        for (let i = 0; i < myRef.current.children.length; i++) {
            for (let n = i; n < myRef.current.children.length; n++) {
                if (+myRef.current.children[i].getAttribute('data-price') < +myRef.current.children[n].getAttribute('data-price')) {
                    let replaceNode = myRef.current.replaceChild(myRef.current.children[n], myRef.current.children[i]);
                    insertAfter(replaceNode, myRef.current.children[i]);
                }
            }
        }
    } 

    const sortByName = () => {
        for (let i = 0; i < myRef.current.children.length; i++) {
            for (let n = i; n < myRef.current.children.length; n++) {
                if (myRef.current.children[i].getAttribute('data-name') > myRef.current.children[n].getAttribute('data-name')) {
                    let replaceNode = myRef.current.replaceChild(myRef.current.children[n], myRef.current.children[i]);
                    insertAfter(replaceNode, myRef.current.children[i]);
                }
            }
        }
    }
    return (
        <ProductList sortByName={sortByName} 
            sortToLow={sortToLow} 
            sortToHigh={sortToHigh} myRef={myRef} 
            nft={props.nft} 
            isFetching={props.isFetching}
            openModalWindow={openModalWindow}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        nft: state.productPage.nft,
        isFetching: state.productPage.isFetching,
        isModalWindow: state.productPage.isModalWindow
    }
}

export let finalId;

export default connect(mapStateToProps, { setNftDataThunk, toggleModalWindow })(ProductListContainer);