import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpceComponent } from './spce.component';

describe('SpceComponent', () => {
  let component: SpceComponent;
  let fixture: ComponentFixture<SpceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
