import { useEffect, useState } from 'react';
import { ProductCounter } from '../../../components/ProductCounter';
import { CoffeeContainer, CoffeeDetails } from './stytes';
import api from '../../../services/api';

type Coffee = {
  id: number;
  name: string;
  types: string[];
  content: string;
  image: string;
  price: number;
};

export function CoffeeSelector() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    (async function getCoffeesData() {
      const response = await api.get('/coffees');
      setCoffees(response.data);
    })();
  }, []);

  return (
    <>
      {coffees.map(coffee => (
        <CoffeeContainer key={coffee.name}>
          <img src={coffee.image} alt={coffee.name} />
          <div>Tradicional</div>
          <h3>{coffee.name}</h3>
          <p>{coffee.content}</p>

          <CoffeeDetails>
            <div>
              R$
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  minimumFractionDigits: 2,
                }).format(coffee.price)}
              </span>
            </div>
            <div>
              <ProductCounter height="medium" />
            </div>
          </CoffeeDetails>
        </CoffeeContainer>
      ))}
    </>
  );
}
