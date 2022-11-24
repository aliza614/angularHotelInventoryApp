import { createViewChild } from '@angular/compiler/src/core';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';
  role='Admin';//='User' or 'Admin';

  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngOnInit(){
    // resolver: ComponentFactoryResolver=new ;
    // const factory=this.resolver.resolveComponentFactory(RoomsComponent);


    // const componentRef =this.vcr.createComponent<RoomsComponent>(factory);//=
    const a=this.vcr.createComponent(RoomsComponent);
  }
}
