import { useMemo } from 'react';

import { baalTimeToNow } from '@dh-test/common-utils';
import { ITransformedProposal } from '@dh-test/dao-data';
import { useHausConnect } from '@dh-test/connect';

import { HasVoted } from './HasVoted';
import { HasNotVoted } from './HasNotVoted';
import { ActionLifeCycleFns } from '../../utils/general';

export const VotingPeriod = ({
  lifeCycleFnsOverride,
  proposal,
}: {
  lifeCycleFnsOverride?: ActionLifeCycleFns;
  proposal: ITransformedProposal;
}) => {
  const { address } = useHausConnect();
  const readableTime = useMemo(() => {
    return baalTimeToNow(proposal.votingEnds);
  }, [proposal]);

  const userVoteData = useMemo(() => {
    if (address && proposal) {
      return proposal?.votes?.find(
        (voteData) =>
          voteData?.member?.memberAddress?.toLowerCase?.() ===
          address?.toLowerCase?.()
      );
    }
  }, [address, proposal]);

  return userVoteData ? (
    <HasVoted
      proposal={proposal}
      approved={userVoteData?.approved}
      readableTime={readableTime}
      userVoteBalance={userVoteData?.balance}
    />
  ) : (
    <HasNotVoted
      lifeCycleFnsOverride={lifeCycleFnsOverride}
      proposal={proposal}
      readableTime={readableTime}
    />
  );
};
