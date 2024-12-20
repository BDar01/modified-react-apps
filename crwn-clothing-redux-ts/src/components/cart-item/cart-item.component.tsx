import { FC, memo } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetailsContainer, CartItemImage } from "./cart-item.styles";

export type CartItemProps = {
    cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
})

export default CartItem;