import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/especie';
import { EspeciesService } from 'src/app/services/especies.service';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.component.html',
  styleUrls: ['./informate.component.css']
})
export class InformateComponent implements OnInit {

  constructor(private _especies:EspeciesService) { }
  especies: any[] = [];
  ngOnInit(): void {

  
  console.log(this._especies.getEspecies())
  }

  getEsp(): void {
    this._especies.getEspecies().subscribe(especies => (this.especies = especies));
  }

}
