<ion-header>
  <ion-toolbar>
    <ion-title>parametrosQuery</ion-title>
    <ion-button slot="start" [routerLink]="['/resultados']"><ion-icon name="arrow-back-outline"></ion-icon></ion-button>
  </ion-toolbar>
</ion-header>

<ion-content>
  id: {{ id }}
  partido: {{ partido }}
  fecha: {{ fecha }}
  resultado: {{ resultado }}

  <ion-card>
    <ion-header>
      <ion-title>{{  partido  }}</ion-title>
    </ion-header>
    <ion-card-content>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="{{equipo1}}" />
        </ion-thumbnail>
        <ion-label class="ion-text-center">{{ resultado }}</ion-label>
        <ion-thumbnail slot="end">
        <img src="{{equipo2}}">
        </ion-thumbnail>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size-md="5">
            {{ posesion1 }}
          </ion-col>
          <ion-col size-md="5">
            Posesión
           </ion-col>
          <ion-col size-md="2">
            {{ posesion2 }}
          </ion-col>
        </ion-row>
      </ion-grid>
      <hr>
      <ion-grid>
        <ion-row>
          <ion-col size-md="5">
            {{ offside1 }}
          </ion-col>
          <ion-col size-md="5">
            Fueras de Juego
           </ion-col>
          <ion-col size-md="2">
            {{ offside2 }}
          </ion-col>
        </ion-row>
      </ion-grid>
      <hr>
      <ion-grid>
        <ion-row>
          <ion-col size-md="5">
            {{ tirosEsquina1 }}
          </ion-col>
          <ion-col size-md="5">
            Saques de Esquina
           </ion-col>
          <ion-col size-md="2">
            {{ tirosEsquina2 }}
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-card-content>
  </ion-card>
</ion-content>


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
