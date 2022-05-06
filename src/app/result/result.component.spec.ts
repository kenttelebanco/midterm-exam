import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ResultComponent);
    component=fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.receive = 1;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  //ngOnchanges
  it('should check if compute() was called in ngOnChanges', () => {
    let spyChanges = spyOn(component, 'compute');
    fixture.detectChanges();
    expect(spyChanges).toHaveBeenCalledTimes(0);  
  });

  //compute
  it('should add result if switch case is "1"', () => {
    let first = component.receive=1;
    let second = component.receive=2;
    let op = component.receive = 1;

    component.compute();
    let result = first + second;
    fixture.detectChanges();
    expect(result).toBe(3); 
    expect(op).toBe(1); 
  });

  it('should add result if switch case is "2"', () => {
    let first = component.receive=2;
    let second = component.receive=2;
    let op = component.receive = 2;

    component.compute();
    let result = first - second;
    fixture.detectChanges();
    expect(result).toBe(0); 
    expect(op).toBe(2); 
  });

  it('should add result if switch case is "3"', () => {
    let first = component.receive=2;
    let second = component.receive=2;
    let op = component.receive = 3;

    component.compute();
    let result = first / second;
    fixture.detectChanges();
    expect(result).toBe(1); 
    expect(op).toBe(3); 
  });

  it('should add result if switch case is "4"', () => {
    let first = component.receive=2;
    let second = component.receive=2;
    let op = component.receive = 4;

    component.compute();
    let result = first * second;
    fixture.detectChanges();
    expect(result).toBe(4); 
    expect(op).toBe(4); 
  });
});
