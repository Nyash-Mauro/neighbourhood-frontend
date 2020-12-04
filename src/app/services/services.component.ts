import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = [
    {
      "serviceId":2,
      "serviceName":'Spa',
      "description":'fun',
      "imageUrl":"src/assets/img/spa.jpg"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
