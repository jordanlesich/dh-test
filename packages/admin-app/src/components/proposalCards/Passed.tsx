import React, { useMemo } from 'react';

import { ITransformedProposal } from '@dh-test/dao-data';
import { ActionTemplate, Verdict } from './ActionPrimitives';
import { formatShares, roundedPercentage } from '@dh-test/common-utils';
import { useHausConnect } from '@dh-test/connect';
import { VotingBar } from '../VotingBar';

export const Passed = ({ proposal }: { proposal: ITransformedProposal }) => {
  const { address } = useHausConnect();

  const userVoteData = useMemo(() => {
    if (address && proposal) {
      return proposal?.votes?.find(
        (voteData) =>
          voteData?.member?.memberAddress?.toLowerCase?.() ===
          address?.toLowerCase?.()
      );
    }
    return undefined;
  }, [address, proposal]);

  const percentYes = roundedPercentage(
    Number(proposal.yesBalance),
    Number(proposal.dao.totalShares)
  );

  const userVoteDisplay =
    userVoteData &&
    `You voted ${userVoteData.approved ? 'Yes' : 'No'} (${formatShares(
      userVoteData.balance
    )})`;

  return (
    <ActionTemplate
      proposal={proposal}
      statusDisplay="Proposal Passed"
      main={
        <>
          <VotingBar proposal={proposal} />
          <Verdict passed={true} appendText={` - ${percentYes}% Yes`} />
        </>
      }
      helperDisplay={userVoteDisplay}
    />
  );
};
