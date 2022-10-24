import { encodeValues } from '@dh-test/common-utils';
import {
  Button,
  Footer,
  FormLayout,
  H1,
  MainLayout,
  SingleColumnLayout,
  TimePicker,
  WrappedInput,
} from '@dh-test/ui';
import { FormProvider, useForm } from 'react-hook-form';

console.log(encodeValues([], []));
export function App() {
  const methods = useForm();

  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
