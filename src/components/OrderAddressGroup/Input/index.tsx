import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { ErrorOption } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: ErrorOption;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, ...rest },
  ref
) => {
  return (
    <>
      <input {...rest} ref={ref} />
      {!!error && <p>{error.type}</p>}
    </>
  );
};

export const Input = forwardRef(InputBase);
