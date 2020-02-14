import React, { useState } from 'react';

const useSelect = (initialState, options) => {

  // state del custom hook
  const [state, updateState] = useState(initialState);

  const AxisSelect = () => (
    <select value={state}
            onChange={e => updateState(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );

  return [state, AxisSelect];
}

export default useSelect;