import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros-query',
  templateUrl: './parametros-query.page.html',
  styleUrls: ['./parametros-query.page.scss'],
})
export class ParametrosQueryPage implements OnInit {

  public id: number=0;
  public jugador: string='';
  public titulo: string='';
  public partido: string='';
  public fecha: string='';
  public resultado: string='';
  public equipo2: string='';
  public equipo1: string='';
  public posesion1: string='';
  public posesion2: string='';
  public offside1: string='';
  public offside2: string='';
  public tirosEsquina1: string='';
  public tirosEsquina2: string='';


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros =>{
      this.id = parametros['id'] || 'Sin id';
      this.jugador = parametros['jugador'] || 'Sin Nombre';
      this.titulo = parametros['titulo'] || 'Sin titulo';
      this.partido = parametros['partido'] || 'No hay Resultados';
      this.fecha = parametros['fecha'] || 'Sin fecha';
      this.resultado = parametros['resultado'] || 'Sin Resultado';
      this.equipo2 = parametros['equipo2'] || 'Sin foto';
      this.equipo1 = parametros['equipo1'] || 'Sin foto';
      this.posesion1 = parametros['posesion1'];
      this.posesion2 = parametros['posesion2'];
      this.offside1 = parametros['offside1'];
      this.offside2 = parametros['offside2'];
      this.tirosEsquina1 = parametros['tirosEsquina1'];
      this.tirosEsquina2 = parametros['tirosEsquina2'];
    })
  }


}
