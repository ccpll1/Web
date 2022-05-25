import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Search } from './search';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  wordsearch;
  searchResult: Search[] = [];
  userSubscription: Subscription;
  p;

  ngOnInit(): void {
    this.userSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.wordsearch = params['q'];
        this.service.search(params['q'])
          .subscribe((data) => {
            this.searchResult.push(data);
            if (this.searchResult[this.searchResult.length - 1].queries.nextPage) {
              this.researchData(this.wordsearch, this.searchResult[this.searchResult.length - 1].queries.nextPage[0].startIndex);
            }
            console.log(this.searchResult);
          });
      });
  }

  researchData(searchString, start) {
    this.service
      .searchNextPage(searchString, start)
      .subscribe(result => {
        this.searchResult.push(result);
        if (this.searchResult[this.searchResult.length - 1].queries.nextPage) {
          this.researchData(this.wordsearch, this.searchResult[this.searchResult.length - 1].queries.nextPage[0].startIndex);
        } else {
          return;
        }
        console.log(this.searchResult);
      },
        err => console.log(err));
  }

  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
}
