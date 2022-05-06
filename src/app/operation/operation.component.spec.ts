import { compilePipeFromMetadata } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OperationComponent } from './operation.component';

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OperationComponent);
    component=fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return 1 on onButtonClick when "+" button is pressed/click', () => {

    let spyAdd = spyOn(component, 'onButtonClick').and.callThrough();
    spyOn(component.operation, 'emit');
    let add =fixture.debugElement.query(
      By.css('#addbtn')
    ).nativeElement;

    add.click();
    fixture.detectChanges();
    component.onButtonClick(1)
    expect(spyAdd).toHaveBeenCalled();
    expect(add.textContent).toContain('+');
    expect(component.operation.emit).toHaveBeenCalledWith(1);
  });

  it('should return 2 on onButtonClick when "-" button is pressed/click', () => {

    spyOn(component.operation, 'emit');
    let spySub = spyOn(component, 'onButtonClick').and.callThrough();
    let sub =fixture.debugElement.query(
      By.css('#subbtn')
    ).nativeElement;

    sub.click();
    fixture.detectChanges();
    component.onButtonClick(2)
    expect(spySub).toHaveBeenCalled();
    expect(sub.textContent).toContain('-');
    expect(component.operation.emit).toHaveBeenCalledWith(2);
  });

  it('should return 3 on onButtonClick when "/" button is pressed/click', () => {

    let spyDiv = spyOn(component, 'onButtonClick').and.callThrough();
    spyOn(component.operation, 'emit');
    let div =fixture.debugElement.query(
      By.css('#divbtn')
    ).nativeElement;

    div.click();
    fixture.detectChanges();
    component.onButtonClick(1)
    expect(spyDiv).toHaveBeenCalled();
    expect(div.textContent).toContain('/');
    expect(component.operation.emit).toHaveBeenCalledWith(3);
  });
  
  it('should return 4 on onButtonClick when "*" button is pressed/click', () => {

    let spyMul = spyOn(component, 'onButtonClick').and.callThrough();
    spyOn(component.operation, 'emit');
    let mul =fixture.debugElement.query(
      By.css('#mulbtn')
    ).nativeElement;

    mul.click();
    fixture.detectChanges();
    component.onButtonClick(1)
    expect(spyMul).toHaveBeenCalled();
    expect(mul.textContent).toContain('*');
    expect(component.operation.emit).toHaveBeenCalledWith(4);
  });

});
