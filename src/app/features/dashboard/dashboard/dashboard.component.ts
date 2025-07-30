import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User, DashboardStats, RecentActivity, ActivityType } from '../../../shared/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  currentUser$: Observable<User | null>;
  dashboardStats: DashboardStats;
  recentActivities: RecentActivity[];
  
  quickActions = [
    { icon: 'person_add', label: 'Add Patient', route: '/patients/new', color: 'primary' },
    { icon: 'event', label: 'Schedule Appointment', route: '/appointments/new', color: 'accent' },
    { icon: 'folder_shared', label: 'View Records', route: '/medical-records', color: 'primary' },
    { icon: 'message', label: 'Send Message', route: '/communication', color: 'accent' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser$ = this.authService.currentUser$;
    
    // Mock dashboard stats
    this.dashboardStats = {
      totalPatients: 1247,
      todayAppointments: 18,
      pendingTasks: 7,
      messagesUnread: 3
    };

    // Mock recent activities
    this.recentActivities = [
      {
        id: '1',
        type: ActivityType.PATIENT_ADDED,
        title: 'New Patient Registered',
        description: 'Sarah Johnson has been added to the system',
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        userId: '1',
        patientId: 'p1'
      },
      {
        id: '2',
        type: ActivityType.APPOINTMENT_COMPLETED,
        title: 'Appointment Completed',
        description: 'Dr. Smith completed consultation with Mike Davis',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        userId: '2'
      },
      {
        id: '3',
        type: ActivityType.LAB_RESULT_ADDED,
        title: 'Lab Results Available',
        description: 'Blood test results for Emily Brown are ready',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        userId: '2'
      },
      {
        id: '4',
        type: ActivityType.MESSAGE_SENT,
        title: 'Message Sent',
        description: 'Appointment reminder sent to John Smith',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        userId: '3'
      }
    ];
  }

  ngOnInit(): void {}

  onQuickAction(action: any): void {
    this.router.navigate([action.route]);
  }

  getActivityIcon(type: ActivityType): string {
    switch (type) {
      case ActivityType.PATIENT_ADDED:
        return 'person_add';
      case ActivityType.APPOINTMENT_SCHEDULED:
        return 'event';
      case ActivityType.APPOINTMENT_COMPLETED:
        return 'event_available';
      case ActivityType.MESSAGE_SENT:
        return 'message';
      case ActivityType.LAB_RESULT_ADDED:
        return 'science';
      case ActivityType.PRESCRIPTION_CREATED:
        return 'medication';
      default:
        return 'info';
    }
  }

  getActivityColor(type: ActivityType): string {
    switch (type) {
      case ActivityType.PATIENT_ADDED:
        return 'primary';
      case ActivityType.APPOINTMENT_COMPLETED:
        return 'accent';
      case ActivityType.LAB_RESULT_ADDED:
        return 'warn';
      default:
        return '';
    }
  }

  getTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  }
}
