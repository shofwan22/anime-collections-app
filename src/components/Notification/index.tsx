import { cx } from '@emotion/css';

import { styNotifContainer, styTypeNotif, styShowNotif } from './styles';

import { useNotif } from '../../contexts/Notifications';

interface NotificationProps {
  type: string;
  message: string;
}

const Notification = (props: NotificationProps) => {
  const { type, message } = props;
  const { notif } = useNotif();

  let typeColor =
    type === 'success' ? '#28a745!important' : '#dc3545!important';

  return (
    <div
      className={cx(styNotifContainer, styTypeNotif(typeColor), {
        [styShowNotif]: notif,
      })}
    >
      {message}
    </div>
  );
};

export default Notification;
