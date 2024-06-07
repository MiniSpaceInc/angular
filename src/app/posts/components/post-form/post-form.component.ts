import {Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {POST_SERVICE} from "../../../core/tokens";
import {MessageService} from "primeng/api";
import {PostFactory} from "../../../core/model/factory/PostFactory";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CalendarModule
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  @Input() eventId!: number;
  @Output() postCreated = new EventEmitter();
  @ViewChild('richText') richText!: ElementRef;
  private postService = inject(POST_SERVICE);
  private messageService = inject(MessageService);
  private postFactory = inject(PostFactory);

  createPost(): void {
    const createPostDto =
      this.postFactory.getCreatePostDto(this.eventId, this.richText.nativeElement.innerHTML);

    this.postService.addNewPost(createPostDto).subscribe({
      error: () => this.messageService.add({
        severity: 'error',
        summary: 'Błąd',
        detail: 'Wystąpił nieoczekiwany błąd'
      }),
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Pomyślnie dodano nowy post'
        });
        this.postCreated.emit();
      }
    })
  }
}
