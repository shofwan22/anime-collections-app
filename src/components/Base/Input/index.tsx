import { useState } from 'react';

import { styInputContainer } from './styles';

interface InputProps {
  value: string;
  placeholder?: string;
  onChangeValue?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const { value, placeholder, onChangeValue } = props;
  const [newValue, setNewValue] = useState(value);

  const handleChangeValue = (value: string) => {
    setNewValue(value);
    if (onChangeValue) {
      onChangeValue(value);
    }
  };

  return (
    <div className={styInputContainer}>
      <input
        type="text"
        value={newValue}
        placeholder={placeholder}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
