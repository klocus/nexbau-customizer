import { ConditionItem } from './ConditionItem.interface';

export interface Condition {
  relation?: string;
  satisfied?: boolean;
  items: ConditionItem[];
}
