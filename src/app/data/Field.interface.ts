import { FieldType } from './FieldType.enum';
import { Option } from './Option.interface';
import { Condition } from './Condition.interface';

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  selected: number;
  condition?: Condition;
  options: Option[];
}
