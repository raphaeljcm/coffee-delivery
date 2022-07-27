import { MapPin } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';
import { useProduct } from '../../contexts/ProductContext';
import { Cart } from '../Cart';
import { HeaderContainer, Map } from './styles';

export function Header() {
  const { order } = useProduct();
  const isProducts = order.length > 0;

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/" title="Home">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div>
          <Map>
            <MapPin size={22} weight="fill" color="#8047F8" />
            Porto Alegre, RS
          </Map>
          <button
            type="button"
            onClick={() => {
              if (!isProducts) {
                toast.error('Adicione algum produto no carrinho');
              }
            }}
          >
            <NavLink to={isProducts ? '/checkout' : '/'} title="Checkout">
              <Cart
                color="#C47F17"
                weight="fill"
                containerColor="yellow"
                isCart
              />
            </NavLink>
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
}
