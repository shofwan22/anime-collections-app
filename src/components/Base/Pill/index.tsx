import { styPillContainer } from './styles';

interface PillProps {
  name: string;
}

const Pill = (props: PillProps) => {
  return <div className={styPillContainer}>{props.name}</div>;
};

export default Pill;
