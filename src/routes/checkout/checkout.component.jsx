import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Produs</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Detalii</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Cantitate</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Preț</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Șterge</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: RON{cartTotal}</Total>
      <PaymentForm/>
    </CheckoutContainer>
  );
};

export default Checkout;
