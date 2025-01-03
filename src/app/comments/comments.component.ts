import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img
      src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*ZjYSm_q36J4KChdn"
      alt=""
    />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente magnam
      culpa nostrum deleniti nesciunt tenetur suscipit repudiandae eos libero,
      adipisci cum soluta non. Esse asperiores quisquam doloremque hic
      distinctio necessitatibus.
    </p>
  `,
  styles: ` img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
