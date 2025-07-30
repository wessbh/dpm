import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected readonly title = signal('DPM - Doctor Patient Management');
  protected readonly isSidebarCollapsed = signal(false);
  protected readonly isUserMenuOpen = signal(false);

  toggleSidebar() {
    this.isSidebarCollapsed.update(collapsed => !collapsed);
  }

  toggleUserMenu() {
    this.isUserMenuOpen.update(open => !open);
  }

  logout() {
    this.isUserMenuOpen.set(false);
    // Implement logout logic here
    console.log('Logging out...');
  }
}