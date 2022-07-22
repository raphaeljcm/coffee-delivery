import { InputContainer } from './styles';

export function OrderAddressGroup() {
  return (
    <InputContainer>
      <div id="cep">
        <input type="number" name="cep" required placeholder="CEP" />
      </div>
      <div id="street">
        <input type="text" name="street" required placeholder="Rua" />
      </div>
      <div id="number">
        <input type="number" name="number" required placeholder="Número" />
      </div>
      <div id="complement">
        <input type="text" name="complement" placeholder="Complemento" />
        <p>Opcional</p>
      </div>
      <div id="district">
        <input type="text" name="district" required placeholder="Bairro" />
      </div>
      <div id="city">
        <input type="text" name="city" required placeholder="Cidade" />
      </div>
      <div id="acronym">
        <input type="text" name="acronym" required placeholder="UF" />
      </div>
    </InputContainer>
  );
}
