import {Component, inject, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Event} from "../../model/Event";
import {ReactionType} from "../../model/Reactions";
import {Post} from "../../model/Post";
import {EVENT_SERVICE, POST_SERVICE} from "../../tokens";
import {ReactionsDto} from "../../model/dto/ReactionsDto";
import {ReactionsFactory} from "../../model/factory/ReactionsFactory";

@Component({
  selector: 'app-reactions',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './reactions.component.html',
  styleUrl: './reactions.component.scss'
})
export class ReactionsComponent implements OnInit {
  @Input() object!: Event | Post;

  eventService = inject(EVENT_SERVICE);
  postService = inject(POST_SERVICE);
  reactionsDto: ReactionsDto = inject(ReactionsFactory).createEmptyReactionsDto();

  ngOnInit() {
    this.reloadReactions();
  }

  setReaction(reaction: ReactionType | null):void {
    if(reaction === this.reactionsDto.userReaction) {
      reaction = null;
    }

    if(this.isEvent(this.object)) {
      this.eventService.setReaction(this.object.id, reaction).subscribe(() => this.reloadReactions());
    } else {
      this.postService.setReaction(this.object.id, reaction).subscribe(() => this.reloadReactions());
    }
  }

  private reloadReactions(): void {
    const setReactions = (data: ReactionsDto) => {
      this.reactionsDto = data;
      this.fillEmptyReactions();
    };

    if(this.isEvent(this.object)) {
      this.eventService.getReactions(this.object.id).subscribe(setReactions);
    } else {
      this.postService.getReactions(this.object.id).subscribe(setReactions);
    }
  }

  private fillEmptyReactions(): void {
    const possibleReactions = Object
      .values(ReactionType)
      .filter(v => isNaN(Number(v)));

    possibleReactions.forEach(reaction => {
      if(this.reactionsDto.reactions.find(reactions => reactions.type === reaction) === undefined) {
        this.reactionsDto.reactions.push({
          type: reaction as ReactionType,
          count: 0
        })
      }
    })

    this.reactionsDto.reactions.sort((a, b) => a.count > b.count ? -1 : 1);
  }

  private isEvent(object: Event | Post): object is Event {
    return (object as Event).organizingUnit !== undefined;
  }
}
