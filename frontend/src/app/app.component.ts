import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductcrudComponent } from './productcrud/productcrud.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductcrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-first-project';
}