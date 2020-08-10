import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostService } from './post.service';


@NgModule({
  declarations: [],
  providers:[PostService],
  imports: [SharedModule]
})
export class PostsModule { }
