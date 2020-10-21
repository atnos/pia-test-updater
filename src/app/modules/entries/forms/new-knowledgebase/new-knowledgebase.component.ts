import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KnowledgeBase } from 'src/app/models/knowledgeBase.model';
import { KnowledgesService } from 'src/app/services/knowledges.service';

@Component({
  selector: 'app-new-knowledgebase',
  templateUrl: './new-knowledgebase.component.html',
  styleUrls: ['./new-knowledgebase.component.scss']
})
export class NewKnowledgebaseComponent implements OnInit {
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  knowledgeBaseForm: FormGroup;

  constructor(
    private router: Router,
    private knowledgesService: KnowledgesService) { }

  ngOnInit(): void {
    this.knowledgeBaseForm = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      contributors: new FormControl()
    });
  }

  onSubmit(): void {
    const kb = new KnowledgeBase();
    kb.name = this.knowledgeBaseForm.value.name;
    kb.author = this.knowledgeBaseForm.value.author;
    kb.contributors = this.knowledgeBaseForm.value.contributors;
    kb.create()
      .then((result: KnowledgeBase) => {
        this.submit.emit(result.id);
      });
  }

}
