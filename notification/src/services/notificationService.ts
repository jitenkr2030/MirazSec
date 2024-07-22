import { Notification } from '../models/notification';

export const sendNotification = async (userId: string, message: string) => {
  const notification = new Notification({ userId, message });
  await notification.save();
  return notification;
};
