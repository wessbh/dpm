import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h1>Appointments</h1>
      <p>Schedule and manage patient appointments</p>
    </div>
    <div class="page-content-placeholder">
      <div class="placeholder-card">
        <span>📅</span>
        <h3>Appointments Module</h3>
        <p>Appointment scheduling and management features will be implemented here</p>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; margin: 0; color: var(--color-gray-900); }
    .page-header p { color: var(--color-gray-600); margin: 0.5rem 0 0 0; }
    .page-content-placeholder { display: flex; justify-content: center; align-items: center; min-height: 400px; }
    .placeholder-card { text-align: center; padding: 3rem; background: white; border-radius: 1rem; box-shadow: var(--shadow-sm); }
    .placeholder-card span { font-size: 4rem; color: var(--color-success); margin-bottom: 1rem; }
    .placeholder-card h3 { margin: 1rem 0; color: var(--color-gray-900); }
    .placeholder-card p { color: var(--color-gray-600); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentsComponent {}