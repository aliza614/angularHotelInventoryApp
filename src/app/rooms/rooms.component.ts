import { Component, DoCheck, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck {

  hotelName= 'Hilton Hotel';
  numberOfRooms=10;
  hideRooms=false;

  selectedRoom!: RoomList;

  rooms: Rooms={
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList:RoomList[]=[];
  title='Room List';
   
   constructor() { }

  // ngDoCheck(): void {
  //   console.log('on changes is called');
  // }

  ngOnInit(): void {
    this.roomList =[
      {roomNumber: 1,
       roomType: 'Deluxe Room',
       amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
       price: 500,
       photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=',
       checkinTime: new Date('11-Nov-2021'),
       checkoutTime: new Date('12-Nov-2021'),
       rating:5,
     },
     {roomNumber: 2,
       roomType: 'Deluxe Room',
       amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
       price: 1000,
       photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=',
       checkinTime: new Date('11-Nov-2021'),
       checkoutTime: new Date('12-Nov-2021'),
       rating: 3.4,
     },
     { roomNumber: 3,
       roomType: 'Private Suite',
     amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
     price: 15000,
     photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=',
     checkinTime: new Date('11-Nov-2021'),
     checkoutTime: new Date('12-Nov-2021'),
     rating: 2.6,
   },
     ]
   
  }

  toggle(){
    this.hideRooms= !this.hideRooms;
    this.title='Rooms List'

  }

  selectRoom(room: RoomList){
    this.selectedRoom=room;
  }
  
  addRoom() {
    const room: RoomList={
      roomNumber:4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    //this.roomList.push(room);
    this.roomList=[...this.roomList, room]
  }

}
