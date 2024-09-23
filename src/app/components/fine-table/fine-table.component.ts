import { Component, inject } from '@angular/core';
import { FineService } from '../../services/fine.service';
import { Fine } from '../../models/fine.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fine-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './fine-table.component.html',
  styleUrl: './fine-table.component.css',
})
export class FineTableComponent {
  fines: Fine[] = [];
  displayedColumns: string[] = [
    'id',
    'description',
    'moderationState',
    'price',
    'actions',
  ];
  totalElements: number = 0;
  pageSize: number = 10;
  pageNumber: number = 0;

  private fineService = inject(FineService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadFines(this.pageNumber, this.pageSize);
  }

  // Method para cargar datos paginados
  loadFines(page: number, size: number) {
    this.fineService.getFines(page, size).subscribe((data) => {
      if (data) {
        this.fines = data.content;
        this.totalElements = data.totalElements;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
      }
    });
  }

  viewDetail(id: number) {
    console.log('boton apretados', id);
    this.router.navigate([`/fine/${id}`]);
  }

  pageChanged(event: PageEvent) {
    this.loadFines(event.pageIndex, event.pageSize);
  }
}
