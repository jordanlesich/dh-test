import { useParams } from 'react-router-dom';
import { useHausConnect } from '@dh-test/connect';
import { DaoContextProvider } from '@dh-test/molochv3-context';
import Dao from './Dao';

export function DaoContainer() {
  const { daochain, daoid } = useParams();
  const { address } = useHausConnect();

  return (
    <DaoContextProvider
      address={address}
      daoid={daoid}
      daochain={daochain}
      graphApiKeys={{ '0x1': process.env['VITE_GRAPH_API_KEY_MAINNET'] }}
    >
      <Dao />
    </DaoContextProvider>
  );
}

export default Dao;
