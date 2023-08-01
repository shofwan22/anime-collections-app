export interface NotifParams {
  message: string;
  type: string;
}

export interface NotifValue {
  notif: boolean;
  showNotif: (params: NotifParams) => void;
}
