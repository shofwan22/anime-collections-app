import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from 'react';

import Notification from '../../components/Notification';

import { NotifValue, NotifParams } from './types';

export const NotifContext = createContext<NotifValue>({
  notif: false,
  showNotif: () => {},
});

const NotifProvider = ({ children }: PropsWithChildren) => {
  const [notif, setNotif] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const showNotif = (params: NotifParams) => {
    const { message, type } = params;

    setMessage(message);
    setType(type);
    setNotif(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotif(false);
    }, 3000);
  }, [notif]);

  return (
    <NotifContext.Provider value={{ notif, showNotif }}>
      {children}
      <Notification type={type} message={message} />
    </NotifContext.Provider>
  );
};

const useNotif = () => {
  const context = useContext(NotifContext);
  if (context === undefined) {
    throw new Error('useNotif must be used within a NotifProvider');
  }
  return context;
};

export { NotifProvider, useNotif };
