import NxWelcome from './nx-welcome';
import { encodeValues } from '@dh-test/common-utils';

console.log(encodeValues([], []));
export function App() {
  return (
    <>
      <NxWelcome title="local-test-app" />
      <div />
    </>
  );
}

export default App;
