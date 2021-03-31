import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstudentdataComponent } from './searchstudentdata.component';

describe('SearchstudentdataComponent', () => {
  let component: SearchstudentdataComponent;
  let fixture: ComponentFixture<SearchstudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
