import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealsService } from 'src/app/service/meals.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
  ,styles: [` .img-fluid{ min-width:100%}`]
})

export class SlideComponent implements OnInit {
  specials:Meal[] | undefined;  

  constructor(private mealService: MealsService, config: NgbCarouselConfig) { 
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
  }
  ngOnInit(): void {
    this.getSpecialMeal();
    console.log("specials" + this.specials);
  }
  
  getSpecialMeal(){
    this.mealService.getALlMeals().subscribe(
    // response => {
    //   console.log("SlideComponent => "+response);
      
    //   this.specials = response
    
    // }
  );
}
}
