import { render, screen } from '@testing-library/react';
import { NotifContext } from '../../../contexts/Notifications';
import Notification from '../';

test('renders notification with proper styling and message', () => {
  render(
    <NotifContext.Provider value={{ notif: true, showNotif: jest.fn() }}>
      <Notification type="success" message="Test notification" />
    </NotifContext.Provider>
  );

  // Check if the message is rendered
  expect(screen.getByText('Test notification')).toBeInTheDocument();

  // Check for proper styling using data-testid
  const notification = screen.getByTestId('notifications');
  expect(notification).toHaveStyle(`
    background-color: #28a745;
  `);
});
