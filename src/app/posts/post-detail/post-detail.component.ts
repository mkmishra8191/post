import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PostService } from '../post.service'
import {Item} from  '../../models/Item';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})



export class PostDetailComponent implements OnInit {

  
  item: Item = {
    title: '',
    content: '',
  }
    
  itemsL:Item[];
  itemsC:Item[];

 items:Item[];
  
  
  
  
  
  
  
  constructor(
    private route: ActivatedRoute,
    
    private itemService: PostService
) 
{ }

  ngOnInit(): void {
    this.getPost()
  }
  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.itemService.getPostData(id).subscribe(item => (this.item = item))
  }
  onUpdate(item:Item){
    
    if(this.item.title!='' ){

            
            
      this.route.snapshot.paramMap.get('id')     
      this.itemService.updateItem(item);
      }  


  }



}
