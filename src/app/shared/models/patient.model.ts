export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: Gender;
  address: Address;
  emergencyContact: EmergencyContact;
  insurance: Insurance;
  medicalHistory: MedicalHistory;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say'
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  groupNumber?: string;
  expiryDate: Date;
}

export interface MedicalHistory {
  allergies: string[];
  medications: Medication[];
  conditions: MedicalCondition[];
  surgeries: Surgery[];
  familyHistory: string[];
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  prescribedBy: string;
}

export interface MedicalCondition {
  name: string;
  diagnosedDate: Date;
  status: ConditionStatus;
  notes?: string;
}

export enum ConditionStatus {
  ACTIVE = 'active',
  RESOLVED = 'resolved',
  MANAGED = 'managed'
}

export interface Surgery {
  name: string;
  date: Date;
  surgeon: string;
  hospital: string;
  notes?: string;
}