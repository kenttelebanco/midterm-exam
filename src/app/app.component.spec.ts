import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  //receiveFromInput
  it('should call receiveFromInput when it receives a value', () => {

    let spyGetNumber = spyOn(component, 'receiveFromInput');
    component.receiveFromInput(5);
    let input = fixture.debugElement.query(
      By.css('#number')
    ).nativeElement;

    input.received='5';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyGetNumber).toHaveBeenCalled();
  });

  //receiveOption
  it('should call receiveOperation when it receives a value', () => {

    let spyGetNumber = spyOn(component, 'receiveOperation');
    component.receiveOperation(5);
    let input = fixture.debugElement.query(
      By.css('#operation')
    ).nativeElement;

    input.operation='5';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyGetNumber).toHaveBeenCalled();
  });

  //sendValue
  it('should increment the sendValue by the amount provided', () => {
    component.count = 4;
    component.sendValue();
    expect(component.count).toEqual(5);
  });
});
