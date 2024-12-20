import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItemProps as CheckoutItemProps } from '../cart-item/cart-item.component';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';    

import { CheckoutItemContainer, ImageContainer, Text, Quantity, RemoveButton } from './checkout-item.styles';

const CheckoutItem: FC<CheckoutItemProps> = memo(({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Text>{name}</Text>
            <Quantity>
                <div onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={addItemHandler}>
                    &#10095;
                </div>
            </Quantity>
            <Text>{price}</Text>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
});

export default CheckoutItem;