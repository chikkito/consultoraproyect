import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  apiService: ApiService;
  array: any;

  constructor(apiService: ApiService, private breakpointObserver: BreakpointObserver) {
    this.apiService = apiService;
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }

  }

  ngOnInit(): void {

  }

  showInfo() {
    this.apiService.findAll().subscribe(data => {
      this.array = data;
      console.log(this.array);
    });
    

  }

}
