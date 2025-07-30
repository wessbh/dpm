// Export all models
export * from './user.model';
export * from './patient.model';
export * from './appointment.model';
export * from './medical-record.model';
export * from './communication.model';

// Dashboard specific interfaces
export interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  pendingTasks: number;
  messagesUnread: number;
}

export interface RecentActivity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: Date;
  userId: string;
  patientId?: string;
}

export enum ActivityType {
  PATIENT_ADDED = 'patient_added',
  APPOINTMENT_SCHEDULED = 'appointment_scheduled',
  APPOINTMENT_COMPLETED = 'appointment_completed',
  MESSAGE_SENT = 'message_sent',
  LAB_RESULT_ADDED = 'lab_result_added',
  PRESCRIPTION_CREATED = 'prescription_created'
}

// API Response interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Search and filter interfaces
export interface SearchCriteria {
  query?: string;
  filters?: { [key: string]: any };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}