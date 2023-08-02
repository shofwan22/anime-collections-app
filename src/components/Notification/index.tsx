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

  let typeColor = type === 'success' ? '#28a745' : '#dc3545';

  return (
    <div
      className={cx(styNotifContainer, styTypeNotif(typeColor), {
        [styShowNotif]: notif,
      })}
      data-testid="notifications"
    >
      {message}
    </div>
  );
};

export default Notification;
