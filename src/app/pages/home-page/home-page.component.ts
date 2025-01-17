import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { ProcessSectionComponent } from '../../components/process-section/process-section.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    ToolbarComponent,
    BenefitsComponent,
    ProcessSectionComponent,
    FaqSectionComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
