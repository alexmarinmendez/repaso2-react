import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

import styled from "styled-components";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem} />
                            <Details>
                            <span>
                                <b>Product:</b> {item.nameItem}
                            </span>
                            <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</TopButton>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.costItem} each</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;