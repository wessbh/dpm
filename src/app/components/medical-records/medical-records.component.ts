import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <h1>Medical Records</h1>
      <p>Access and manage patient medical records</p>
    </div>
    <div class="page-content-placeholder">
      <div class="placeholder-card">
        <span>📁</span>
        <h3>Medical Records Module</h3>
        <p>Medical records management features will be implemented here</p>
      </div>
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 2rem; }
    .page-header h1 { font-size: 2rem; margin: 0; color: var(--color-gray-900); }
    .page-header p { color: var(--color-gray-600); margin: 0.5rem 0 0 0; }
    .page-content-placeholder { display: flex; justify-content: center; align-items: center; min-height: 400px; }
    .placeholder-card { text-align: center; padding: 3rem; background: white; border-radius: 1rem; box-shadow: var(--shadow-sm); }
    .placeholder-card span { font-size: 4rem; color: var(--color-warning); margin-bottom: 1rem; }
    .placeholder-card h3 { margin: 1rem 0; color: var(--color-gray-900); }
    .placeholder-card p { color: var(--color-gray-600); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicalRecordsComponent {}