import { Component } from '@angular/core';
import { OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'html',
  template: '<h1>HtmlComponent</h1>'
})
export class HtmlComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor(){
    // alert('1 Constructor #HtmlComponent');
  }

ngOnChanges(){
  // alert ('2 ngOnChanges #HtmlComponent');
}

ngOnInit(){
  // alert ('3 ngOnInit #HtmlComponent');
}

ngDoCheck(){
  // alert ('4 ngDoCheck #HtmlComponent');
}

ngAfterContentInit(){
  // alert ('5 ngAfterContentInit #HtmlComponent');
}

ngAfterContentChecked(){
  // alert ('6 ngAfterContentChecked #HtmlComponent');
}

ngAfterViewInit(){
  // alert ('7 ngAfterViewInit #HtmlComponent');
}

ngAfterViewChecked(){
  // alert ('8 ngOnChanges #HtmlComponent');
}

ngOnDestroy(){
  // alert ('9 ngOnDestroy #HtmlComponent');
}
}