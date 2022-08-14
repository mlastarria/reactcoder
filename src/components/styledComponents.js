import styled from "styled-components";

//Cart
const WrapperCart = styled.div`

    padding: 20px;
`;

const TitleCart = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  &:last-child {
    border: none;
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 120px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #5e5e5e;
`;

const ProductAmountContainer = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ProductAmount = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #5e5e5e;
`;

const SummaryOutline = styled.div`
    width: 100%;
    background: #e8e8e8;
    border: solid 1px #198754;
    border-radius: 8px;
    padding: 20px 10px;
`;

const SummaryTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 36px;
`;

const SummarySubKey = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

const SummarySubValue = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const SummaryFormGroup = styled.div`
  margin: 5px 0;
`;

const SummaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: solid 1px #a1a1a1;
`;

const SummaryErrorSpan = styled.span`
  font-size: 12px;
  font-weight: 200;
  color: #dc3545;
`;

export{WrapperCart,TitleCart,ContentCart,Product,ProductDetail,ImageCart,Details,PriceDetail,ProductPrice,ProductAmount,ProductAmountContainer,SummaryOutline,SummaryTitle,SummarySubKey, SummarySubValue,SummaryRow,SummaryFormGroup,SummaryInput,SummaryErrorSpan

}