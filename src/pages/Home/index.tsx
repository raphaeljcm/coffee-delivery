import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeDelivery from "../../assets/coffee-delivery.png";
import { CoffeeSelector } from "./CoffeeSelector";
import { Background, HomeContainer, HomeContent, HomeOption } from "./styles";

export function Home() {
  return (
    <main>
      <Background>
        <HomeContainer className="container">
          <HomeContent>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div>
              <HomeOption color="#C47F17">
                <div>
                  <ShoppingCart size={16} weight="fill" color="#FAFAFA" />
                </div>
                Compra simples e segura
              </HomeOption>
              <HomeOption color="#574F4D">
                <div>
                  <Package size={16} weight="fill" color="#FAFAFA" />
                </div>
                Embalagem mantém o café intacto
              </HomeOption>
              <HomeOption color="#DBAC2C">
                <div>
                  <Timer size={16} weight="fill" color="#FAFAFA" />
                </div>
                Entrega rápida e rastreada
              </HomeOption>
              <HomeOption color="#8047F8">
                <div>
                  <Coffee size={16} weight="fill" color="#FAFAFA" />
                </div>
                O café chega fresquinho até você
              </HomeOption>
            </div>
          </HomeContent>
          <img src={coffeeDelivery} alt="Coffee Delivery" />
        </HomeContainer>
      </Background>

      <CoffeeSelector />
    </main>
  );
}
