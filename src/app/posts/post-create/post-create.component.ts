import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  post = {title: 'init', content: 'init'};
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    this.post = {title: this.enteredTitle, content: this.enteredContent};
    this.postCreated.emit(this.post);
  }

}
