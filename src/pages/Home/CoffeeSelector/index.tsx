import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SyncLoader } from 'react-spinners';
import { ProductCounter } from '../../../components/ProductCounter';
import api from '../../../services/api';
import { CoffeeType } from '../../../types';
import { CoffeeContainer, CoffeeDetails } from './styles';

export function CoffeeSelector() {
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  useEffect(() => {
    try {
      (async function getCoffeesData() {
        const response = await api.get('/coffees');
        setCoffees(response.data);
      })();
    } catch (err) {
      toast.error('An error occured, sorry');
    }
  }, []);

  if (coffees.length === 0) {
    return (
      <div className="container">
        <SyncLoader color="#8047F8" />
      </div>
    );
  }

  return (
    <>
      {coffees.map(coffee => (
        <CoffeeContainer key={coffee.name}>
          <img src={coffee.image} alt={coffee.name} />
          <div className="types">
            {coffee.types.map(type => (
              <div key={type}>{type}</div>
            ))}
          </div>
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
              <ProductCounter height="medium" coffee={coffee} />
            </div>
          </CoffeeDetails>
        </CoffeeContainer>
      ))}
    </>
  );
}
