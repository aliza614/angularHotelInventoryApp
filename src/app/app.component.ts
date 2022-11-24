
import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';
  role='Admin';//='User' or 'Admin';

  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(){
    const componentRef=this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms =50;
  }
}
