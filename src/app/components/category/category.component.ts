import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
catIndex: string| null = ''; ;
category:Category | undefined;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.catIndex = params.get('catId')
    });
    const paramId:string = this.catIndex || '';
   
    this.findCategory(paramId)
  }
  findCategory(id : string) : void{

    this.categoryService.getCategoryById(parseInt(id)).subscribe(
      (      response  =>       this.category = response))
  }

}
