import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAchieveComponent } from './card-achieve.component';

describe('CardAchieveComponent', () => {
  let component: CardAchieveComponent;
  let fixture: ComponentFixture<CardAchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
