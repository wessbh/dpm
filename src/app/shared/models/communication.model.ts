export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string;
  content: string;
  type: MessageType;
  priority: MessagePriority;
  isRead: boolean;
  attachments: MessageAttachment[];
  createdAt: Date;
  readAt?: Date;
}

export enum MessageType {
  INTERNAL = 'internal',
  PATIENT = 'patient',
  APPOINTMENT_REMINDER = 'appointment_reminder',
  LAB_RESULT = 'lab_result',
  PRESCRIPTION = 'prescription',
  EMERGENCY = 'emergency'
}

export enum MessagePriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent'
}

export interface MessageAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  actionUrl?: string;
  createdAt: Date;
  readAt?: Date;
}

export enum NotificationType {
  APPOINTMENT = 'appointment',
  MESSAGE = 'message',
  LAB_RESULT = 'lab_result',
  PRESCRIPTION = 'prescription',
  SYSTEM = 'system',
  EMERGENCY = 'emergency'
}