import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { ProductCounter } from '../../components/ProductCounter';
import {
  ConfirmOrderContainer,
  Form,
  FormContainer,
  Input,
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

            <div>
              <Input
                type="number"
                name="cep"
                id="cep"
                required
                placeholder="CEP"
              />
              <Input
                type="text"
                name="street"
                id="street"
                required
                placeholder="Rua"
              />
              <Input
                type="number"
                name="number"
                id="number"
                required
                placeholder="Número"
              />
              <Input
                type="text"
                name="complement"
                placeholder="Complemento"
                id="complement"
              />
              <Input
                type="text"
                name="district"
                id="district"
                required
                placeholder="Bairro"
              />
              <Input
                type="text"
                name="city"
                id="city"
                required
                placeholder="Cidade"
              />
              <Input
                type="text"
                name="acronym"
                id="acronym"
                required
                placeholder="UF"
              />
            </div>
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
            <div>
              <button type="button">
                <CreditCard /> Cartão de Crédito
              </button>
              <button type="button">
                <Bank /> Cartão de Débito
              </button>
              <button type="button">
                <Money />
                Dinheiro
              </button>
            </div>
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
                  <ProductCounter />
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
        </ConfirmOrderContainer>
      </section>
    </Form>
  );
}
