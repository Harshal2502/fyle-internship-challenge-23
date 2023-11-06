import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
    });
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an image element', () => {
    const imgElement: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
  });

  it('should contain an h2 element', () => {
    const h2Element: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2Element).toBeTruthy();
  });

  it('should contain paragraphs for bio, location, and blog', () => {
    const bioElement: HTMLElement = fixture.nativeElement.querySelector('.user-bio');
    const locationElement: HTMLElement = fixture.nativeElement.querySelector('.user-location');
    const blogElement: HTMLElement = fixture.nativeElement.querySelector('.user-blog');

    expect(bioElement).toBeTruthy();
    expect(locationElement).toBeTruthy();
    expect(blogElement).toBeTruthy();
  });

  it('should contain links in the blog paragraph', () => {
    const blogLink: HTMLAnchorElement = fixture.nativeElement.querySelector('.user-blog');
    expect(blogLink).toBeTruthy();
  });
});
