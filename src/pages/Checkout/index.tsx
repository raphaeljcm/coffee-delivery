import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { OrderAddressGroup } from '../../components/Input';
import { ProductCounter } from '../../components/ProductCounter';
import {
  ConfirmOrderContainer,
  Form,
  FormContainer,
  PaymentMethodContainer,
  ProductInCart,
} from './styles';

const productInCart = [
  {
    name: 'Expresso Tradicional',
    value: 9.9,
    qtd: 1,
    image: '/coffees/expresso.svg',
  },
  {
    name: 'Latte',
    value: 9.9,
    qtd: 2,
    image: '/coffees/latte.svg',
  },
];

export function Checkout() {
  return (
    <Form className="container">
      <section>
        <h2>Complete seu pedido</h2>
        <div>
          <FormContainer>
            <div>
              <MapPinLine color="#C47F17" size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <OrderAddressGroup />
          </FormContainer>
          <FormContainer>
            <div>
              <CurrencyDollar color="#8047F8" size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <PaymentMethodContainer>
              <button type="button">
                <CreditCard size={16} color="#8047F8" /> Cartão de Crédito
              </button>
              <button type="button">
                <Bank size={16} color="#8047F8" /> Cartão de Débito
              </button>
              <button type="button">
                <Money size={16} color="#8047F8" />
                Dinheiro
              </button>
            </PaymentMethodContainer>
          </FormContainer>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <ConfirmOrderContainer>
          {productInCart.map(prod => (
            <ProductInCart key={prod.name}>
              <img src={prod.image} alt={prod.name} />
              <div>
                <h3>{prod.name}</h3>
                <div>
                  <ProductCounter height="small" isCheckoutPage />
                  <button type="button">
                    <Trash size={16} color="#8047F8" /> Remover
                  </button>
                </div>
              </div>
              <div>
                R$
                <span>
                  {new Intl.NumberFormat('pt-BR').format(prod.value * prod.qtd)}
                  0
                </span>
              </div>
            </ProductInCart>
          ))}
          <div>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <p>Total</p>
            </div>
            <div>
              <p>R$ 29,70</p>
              <p>R$ 3,50</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button type="submit">Confirmar pedido</button>
        </ConfirmOrderContainer>
      </section>
    </Form>
  );
}
