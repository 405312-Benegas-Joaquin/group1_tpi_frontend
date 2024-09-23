import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatLabel,
    MatHint,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDateRangePicker,
    ReactiveFormsModule,
    MatError,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatButton,
  ],
  templateUrl: './construction.component.html',
  styleUrl: './construction.component.css',
  providers:[MatDatepickerModule]
})
export default class ConstructionComponent {

  private http = inject(HttpClient)


  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  projectoNombre = new FormControl<string|null> (null);
  projectoAddress = new FormControl<string|null> (null);
  projectoDescription = new FormControl<string|null> (null);

  testID:number = 0;
  testPlot:number = 0;

  submitForm(){
    this.testID=Math.floor(Math.random()*1000+1);
    this.testPlot=Math.floor(Math.random()*1000+1);

    const api= 'http://localhost:8080/constructions'
    const body= {
      ownerId: this.testID, // Debes obtener estos valores de otra parte de la app
      plotId: this.testPlot,  // Si no, reemplazarlos con datos reales
      plannedStartDate: this.range.value.start?.toISOString() ?? '',
      plannedEndDate: this.range.value.end?.toISOString() ?? '',
      description: this.projectoDescription.value ?? '',
      projectName: this.projectoNombre.value ?? '',
      projectAddress: this.projectoAddress.value??''
    }
    //console.log(body)

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })


    this.http.post(api, body,{headers}).subscribe(
      response => console.log(response),
      error => console.log(error)
    )

    this.projectoDescription.reset()
    this.projectoAddress.reset()
    this.projectoNombre.reset()
    this.range.reset()
  }
}
