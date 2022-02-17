type stateCreator = {
    nft: nftCreator | []
    isFetching: boolean
};

export type nftCreator = {
    id: number
    imageUrl: string
    name: string
    amount: number
    size: {} | null
    price: number
    comments: []
}

const initialState: stateCreator = {
    nft: [],
    isFetching: false
}

const productPageReducer = (state = initialState, action) => {
    if (action.type === 'SET-NFT-DATA') {
        return {
            ...state,
            nft: action.nft
        }
    }

    if (action.type === 'FETCHING-SWITCHER') {
        return {
            ...state,
            isFetching: action.isFetching
        }
    }

    return state;
}

export const setNftData = (nft) => ({type: 'SET-NFT-DATA', nft})

export const isFetchingCreactor = (isFetching) => ({type: 'FETCHING-SWITCHER', isFetching});

export default productPageReducer;

export const setNftDataThunk = () => (dispatch) => {
    dispatch(isFetchingCreactor(true));

    fetch('http://localhost:8000/Products', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            dispatch(setNftData(data))
            dispatch(isFetchingCreactor(false))
        })
} 