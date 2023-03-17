import Swiper from 'swiper';
import { Movie } from './../../interfaces/carteleraResponse';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input()
  movies: Movie[] = [];
  public mySwiper!: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,

    });
  }
  ngOnInit(): void {
    console.log(this.movies)
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}
