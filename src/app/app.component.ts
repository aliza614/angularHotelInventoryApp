
import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{//AfterViewInit{
  title = 'hotelinventoryapp';
  role='Admin';//='User' or 'Admin';

  @ViewChild('name', {static:true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText="Hilton Hotel";
  }

  // @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(){
  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms =50;
  // }
}
