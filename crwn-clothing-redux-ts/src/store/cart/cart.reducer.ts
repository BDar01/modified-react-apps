import { AnyAction } from "redux-saga";
import { CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen } from "./cart.action";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: true,
    cartItems: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

    if(setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload
        };
    }

    if(setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload
        };
    }

    return state;
};