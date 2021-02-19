import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'toc.page.html',
  styleUrls: ['toc.page.scss']
})
export class TocPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
  ];
  public items: Array<{ title: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'chapter ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
