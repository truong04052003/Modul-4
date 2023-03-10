import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Xin chào các bạn';
  books:any[] = ['van','su','dia'];

  appHandleClick( $event:any){
    alert('appHandleClick' + $event);
  }
}
