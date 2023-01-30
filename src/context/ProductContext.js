import { useReducer } from 'react'
import Items from '../shared/data'
import ProductReducer from './ProductReducer'


const { createContext } = require("react")
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    console.log(Items);

    const initialState = {
        Items: Items
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)
    return (
        <ProductContext.Provider value={{
            Items: state.Items
        }}>
            {children}
        </ProductContext.Provider>

    )
}


export default ProductContext