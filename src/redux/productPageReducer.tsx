export const baseUrl = 'https://my-json-server.typicode.com/fliuntyurii/NFT-shop/Products/'

type stateCreator = {
    nft: nftCreator | []
    isFetching: boolean
    isModalWindow: boolean
};

export type nftCreator = {
    id: number
    imageUrl: string
    name: string
    amount: number
    size: {}
    price: number
    comments: []
}

const initialState: stateCreator = {
    nft: [],
    isFetching: false,
    isModalWindow: false
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

    if (action.type === 'MODAL-WINDOW') {
        return {
            ...state,
            isModalWindow: action.isModalWindow
        }
    }

    return state;
}

export const setNftData = (nft) => ({type: 'SET-NFT-DATA', nft})

export const isFetchingCreactor = (isFetching) => ({type: 'FETCHING-SWITCHER', isFetching});

export const toggleModalWindow = (isModalWindow) => ({type: "MODAL-WINDOW", isModalWindow})

export default productPageReducer;

export const setNftDataThunk = () => (dispatch) => {
    dispatch(isFetchingCreactor(true));

    fetch(baseUrl, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            dispatch(setNftData(data))
            dispatch(isFetchingCreactor(false))
        })
} 