import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from 'react';

import Notification from '../../components/Notification';

import { NotifValue, NotifParams } from './types';

const Notif = createContext<NotifValue>({
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
    <Notif.Provider value={{ notif, showNotif }}>
      {children}
      <Notification type={type} message={message} />
    </Notif.Provider>
  );
};

const useNotif = () => {
  const context = useContext(Notif);
  if (context === undefined) {
    throw new Error('useNotif must be used within a NotifProvider');
  }
  return context;
};

export { NotifProvider, useNotif };
