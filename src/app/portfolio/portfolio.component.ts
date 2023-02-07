import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
portfolios : string[] =['web development','software eng', 'ux & ui' ,'js development', 'laravel development','php development']
}
