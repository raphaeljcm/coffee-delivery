import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as S from './styles';
import successImg from '../../assets/success-illustration.png';
import { useOrder } from '../../contexts/OrderContext';

export function Success() {
  const { order } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    if (order.orderDone !== true) {
      navigate('/', { replace: true });
    }
  }, [navigate, order.orderDone]);

  return (
    <S.SuccessContainer className="container">
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <div>
          <div>
            <S.SuccessDetails color="purple">
              <MapPin weight="fill" size={16} color="#FAFAFA" />
            </S.SuccessDetails>
            <div>
              <p>
                Entrega em <span className="bold">{order.street}</span>
              </p>
              <p>
                {order.city} - {order.district}, {order.acronym}
              </p>
            </div>
          </div>
          <div>
            <S.SuccessDetails color="yellow">
              <Timer weight="fill" size={16} color="#FAFAFA" />
            </S.SuccessDetails>
            <div>
              <p>Previsão de entrega</p>
              <p className="bold">20 min - 30 min</p>
            </div>
          </div>
          <div>
            <S.SuccessDetails color="yellow-dark">
              <CurrencyDollar weight="fill" size={16} color="#FAFAFA" />
            </S.SuccessDetails>
            <div>
              <p>Pagamento na entrega</p>
              {order.paymentMethod === 'credit-card' ? (
                <p className="bold">Cartão de Crédito</p>
              ) : order.paymentMethod === 'debit-card' ? (
                <p className="bold">Cartão de Débito</p>
              ) : (
                <p className="bold">Dinheiro</p>
              )}
            </div>
          </div>
        </div>
        <img
          src={successImg}
          alt="Uma pessoa em cima de uma moto roxa com o pedido na garupa"
        />
      </div>
    </S.SuccessContainer>
  );
}
