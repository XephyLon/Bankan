import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.sass']
})
export class ShellComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpoint.observe([Breakpoints.Handset])
  .pipe(
    map(res => res.matches),
    shareReplay()
  )

  constructor(private breakpoint: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
