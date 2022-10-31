import { useMemo } from 'react';

import { FormBuilder } from '@dh-test/form-builder';
import { useConnectedMembership, useDao } from '@dh-test/molochv3-context';
import { CustomFields } from '../legos/config';
import { COMMON_FORMS } from '../legos/form';
import { NETWORK_TOKEN_ETH_ADDRESS } from '@dh-test/common-utils';
import { sortTokensForRageQuit } from '../utils/general';

export function RageQuit() {
  const { dao, refreshAll } = useDao();
  const { connectedMembership } = useConnectedMembership();

  const defaultFields = useMemo(() => {
    if (connectedMembership && dao) {
      return {
        to: connectedMembership.memberAddress,
        tokens: sortTokensForRageQuit(
          dao.tokenBalances
            .filter((token) => Number(token.balance) > 0)
            .map((token) => token.tokenAddress || NETWORK_TOKEN_ETH_ADDRESS)
        ),
      };
    }
    return undefined;
  }, [connectedMembership, dao]);

  const onFormComplete = () => {
    refreshAll?.();
  };

  if (!dao || !connectedMembership) {
    return null;
  }

  return (
    <FormBuilder
      defaultValues={defaultFields}
      form={{ ...COMMON_FORMS.RAGEQUIT, log: true, devtool: true }}
      customFields={CustomFields}
      onSuccess={onFormComplete}
    />
  );
}

export default RageQuit;
