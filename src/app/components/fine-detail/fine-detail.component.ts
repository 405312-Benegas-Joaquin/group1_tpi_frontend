import { Component, Inject, inject, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FineService } from '../../services/fine.service';
import { Fine } from '../../models/fine.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-fine-detail',
  templateUrl: './fine-detail.component.html',
  styleUrls: ['./fine-detail.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatTableModule,
    MatDivider,
    MatButton,
  ],
})
export class FineDetailComponent {
  fineId: number | undefined;
  fine: Fine | undefined;
  private fineService = inject(FineService);
  private route = inject(ActivatedRoute);
  states: string[] = ['Pending', 'Approved', 'Rejected'];
  displayedColumns: string[] = [
    'id',
    'description',
    'infractionState',
    'actions',
  ];

  ngOnInit() {
    this.fineId = +this.route.snapshot.paramMap.get('id')!;
    this.fineService.getFineById(this.fineId).subscribe((data) => {
      this.fine = data;
    });
  }
}
