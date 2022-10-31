import { LOCAL_ABI } from '@dh-test/abi';
import { ContractLego, CONTRACTS } from '@dh-test/common-utils';

const BaalSummonerContract: ContractLego = {
  contractName: 'BaalSummoner',
  type: 'static',
  abi: LOCAL_ABI.BAAL_SUMMONER,
  targetAddress: CONTRACTS.V3_FACTORY,
};

export const SummonTX = {
  id: 'SummonTX',
  contract: BaalSummonerContract,
  method: 'summonBaalAndSafe',
};
