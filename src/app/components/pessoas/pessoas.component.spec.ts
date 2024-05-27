import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasComponent } from './pessoas.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PessoasComponent', () => {
  let component: PessoasComponent;
  let fixture: ComponentFixture<PessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('MyComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [component],
            imports: [ReactiveFormsModule],  // Also add it to 'imports' array
        })
        .compileComponents();
    }));
});

});
