import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderAddressGroup } from '../../components/OrderAddressGroup/index';
import { ProductCounter } from '../../components/ProductCounter';
import { useProduct } from '../../contexts/ProductContext';
import {
  ConfirmOrderContainer,
  Form,
  FormContainer,
  PaymentMethodContainer,
  ProductInCart,
} from './styles';
import { useOrder } from '../../contexts/OrderContext';
import { Order } from '../../types';
import { useModal } from '../../contexts/ModalContext';
import { CheckoutModal } from '../../components/CheckoutModal';

const newOrderFormValidationSchema = yup.object().shape({
  cep: yup.string().required('Este campo é obrigatório'),
  street: yup.string().required('Este campo é obrigatório'),
  number: yup.string().required('Este campo é obrigatório'),
  complement: yup.string(),
  district: yup.string().required('Este campo é obrigatório'),
  city: yup.string().required('Este campo é obrigatório'),
  acronym: yup
    .string()
    .max(2, 'Somente duas letras')
    .required('Este campo é obrigatório'),
});

export function Checkout() {
  const [paymentType, setPaymentType] = useState<
    'credit-card' | 'debit-card' | 'cash'
  >('credit-card');
  const navigate = useNavigate();

  // Custom Hooks and Providers
  const { order, resetProduct } = useProduct();
  const { addOrder } = useOrder();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  // React-hook-form
  const newOrderForm = useForm<Order>({
    resolver: yupResolver(newOrderFormValidationSchema),
  });

  const { handleSubmit, reset } = newOrderForm;

  useEffect(() => {
    if (order.length === 0) {
      navigate('/', { replace: true });
    }
  }, [navigate, order]);

  const total = order.reduce(
    (sumTotal, product) => {
      sumTotal.orderTotal += product.price * product.amount;
      return sumTotal;
    },
    {
      orderTotal: 0,
    }
  );

  const handleCreateNewOrder = (data: Order) => {
    const order = {
      ...data,
      number: Number(data.number),
    };

    addOrder(order);
    reset();
    resetProduct();
    navigate('/success', { replace: true });
  };

  return (
    <Form className="container" onSubmit={handleSubmit(handleCreateNewOrder)}>
      <section>
        <h2>Complete seu pedido</h2>
        <div>
          <FormProvider {...newOrderForm}>
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
                <button
                  type="button"
                  onClick={() => setPaymentType('credit-card')}
                  className={paymentType === 'credit-card' ? 'active' : ''}
                >
                  <CreditCard size={16} color="#8047F8" /> Cartão de Crédito
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('debit-card')}
                  className={paymentType === 'debit-card' ? 'active' : ''}
                >
                  <Bank size={16} color="#8047F8" /> Cartão de Débito
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('cash')}
                  className={paymentType === 'cash' ? 'active' : ''}
                >
                  <Money size={16} color="#8047F8" />
                  Dinheiro
                </button>
              </PaymentMethodContainer>
            </FormContainer>
          </FormProvider>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <ConfirmOrderContainer>
          {order.map(prod => (
            <ProductInCart key={prod.name}>
              <img src={prod.image} alt={prod.name} />
              <div>
                <h3>{prod.name}</h3>
                <div>
                  <ProductCounter height="small" isCheckoutPage coffee={prod} />
                  <button type="button" onClick={handleOpenModal}>
                    <Trash size={16} color="#8047F8" /> Remover
                  </button>
                </div>
              </div>
              <div>
                R$
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                  }).format(prod.price * prod.amount)}
                </span>
              </div>
              <CheckoutModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                prodId={prod.id}
              />
            </ProductInCart>
          ))}

          <div>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <p>Total</p>
            </div>
            <div>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total.orderTotal)}
              </p>
              <p>R$ 3,50</p>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total.orderTotal + 3.5)}
              </p>
            </div>
          </div>
          <button type="submit">Confirmar pedido</button>
        </ConfirmOrderContainer>
      </section>
    </Form>
  );
}
