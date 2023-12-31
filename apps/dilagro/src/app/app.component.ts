import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

@Component({
  standalone: true,
  imports: [RouterModule,AdminComponent, LoginComponent, CommonModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dilagro';
  name = 'sisitha';
  frameworks = ['Angular', 'React', 'Vue'];

  onClick() {
    this.name = "Dhananjaya";
  }
}
