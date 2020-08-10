import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import {Item} from  '../../models/Item';


@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  item: Item = {
    title: '',
    content: '',
  }

  constructor(private itemService: PostService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.item.title!='' ){

            
            
             
      this.itemService.addItem(this.item);
      
      
      this.item.title='';
      this.item.content='';
      
       
}  


  }

}
