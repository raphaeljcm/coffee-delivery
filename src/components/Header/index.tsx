import { MapPin } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useOrder } from '../../contexts/OrderContext';
import { Cart } from '../Cart';
import { HeaderContainer, Map } from './styles';

export function Header() {
  const { order } = useOrder();
  const isProducts = order.length > 0;

  return (
    <HeaderContainer className="container">
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo" />
      </NavLink>
      <div>
        <Map>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </Map>
        <NavLink to={isProducts ? '/checkout' : '/'} title="Checkout">
          <Cart color="#C47F17" weight="fill" containerColor="yellow" isCart />
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
