import React from 'react';
import styled from "styled-components";

const Outline = styled.div`
    width: 100%;
    border: solid 1px #aaa;
    border-radius: 8px;
    padding: 20px 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 36px;
`;

const SubValue = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const CartSummary = (props) => {
    const { count, price } = props;

    return (
        <Outline>
            <Title>cart summary</Title>
            <SummaryRow>
                <SubValue>Count</SubValue>
                <SubValue>{count}</SubValue>
            </SummaryRow>
            <SummaryRow>
                <SubValue>Price</SubValue>
                <SubValue>${price}</SubValue>
            </SummaryRow>
        </Outline>
    )
}

export default CartSummary;
