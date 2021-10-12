// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'app/services/language.service';

// Helpers
import { Texts } from '@texts';

@Component({
  selector: 'content-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public texts = Texts.HomeComponent;

  public imgUrlList = [
    "../../assets/carousel-img/bg1.jpg",
    "../../assets/carousel-img/bg2.jpg",
    "../../assets/carousel-img/bg3.jpg",
    "../../assets/carousel-img/bg4.jpg",
  ];

  constructor(
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void { }
}
