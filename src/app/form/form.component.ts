import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  bookId: number;
  isShowSuccess = false;
  message: string;

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  });
  constructor(private bookService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.bookId = params.id;
      this.bookService.getById(this.bookId).subscribe( result => {
        this.bookForm.setValue(result);
      });
    });
  }

  onSubmit(): void {
    if (this.bookId) {
      this.bookService.update(this.bookForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã cập nhật thông tin thành công!';
      });
    } else {
      this.bookService.create(this.bookForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã thêm thành công!';
        this.bookService.shouldRefresh.next();
      });
    }
  }
  backToIndex(): void {
      this.router.navigateByUrl('');
  }
}
