import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) { }
  
  doSearch(keyword: string) {
    console.log(`value=${keyword}`);
    this.router.navigateByUrl(`/search/${keyword}`);
  
  }
  


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


