import { useMemo } from 'react';
import { FormBuilder } from '@dh-test/form-builder';
import { useConnectedMembership, useDao } from '@dh-test/molochv3-context';

import { CustomFields } from '../legos/config';
import { COMMON_FORMS } from '../legos/form';

type ManageDelegateProps = {
  defaultMember?: string;
};

export const ManageDelegate = ({ defaultMember }: ManageDelegateProps) => {
  const { connectedMembership } = useConnectedMembership();
  const { refreshAll } = useDao();

  const defaultValues = useMemo(() => {
    if (defaultMember) {
      return { delegatingTo: defaultMember };
    }
    if (
      connectedMembership &&
      connectedMembership.delegatingTo !== connectedMembership.memberAddress
    ) {
      return connectedMembership;
    }
    return undefined;
  }, [connectedMembership, defaultMember]);

  const onFormComplete = () => {
    refreshAll?.();
  };

  if (!connectedMembership) return null;

  return (
    <FormBuilder
      defaultValues={defaultValues}
      form={COMMON_FORMS.MANAGE_DELEGATE}
      customFields={CustomFields}
      onSuccess={onFormComplete}
    />
  );
};

export default ManageDelegate;
