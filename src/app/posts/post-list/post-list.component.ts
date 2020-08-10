import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {AuthService} from '../../core/auth.service';

import {Item} from  '../../models/Item';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  items:Item[];
  editState:boolean;
  itemToEdit:Item;
 

  constructor(private itemService: PostService, public auth: AuthService) {

    this.editState=false;
    
   }

  ngOnInit(): void {

    this.itemService.getItems().subscribe(items=>{
      this.items=items.sort((a,b) => {
        
       var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
       if (titleA<titleB)
         return -1
         if (titleA>titleB)
         return 1 
         return 0 
       
     })
     
 });
  }
  deleteItem(item){

    this.itemService.deleteItem(item);
  }

  onClick(event,item:Item){

    this.editState=!this.editState;
    this.itemToEdit=item;
       


  }

}
