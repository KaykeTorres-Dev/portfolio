import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnChanges {
  constructor(){}

  ngOnChanges(): void {
    // debugger
    // let menuIcon = document.getElementById('menu-icon') as HTMLElement;
    // let navbar = document.getElementById('.navbar') as HTMLElement;

    // menuIcon.onclick = () => {
    //     menuIcon.classList.toggle('bx-x');
    //     navbar.classList.toggle('active');
    // };


  }
}
