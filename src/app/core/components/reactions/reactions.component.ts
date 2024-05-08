import {Component, inject, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Event} from "../../model/Event";
import {ReactionType, ReactionTypeNameMap} from "../../model/Reactions";
import {Post} from "../../model/Post";
import {EVENT_SERVICE, POST_SERVICE} from "../../tokens";

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

  ngOnInit() {
    const possibleReactions = Object
      .values(ReactionType)
      .filter(v => !isNaN(Number(v)));

    possibleReactions.forEach(reaction => {
      if(this.object.reactionsList.find(reactions => reactions.type === reaction) === undefined) {
        this.object.reactionsList.push({
          type: reaction as ReactionType,
          count: 0
        })
      }
    })

    this.object.reactionsList.sort((a, b) => a.count > b.count ? -1 : 1);
  }

  setReaction(reaction: ReactionType | null):void {
    if(reaction === this.object.userReaction) {
      reaction = null;
    }

    if(this.isEvent(this.object)) {
      this.eventService.setReaction(this.object.id, reaction).subscribe();
    } else {
      this.postService.setReaction(this.object.id, reaction).subscribe();
    }

  }

  private isEvent(object: Event | Post): object is Event {
    return (object as Event).organizingUnit !== undefined;
  }

  protected readonly ReactionTypeNameMap = ReactionTypeNameMap;
}
