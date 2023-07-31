import { styButtonContainer } from './styles';

interface ButtonProps {
  label?: string;
  iconRight?: string;
  bgColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, iconRight, bgColor, disabled, onClick } = props;
  const backgroundColor = bgColor || '#2b2d42';
  const disabledButton = disabled || false;

  return (
    <button
      className={`${styButtonContainer(backgroundColor)} ${
        disabledButton ? 'button-disabled' : ''
      }`}
      onClick={onClick}
      disabled={disabledButton}
    >
      {iconRight && (
        <i className={`${iconRight} button-icon`} aria-hidden="true"></i>
      )}
      {label}
    </button>
  );
};

export default Button;
