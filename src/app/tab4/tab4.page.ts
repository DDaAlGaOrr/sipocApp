import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { addDays, formatDistance } from 'date-fns';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  commentArea: string = '';

  commentForm = this.formBuilder.group({
    comment: ['', Validators.required],
  });

  inputValue?: string;
  options: [{ value: string; label: string }] = [{ value: '', label: '' }];
  client_name: string = '';
  subsidiary_id: string = '';
  responsible: string = '';
  status: string = '';
  priority: string = '';
  description: string = '';
  start_date: string = '';
  subject: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private msg: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    for (let i = 10; i < 36; i++) {
      this.options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
      });
    }
    this.load_ticket_data();
  }

  updateCommet() {
    this.commentForm.patchValue({
      comment: 'Comentario aquí',
    });
  }

  onSubmit() {
    this.commentForm.patchValue({
      comment: '',
    });
  }

  load_ticket_data() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const ticket_id = params['tickect'];
      this.httpService
        .get(`staffs/${ticket_id}/getTickets`, true)
        .then((observableResult) => {
          observableResult.subscribe(
            (response: any) => {
              this.client_name = response.client_name;
              this.subsidiary_id = response.subsidiary_id;
              this.responsible = response.responsible;
              this.status = response.status;
              this.priority = response.priority;
              this.description = response.description;
              this.start_date = response.start_date;
              this.subject = response.subject;
            },
            (error: any) => {
              console.error('Error al enviar datos:', error);
            }
          );
          // return this.modal.present();
        })
        .catch((error) => {
          console.error('Error al realizar la solicitud de calendar:', error);
        });
    });
  }
  // Upload Files
  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
      this.msg.success(`${file.name} archivo subido exitosamente.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} error al subir archivo.`);
    }
  }
}
