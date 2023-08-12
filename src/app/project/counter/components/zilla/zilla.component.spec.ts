import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZillaComponent } from './zilla.component';

describe('ZillaComponent', () => {
  let component: ZillaComponent;
  let fixture: ComponentFixture<ZillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZillaComponent]
    });
    fixture = TestBed.createComponent(ZillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
