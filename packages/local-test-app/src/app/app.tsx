import { Ui } from '@dh-test/ui';
import NxWelcome from './nx-welcome';
import { encodeValues } from '@dh-test/common-utils';

console.log(encodeValues([], []));
export function App() {
  return (
    <>
      <Ui />
      <NxWelcome title="local-test-app" />
      <div />
    </>
  );
}

export default App;
