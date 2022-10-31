import { encodeValues } from '@dh-test/common-utils';
import { HausLayout, useHausConnect } from '@dh-test/connect';
import { Link, MainLayout } from '@dh-test/ui';
import { LOCAL_ABI } from '@dh-test/abi';
import { FormBuilder } from '@dh-test/form-builder';
import { TXBuilder } from '@dh-test/tx-builder';
import { FORM } from '../assets/forms';
console.log(encodeValues([], []));

console.log(LOCAL_ABI);
export function App() {
  const { provider } = useHausConnect();

  return (
    <TXBuilder
      provider={provider}
      chainId="0x5"
      daoId="0x643e8e197de8760a23c64cf78bef7047084d5408"
      safeId="0xacdbe468400d3cb18ab796e85b91395f7fb5db09"
      appState={{}}
    >
      <HausLayout
        pathname="/"
        navLinks={[
          { label: 'NX', href: '/' },
          { label: "Ain't", href: '/aint' },
          { label: 'Shit', href: '/shit' },
        ]}
      >
        <MainLayout>
          <FormBuilder form={FORM.SIGNAL} targetNetwork="0x5" />
        </MainLayout>
      </HausLayout>
      <Link href="test">This is a link</Link>
    </TXBuilder>
  );
}

export default App;
