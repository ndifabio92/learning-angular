import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
})
class AboutPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi About Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'About Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Mundo,Fernando,Herrera,Curso,Angular,PRO',
    });
  }
}

export default AboutPage;
