import {NgModule} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
  ],
  exports: [
    RouterTestingModule,
    HttpClientTestingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
  ]
})
export class TestModule {
}
