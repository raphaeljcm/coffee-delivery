import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { ProductCounter } from '../../components/ProductCounter';
import { Form, FormContainer, Input } from './styles';

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
              <Input type="number" name="cep" required placeholder="CEP" />
              <Input type="text" name="street" required placeholder="Rua" />
              <Input
                type="number"
                name="number"
                required
                placeholder="Número"
              />
              <Input type="text" name="complement" placeholder="Complemento" />
              <Input type="text" name="city" required placeholder="Bairro" />
              <Input type="text" name="state" required placeholder="Cidade" />
              <Input type="text" name="acronym" required placeholder="UF" />
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
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h3>Expresso Tradicional</h3>
              <div>
                R$
                <span>9,90</span>
              </div>
            </div>
            <ProductCounter />
            <button type="button">
              <Trash /> Remover
            </button>
          </div>
          <div />
        </div>
      </section>
    </Form>
  );
}
