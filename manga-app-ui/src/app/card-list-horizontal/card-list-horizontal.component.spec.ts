import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListHorizontalComponent } from './card-list-horizontal.component';

describe('CardListHorizontalComponent', () => {
  let component: CardListHorizontalComponent;
  let fixture: ComponentFixture<CardListHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListHorizontalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
