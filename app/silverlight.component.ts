import { Component } from '@angular/core';
import { OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

declare var Silverlight: any;

@Component({
  selector: 'silverlight',
  template: `<h1>SilverlightComponent</h1>
  <div id="placeHolder" style="widht:100%;height:100%"></div>
  `
})
export class SilverlightComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor(){
    // alert('1 Constructor #SilverlightComponent');
  }

ngOnChanges(){
  // alert ('2 ngOnChanges #SilverlightComponent');
}

ngOnInit(){
  // alert ('3 ngOnInit #SilverlightComponent');

   Silverlight.createObject(
            "silverlight/SilverlightApplication1.xap",
            document.getElementById('placeHolder'),
             "silverlightContent",  
            {
                width: "100%", height: "100%", background: "white", 
                version:"4.0.60310.0"
            },
            { onError: onSLError, onLoad: onSLLoad },
            "param1=value1,param2=value2", 
            "context" 
        );

function onSLError()
{
  // alert('Error');
}

function onSLLoad()
{
  // alert('Loaded');
}

}



ngDoCheck(){
  // alert ('4 ngDoCheck #SilverlightComponent');
}

ngAfterContentInit(){
  // alert ('5 ngAfterContentInit #SilverlightComponent');
}

ngAfterContentChecked(){
  // alert ('6 ngAfterContentChecked #SilverlightComponent');
}

ngAfterViewInit(){
  // alert ('7 ngAfterViewInit #SilverlightComponent');
}

ngAfterViewChecked(){
  // alert ('8 ngOnChanges #SilverlightComponent');
}

ngOnDestroy(){
  // alert ('9 ngOnDestroy #SilverlightComponent');
}
}
