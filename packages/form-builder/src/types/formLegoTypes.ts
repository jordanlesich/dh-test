import { FieldLegoBase, FormLegoBase, LookupType } from '@dh-test/common-utils';
import { CoreFieldLookup } from '../components/CoreFieldLookup';

export type CoreFields = typeof CoreFieldLookup;

export type FieldLego<Lookup extends LookupType = CoreFields> =
  FieldLegoBase<Lookup>;
export type FormLego<Lookup extends LookupType = CoreFields> =
  FormLegoBase<Lookup>;
