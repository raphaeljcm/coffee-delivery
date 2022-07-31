import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import * as S from './styles';
import successImg from '../../assets/success-illustration.png';

export function Success() {
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
                Entrega em{' '}
                <span className="bold">Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p className="bold">Cartão de Crédito</p>
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
