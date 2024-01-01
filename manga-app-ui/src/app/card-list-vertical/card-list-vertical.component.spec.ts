import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListVerticalComponent } from './card-list-vertical.component';

describe('CardListVerticalComponent', () => {
  let component: CardListVerticalComponent;
  let fixture: ComponentFixture<CardListVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
