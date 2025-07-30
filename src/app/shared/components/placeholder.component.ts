import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  template: `
    <div style="padding: 24px; text-align: center;">
      <h2>Coming Soon</h2>
      <p>This feature is under development.</p>
    </div>
  `
})
export class PlaceholderComponent {}