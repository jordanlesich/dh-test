import { encodeValues } from '@dh-test/common-utils';
import { HausLayout } from '@dh-test/connect';
import {
  Button,
  FormLayout,
  H1,
  MainLayout,
  SingleColumnLayout,
  TimePicker,
  WrappedInput,
} from '@dh-test/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { LOCAL_ABI } from '@dh-test/abi';
console.log(encodeValues([], []));

console.log(LOCAL_ABI);
export function App() {
  const methods = useForm();

  return (
    <HausLayout pathname="/">
      <MainLayout>
        <SingleColumnLayout>
          <H1>Test</H1>
          <Button>Test</Button>
          <FormProvider {...methods}>
            <FormLayout title="Test This form">
              <WrappedInput id="test" full />
              <TimePicker id="time" full />
            </FormLayout>
          </FormProvider>
        </SingleColumnLayout>
      </MainLayout>
    </HausLayout>
  );
}

export default App;
