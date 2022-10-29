import {
  ignoreEmptyVal,
  isNumberish,
  toBaseUnits,
  ValidateField,
} from '@dh-test/common-utils';
import { Buildable, Field, WrappedInput } from '@dh-test/ui';
import { RegisterOptions } from 'react-hook-form';

export const ToWeiInput = (props: Buildable<Field>) => {
  const newRules: RegisterOptions = {
    setValueAs: (val: string) => (isNumberish(val) ? toBaseUnits(val) : val),
    validate: (val) => ignoreEmptyVal(val, (val) => ValidateField.number(val)),
    ...props.rules,
  };

  return <WrappedInput {...props} rules={newRules} defaultValue="0" />;
};
