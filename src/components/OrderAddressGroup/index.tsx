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
          className={errors.cep && 'error'}
        />
      </div>
      <div id="street">
        <Input
          placeholder="Rua"
          {...register('street')}
          error={errors.street}
          className={errors.street && 'error'}
        />
      </div>
      <div id="number">
        <Input
          type="number"
          placeholder="Número"
          {...register('number')}
          error={errors.number}
          className={errors.number && 'error'}
        />
      </div>
      <div id="complement">
        <Input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
          error={errors.complement}
          className={errors.complement && 'error'}
        />
        <p className="optional">Opcional</p>
      </div>
      <div id="district">
        <Input
          placeholder="Bairro"
          {...register('district')}
          error={errors.district}
          className={errors.district && 'error'}
        />
      </div>
      <div id="city">
        <Input
          placeholder="Cidade"
          {...register('city')}
          error={errors.city}
          className={errors.city && 'error'}
        />
      </div>
      <div id="acronym">
        <Input
          placeholder="UF"
          {...register('acronym')}
          error={errors.acronym}
          className={errors.acronym && 'error'}
        />
      </div>
    </InputContainer>
  );
}
