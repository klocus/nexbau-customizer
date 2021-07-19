import { Field } from './Field.interface';

export interface Item {
  id: number;
  name: string;
  label: string;
  fields: Field[];
}
