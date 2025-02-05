import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PhotoPartagee } from '../models/photo-partagee';
import { DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-nouvelle-photo-partagee',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, AsyncPipe, UpperCasePipe, DatePipe],
  templateUrl: './nouvelle-photo-partagee.component.html',
  styleUrl: './nouvelle-photo-partagee.component.scss'
})
export class NouvellePhotoPartageeComponent implements OnInit{

  formPhotoPartagee!: FormGroup;
  apercuPhoto$!: Observable<PhotoPartagee>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPhotoPartagee = this.formBuilder.group({
      title: [null],
      description: [null],
      urlImage: [null],
      lieu: [null],
    });
    this.apercuPhoto$ = this.formPhotoPartagee.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        dateCreation: new Date(),
        id: 0,
        nbreReactions: 0,
      }))
    );

  }

  onSubmitForm(): void {
    console.log(this.formPhotoPartagee.value);
  }

}
