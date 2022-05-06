import { Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberInputComponent);
    component=fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

   //FOR THE FIRST NUMBER IF IT EXISTS
   it('should check if the labels for the "first number" exists', () => {
    let exist = fixture.debugElement.query(
      By.css('#firstnumber')
    ).nativeElement;

    fixture.detectChanges();
    expect(exist.textContent).toContain('First Number');

  });

  //FOR THE SECOND NUMBER IF IT EXISTS
  it('should check if the labels for the "second number" exists', () => {
    let exist = fixture.debugElement.query(
      By.css('#secondnumber')
    ).nativeElement;

    fixture.detectChanges();
    expect(exist.textContent).toContain('Second Number');
  });

  //FOR NUMBERINPUT

  it('should call numberInput when number is input in firstNumber field', () => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#firstInput')
    ).nativeElement;

    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  });

  it('should call numberInput when number is input in secondNumber field', () => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(
      By.css('#secondInput')
    ).nativeElement;

    input.value = '2';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  });

});
