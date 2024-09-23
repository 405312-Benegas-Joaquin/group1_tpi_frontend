import { Component } from '@angular/core';
import { FineTableComponent } from "../fine-table/fine-table.component";

@Component({
  selector: 'app-fine',
  standalone: true,
  imports: [FineTableComponent],
  templateUrl: './fine.component.html',
  styleUrl: './fine.component.css'
})
export default class FineComponent {

}
