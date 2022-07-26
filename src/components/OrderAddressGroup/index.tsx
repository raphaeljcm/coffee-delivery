import { useFormContext } from 'react-hook-form';
import { Input } from './Input';
import { InputContainer } from './styles';

export function OrderAddressGroup() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputContainer>
      <div id="cep">
        <Input
          type="number"
          placeholder="CEP"
          {...register('cep')}
          error={errors.cep}
        />
      </div>
      <div id="street">
        <Input placeholder="Rua" {...register('street')} />
      </div>
      <div id="number">
        <Input type="number" placeholder="Número" {...register('number')} />
      </div>
      <div id="complement">
        <Input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
        <p>Opcional</p>
      </div>
      <div id="district">
        <Input placeholder="Bairro" {...register('district')} />
      </div>
      <div id="city">
        <Input placeholder="Cidade" {...register('city')} />
      </div>
      <div id="acronym">
        <Input placeholder="UF" {...register('acronym')} />
      </div>
    </InputContainer>
  );
}
