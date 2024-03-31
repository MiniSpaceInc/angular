import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-redirect-after-usos-login',
  standalone: true,
  imports: [],
  template: '',
  styles: ''
})
export class RedirectAfterUsosLoginComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    console.log("Authenticating...");
    this.router.navigate([this.route.snapshot.queryParams['route']]).then();
  }
}
