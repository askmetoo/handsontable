import * as C from '../../../i18n/constants';
import { registerCondition } from '../conditionRegisterer';

export const CONDITION_NAME = 'gt';

export function condition(dataRow, [value]) {
  let conditionValue = value;

  if (dataRow.meta.type === 'numeric') {
    conditionValue = parseFloat(conditionValue, 10);
  }

  return dataRow.value > conditionValue;
}

registerCondition(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_GREATER_THAN,
  inputsCount: 1,
  showOperators: true
});
