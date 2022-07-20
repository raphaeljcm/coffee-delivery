import { Cart } from '../../../components/Cart';
import { ProductCounter } from '../../../components/ProductCounter';
import { CoffeeContainer, CoffeeDetails } from './stytes';

const coffees = [
  {
    name: 'Expresso Tradicional',
    types: ['tradicional'],
    content: 'O tradicional café feito com água quente e grãos moídos',
    image: 'src/assets/coffees/expresso.svg',
    value: 9.9,
  },
  {
    name: 'Expresso Americano',
    types: ['tradicional'],
    content: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    image: 'src/assets/coffees/americano.svg',
  },
  {
    name: 'Expresso Cremoso',
    types: ['tradicional'],
    content: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    image: 'src/assets/coffees/expresso-cremoso.svg',
  },
  {
    name: 'Expresso Gelado',
    types: ['tradicional', 'gelado'],
    content: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    image: 'src/assets/coffees/cafe-gelado.svg',
  },
  {
    name: 'Café com Leite',
    types: ['tradicional', 'com leite'],
    content: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    image: 'src/assets/coffees/cafe-com-leite.svg',
  },
  {
    name: 'Latte',
    types: ['tradicional', 'com leite'],
    content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    image: 'src/assets/coffees/latte.svg',
  },
  {
    name: 'Capuccino',
    types: ['tradicional', 'com leite'],
    content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    image: 'src/assets/coffees/capuccino.svg',
  },
  {
    name: 'Macchiato',
    types: ['tradicional', 'com leite'],
    content: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    image: 'src/assets/coffees/macchiato.svg',
  },
  {
    name: 'Mocaccino',
    types: ['tradicional', 'com leite'],
    content: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    image: 'src/assets/coffees/mochaccino.svg',
  },
  {
    name: 'Chocolate Quente',
    types: ['tradicional', 'com leite'],
    content: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    image: 'src/assets/coffees/chocolate-quente.svg',
  },
  {
    name: 'Cubano',
    types: ['especial', 'alcoólico', 'gelado'],
    content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    image: 'src/assets/coffees/cubano.svg',
  },
  {
    name: 'Havaiano',
    types: ['especial'],
    content: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    image: 'src/assets/coffees/havaiano.svg',
  },
  {
    name: 'Árabe',
    types: ['especial'],
    content: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    image: 'src/assets/coffees/arabe.svg',
  },
  {
    name: 'Irlandês',
    types: ['especial', 'alcoólico'],
    content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    image: 'src/assets/coffees/irlandes.svg',
  },
];

export function CoffeeSelector() {
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
                {new Intl.NumberFormat('pt-BR').format(coffee.value)}0
              </span>
            </div>
            <div>
              <ProductCounter />
              <div>
                <Cart
                  color="#F3F2F2"
                  weight="fill"
                  containerColor="purpleDark"
                />
              </div>
            </div>
          </CoffeeDetails>
        </CoffeeContainer>
      ))}
    </>
  );
}
