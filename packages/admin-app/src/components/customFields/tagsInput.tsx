import React from 'react';

import { Buildable, WrappedInput, Field } from '@dh-test/ui';
import { RegisterOptions } from 'react-hook-form';

export const TagsInput = (props: Buildable<Field>) => {
  const newRules: RegisterOptions = {
    ...props.rules,
    setValueAs: (val) => val.split(', '),
  };
  return <WrappedInput {...props} rules={newRules} />;
};
