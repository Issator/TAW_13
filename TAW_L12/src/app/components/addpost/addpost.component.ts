import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  public credentials = {
    title: '',
    text: '',
    image: '',
  };

  public result$: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  sendPost(){
    this.service.addPost(this.credentials).subscribe(response => {
      this.result$ = response;
    });
  }

}
