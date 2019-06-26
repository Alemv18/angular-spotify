import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemResultComponent } from './single-item-result.component';

describe('SingleItemResultComponent', () => {
  let component: SingleItemResultComponent;
  let fixture: ComponentFixture<SingleItemResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
