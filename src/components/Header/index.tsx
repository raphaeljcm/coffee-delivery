import { MapPin } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { HeaderContainer, Map } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <div>
        <Map>
          <MapPin size={32} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </Map>
        <Cart color="#C47F17" weight="fill" />
      </div>
    </HeaderContainer>
  );
}
