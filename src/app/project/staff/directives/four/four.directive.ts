import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appFour]",
})
export class FourDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    // this.renderer2.addClass(this.elementRef.nativeElement, "abc");
    // this.renderer2.addClass(this.elementRef.nativeElement, "xyz");
    this.elementRef.nativeElement.classList.add('abc', 'xml', 'xyz')
    // console.log(this.elementRef.nativeElement)
  }
}
