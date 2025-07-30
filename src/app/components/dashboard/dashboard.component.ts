import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatisticCard {
  id: string;
  title: string;
  value: number;
  icon: string;
  color: 'primary' | 'success' | 'warning' | 'error';
  trend: {
    value: number;
    type: 'increase' | 'decrease';
    label: string;
  };
}

interface QuickAction {
  id: string;
  title: string;
  icon: string;
  color: 'primary' | 'secondary';
}

interface RecentActivity {
  id: string;
  type: 'patient' | 'appointment' | 'message';
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  protected readonly currentTime = signal(new Date());
  
  protected readonly statistics = signal<StatisticCard[]>([
    {
      id: 'patients',
      title: 'Total Patients',
      value: 1247,
      icon: 'people',
      color: 'primary',
      trend: { value: 12, type: 'increase', label: '+12% from last month' }
    },
    {
      id: 'appointments',
      title: "Today's Appointments",
      value: 6,
      icon: 'event',
      color: 'success',
      trend: { value: 3, type: 'increase', label: '3 upcoming' }
    },
    {
      id: 'tasks',
      title: 'Pending Tasks',
      value: 4,
      icon: 'assignment',
      color: 'warning',
      trend: { value: 2, type: 'increase', label: '2 overdue' }
    },
    {
      id: 'messages',
      title: 'Unread Messages',
      value: 3,
      icon: 'message',
      color: 'primary',
      trend: { value: 0, type: 'increase', label: 'All from today' }
    }
  ]);

  protected readonly quickActions = signal<QuickAction[]>([
    { id: 'add-patient', title: 'Add Patient', icon: 'person_add', color: 'primary' },
    { id: 'schedule', title: 'Schedule', icon: 'event_available', color: 'primary' },
    { id: 'records', title: 'Records', icon: 'folder_open', color: 'primary' },
    { id: 'message', title: 'Message', icon: 'message', color: 'primary' }
  ]);

  protected readonly recentActivities = signal<RecentActivity[]>([
    {
      id: '1',
      type: 'patient',
      title: 'New Patient Registered',
      description: 'Sarah Johnson completed registration',
      time: '17m ago',
      icon: 'person_add',
      color: 'var(--color-primary-600)'
    },
    {
      id: '2',
      type: 'appointment',
      title: 'Appointment Completed',
      description: 'Consultation with Dr. Smith finished',
      time: '1h ago',
      icon: 'event_available',
      color: 'var(--color-success)'
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message Received',
      description: 'Patient inquiry about test results',
      time: '2h ago',
      icon: 'message',
      color: 'var(--color-info)'
    }
  ]);

  protected readonly todaySchedule = signal([
    { id: '1', time: '09:00', patient: 'John Doe', type: 'Consultation', status: 'completed' },
    { id: '2', time: '10:30', patient: 'Jane Smith', type: 'Follow-up', status: 'in-progress' },
    { id: '3', time: '14:00', patient: 'Bob Wilson', type: 'Check-up', status: 'scheduled' },
    { id: '4', time: '15:30', patient: 'Alice Brown', type: 'Consultation', status: 'scheduled' }
  ]);

  protected readonly greeting = computed(() => {
    const hour = this.currentTime().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  });

  protected readonly appointmentsCount = computed(() => {
    return this.statistics().find(stat => stat.id === 'appointments')?.value || 0;
  });

  protected readonly pendingTasksCount = computed(() => {
    return this.statistics().find(stat => stat.id === 'tasks')?.value || 0;
  });

  constructor() {
    // Update time every minute
    setInterval(() => {
      this.currentTime.set(new Date());
    }, 60000);
  }

  onQuickAction(actionId: string) {
    console.log('Quick action clicked:', actionId);
    // Implement navigation or action logic here
  }

  onViewAllActivities() {
    console.log('View all activities clicked');
    // Implement navigation to activities page
  }

  getStatIcon(iconName: string): string {
    const iconMap: {[key: string]: string} = {
      'people': '👥',
      'event': '📅',
      'assignment': '📋',
      'message': '💬'
    };
    return iconMap[iconName] || '📊';
  }

  getActionIcon(iconName: string): string {
    const iconMap: {[key: string]: string} = {
      'person_add': '👤➕',
      'event_available': '📅✅',
      'folder_open': '📁',
      'message': '💬'
    };
    return iconMap[iconName] || '⚡';
  }

  getActivityIcon(iconName: string): string {
    const iconMap: {[key: string]: string} = {
      'person_add': '👤➕',
      'event_available': '📅✅',
      'message': '💬'
    };
    return iconMap[iconName] || '📝';
  }
}