import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
  // brackets for any item with attribute autoGrow
  selector: '[autoGrow]',
  host: {
    // parens here means we're binding the onFocus() method to the focus event
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {

  _el: ElementRef;
  // angular will automatically inject instances of ElementRef and Renderer into this class under the names 'el' and 'renderer' (dependency injection)
  constructor(el: ElementRef, private renderer: Renderer){
    // the above variable declaration of _el and this line do the same thing as adding 'private' as done with renderer
    this._el = el;
  }
  onFocus(){
    this.renderer.setElementStyle(this._el.nativeElement, 'width', '200');
  }
  onBlur(){
    this.renderer.setElementStyle(this._el.nativeElement, 'width', '120');
  }
}
