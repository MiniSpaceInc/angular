import { Component, Input } from '@angular/core';
import { Comment } from '../core/model/Comment';
import { NgFor } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    FieldsetModule,
    AvatarModule,
    PanelModule,
    ButtonModule,
    CardModule,
    InputTextModule,

  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comments!: Comment[];
  content: string = '';
}
