import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IBook} from '../IBook';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  bookId: number;
  book: IBook;
  constructor(private bookService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.bookId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookService.getById(this.bookId).subscribe(
      next => {
        this.book = next;
      }, error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  backToIndex(): void {
    this.router.navigateByUrl('');
  }
}
