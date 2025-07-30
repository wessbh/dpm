export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  startTime: string;
  endTime: string;
  type: AppointmentType;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  location: string;
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
  createdAt: Date;
  updatedAt: Date;
}

export enum AppointmentType {
  CONSULTATION = 'consultation',
  FOLLOW_UP = 'follow_up',
  EMERGENCY = 'emergency',
  SURGERY = 'surgery',
  DIAGNOSTIC = 'diagnostic',
  THERAPY = 'therapy'
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  CONFIRMED = 'confirmed',
  CHECKED_IN = 'checked_in',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show'
}

export interface RecurringPattern {
  frequency: RecurringFrequency;
  interval: number;
  endDate?: Date;
  occurrences?: number;
}

export enum RecurringFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export interface TimeSlot {
  start: string;
  end: string;
  isAvailable: boolean;
  appointmentId?: string;
}