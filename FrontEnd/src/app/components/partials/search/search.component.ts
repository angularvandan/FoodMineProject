import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm = '';
  term$ = new BehaviorSubject<string>("");
  searchTermSubscription: Subscription | undefined;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });

  }
  search(term: string) {
    this.term$.next(term);

    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }

    this.searchTermSubscription = this.term$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((response: any) => response)
    ).subscribe((filterTerm: any) => {
      // console.log(data);
      if (filterTerm) {
        this.router.navigateByUrl('/search/' + filterTerm);
      }
      else {
        this.router.navigateByUrl('/search/');
      }
    })
  }
}
