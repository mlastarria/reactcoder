import React from 'react';
import { SummaryOutline,SummaryTitle,SummarySubValue,SummaryRow } from './styledComponents';

const CartSummary = (props) => {
    const { count, price } = props;

    return (
        <SummaryOutline>
            <SummaryTitle>cart summary</SummaryTitle>
            <SummaryRow>
                <SummarySubValue>Count</SummarySubValue>
                <SummarySubValue>{count}</SummarySubValue>
            </SummaryRow>
            <SummaryRow>
                <SummarySubValue>Price</SummarySubValue>
                <SummarySubValue>${price}</SummarySubValue>
            </SummaryRow>
        </SummaryOutline>
    )
}

export default CartSummary;
