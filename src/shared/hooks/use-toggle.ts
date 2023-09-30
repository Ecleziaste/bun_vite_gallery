import { useState } from 'react';

export type UseToggleType = {
  value: boolean;
  toggleValue: (value?: boolean) => void;
};
export function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(changedValue?: boolean) {
    setValue((currentValue) => (changedValue ? changedValue : !currentValue));
  }

  return { value, toggleValue };
}
