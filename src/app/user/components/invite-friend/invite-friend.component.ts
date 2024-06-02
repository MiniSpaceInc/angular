import {Component, inject} from '@angular/core';
import {CardModule} from "primeng/card";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {FRIEND_SERVICE} from "../../../core/tokens";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-invite-friend',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule
  ],
  templateUrl: './invite-friend.component.html',
  styleUrl: './invite-friend.component.scss'
})
export class InviteFriendComponent {
  private friendService = inject(FRIEND_SERVICE);
  private messageService = inject(MessageService);
  inviteFriendForm = this.createForm();

  inviteToFriends(): void {
    const usosId = this.inviteFriendForm.value.usosId;
    if (usosId!.length === 0) {
      return;
    }

    this.friendService.inviteFriend(this.inviteFriendForm.value.usosId as string).subscribe({
        error: () => this.messageService.add({
          severity: 'error',
          summary: 'Błąd',
          detail: 'Nie odnaleziono użytkownika o podanym id'
        }),
        complete: () => this.messageService.add({
          severity: 'success',
          summary: 'Sukces',
          detail: 'Pomyślnie wysłano zaproszenie do znajomych'
        })
      }
    );
  }

  createForm() {
    const _ = inject(FormBuilder);

    return _.group({
      usosId: ''
    })
  }
}
