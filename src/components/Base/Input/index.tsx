import { styInputContainer } from './styles';

interface InputProps {
  value: string;
  placeholder?: string;
  onChangeValue?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const { value, placeholder, onChangeValue } = props;

  const handleChangeValue = (value: string) => {
    if (onChangeValue) {
      onChangeValue(value);
    }
  };

  return (
    <div className={styInputContainer}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
