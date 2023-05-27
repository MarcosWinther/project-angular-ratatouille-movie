import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public photoCover: string = '';
  public contentTitle: string = '';
  public contentDescription: string = '';
  public contentDescriptionTwo: string = '';
  public contentDescriptionThree: string = '';
  private id: string | null= '0';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentDescriptionTwo = result.descriptionTwo;
    this.contentDescriptionThree = result.descriptionThree;
    this.photoCover = result.photoCover;
  }
}
