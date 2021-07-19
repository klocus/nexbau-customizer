import { FieldType } from './FieldType.enum';
import { Option } from './Option.interface';

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  selected: number;
  options: Option[];
}
