// import { Directive, Input, EventEmitter, Inject, Output, ElementRef, HostListener } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

// @Directive({
//   selector: '[appScrollspy]'
// })
// export class ScrollspyDirective {

//   @Input() public spiedTags = [];
//   @Output() public sectionChange = new EventEmitter<string>();
//   private currentSection: string;

//   // tslint:disable-next-line: variable-name
//   constructor(private _el: ElementRef, @Inject(DOCUMENT) private document: Document, ) { }

//   @HostListener('window:scroll', ['$event'])
//   /**
//    * Window scroll method
//    */
//   onScroll(event: any) {
//     let currentSection: string;
//     const children = this._el.nativeElement.querySelectorAll('section');
//     const scrollTop = this.document.documentElement.scrollTop;
//     const parentOffset = this.document.documentElement.offsetTop;

//     // tslint:disable-next-line: prefer-for-of
//     for (let i = 0; i < children.length; i++) {
//       const element = children[i];
//       if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
//         if ((element.offsetTop - parentOffset) <= scrollTop) {
//           currentSection = element.id;
//         }
//       }
//     }
//     if (currentSection !== this.currentSection) {
//       this.currentSection = currentSection;
//       this.sectionChange.emit(this.currentSection);
//     }
//   }
// }

import { Directive, Input, EventEmitter, Inject, Output, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Directive({
  selector: '[appScrollspy]'
})
export class ScrollspyDirective {
  @Input() public spiedTags: string[] = [];;
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string | undefined;
  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef, @Inject(DOCUMENT) private document: Document,) { }
  @HostListener('window:scroll', ['$event'])
  /**
   * Window scroll method
   */

  onScroll(event: Event): void {
    let mostVisibleSection: string | null = null;
    const viewportHeight = window.innerHeight;

    for (const tagName of this.spiedTags) {
      const elements = this.document.querySelectorAll(tagName);
      for (const element of Array.from(elements)) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = elementTop + element.clientHeight;
        const elementHeight = element.clientHeight;

        // Check if most of the section is visible
        if (elementTop >= -elementHeight / 2 && elementBottom <= viewportHeight + elementHeight / 2) {
          mostVisibleSection = element.getAttribute('id');
        }
      }
    }

    if (mostVisibleSection !== this.currentSection) {
      this.currentSection = mostVisibleSection as string | undefined;
      this.sectionChange.emit(this.currentSection);
    }
  }
}





