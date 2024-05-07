import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Event} from "../../model/Event";
import {ReactionTypeNameMap} from "../../model/Reactions";
import {Post} from "../../model/Post";

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

  ngOnInit() {
    this.object.reactionsList.sort((a, b) => a.count > b.count ? -1 : 1);
  }

  protected readonly ReactionTypeNameMap = ReactionTypeNameMap;
}
