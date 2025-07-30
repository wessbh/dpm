export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  visitDate: Date;
  type: RecordType;
  chiefComplaint: string;
  symptoms: string[];
  diagnosis: Diagnosis[];
  treatment: Treatment;
  prescriptions: Prescription[];
  labResults: LabResult[];
  documents: Document[];
  followUpDate?: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum RecordType {
  CONSULTATION = 'consultation',
  EMERGENCY = 'emergency',
  SURGERY = 'surgery',
  DIAGNOSTIC = 'diagnostic',
  FOLLOW_UP = 'follow_up'
}

export interface Diagnosis {
  code: string; // ICD-10 code
  description: string;
  type: DiagnosisType;
  notes?: string;
}

export enum DiagnosisType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DIFFERENTIAL = 'differential'
}

export interface Treatment {
  procedures: Procedure[];
  medications: Prescription[];
  instructions: string[];
  restrictions: string[];
}

export interface Procedure {
  code: string; // CPT code
  name: string;
  description: string;
  performedBy: string;
  performedAt: Date;
  notes?: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  refills: number;
  prescribedDate: Date;
  isActive: boolean;
}

export interface LabResult {
  id: string;
  testName: string;
  testCode: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: LabStatus;
  collectedDate: Date;
  resultDate: Date;
  technician: string;
  notes?: string;
}

export enum LabStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ABNORMAL = 'abnormal',
  CRITICAL = 'critical'
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
  size: number;
  uploadedDate: Date;
  uploadedBy: string;
}

export enum DocumentType {
  IMAGE = 'image',
  PDF = 'pdf',
  LAB_REPORT = 'lab_report',
  XRAY = 'xray',
  MRI = 'mri',
  CT_SCAN = 'ct_scan',
  OTHER = 'other'
}