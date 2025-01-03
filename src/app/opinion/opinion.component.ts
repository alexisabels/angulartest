import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-opinion',
  imports: [UserComponent, CommentsComponent],
  templateUrl: './opinion.component.html',
  styleUrl: './opinion.component.css',
})
export class OpinionComponent {}
