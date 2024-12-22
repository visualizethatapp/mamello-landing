import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    ToolbarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
