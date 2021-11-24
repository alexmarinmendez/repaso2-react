import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;