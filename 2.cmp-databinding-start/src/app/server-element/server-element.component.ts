import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //None, Native (uses shadowDOM)
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  // @Input() server: { type: 'server' | 'blueprint', name: string, content: string};
  @Input('server') element: {
    type: 'server' | 'blueprint',
    name: string,
    content: string,
  };
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { }

  ngOnChanges(change: SimpleChanges) {}

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.paragraph.nativeElement.textContent)
  }
}
