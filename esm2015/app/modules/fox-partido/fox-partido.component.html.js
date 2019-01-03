/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export default `
<div class="general-wrapper">
	<div class="container-fluid p-0">
		<div class="row">

			<div class="col-12">

				<!-- Header -->
				<div class="match-header">
					<div class="match-header_teams">
						<div class="match-header_team">
							<h3>{{data['home-team']['team-name']}}</h3>
							<img src="{{data['home-team']['team-logo-url']}}" alt="{{data['home-team']['team-name']}}">
						</div>						
						<div class="match-header_results">
							<span>{{data['home-score']}}</span>
							<span>:</span>
							<span>{{data['visiting-score']}}</span>
						</div>
						<div class="match-header_team">
							<img src="{{data['visiting-team']['team-logo-url']}}" alt="{{data['visiting-team']['team-name']}}">
							<h3>{{data['visiting-team']['team-name']}}</h3>
						</div>
					</div>
					<span class="status">{{data['game-state']['status']}}</span>
            <!--div class="tournament">Superliga Argentina de Fútbol - Fecha 9</div-->
            <div class="tournament">{{data['game-type']}}</div>
					<ul *ngIf="!hasNotStarted">
						<li *ngIf="hasEnded" class="{{activeTab === 's' ? 'active' : ''}}" (click)="toggleTab('s')">Resumen</li>
						<li class="{{activeTab === 'm' ? 'active' : ''}}" (click)="toggleTab('m')">Minuto a minuto</li>
						<li class="{{activeTab === 'e' ? 'active' : ''}}" (click)="toggleTab('e')">Estadísticas</li>
						<li class="{{activeTab === 'a' ? 'active' : ''}}" (click)="toggleTab('a')">Alineaciones</li>
					</ul>

				</div>
				<!-- SUMMARY -->
				<div class="summary tab {{activeTab === 's' || activeTab === 'm' ? 'active' : ''}}">
          <div class="container-fluid p-0">
            <div class="row">
        
              <div class="col-12">
        
                <!-- Stat -->
                <div class="sports-table">
        
                    <div class="empty" *ngIf="nothingHappen">
                          <div class="circle"></div>
                          <p>A&uacute;n no hay incidencias en el partido</p>
                    </div>
        
                  <!-- Stat Content -->
                  <div class="sports-table_content" *ngIf="!nothingHappen">
        
                    <div class="sports-table_content-row" *ngFor="let play of plays">
                      <span class="column {{play['team-id'] === homeTeamId ? '' : 'reverse'}}">
                        <i class="{{icon(play['event-text'])}}"></i>
                        <span class="minute">{{play.minutes}}'</span>
                        <span>{{play['first-player-name']}}{{play['second-player-name'] ? (' - ' + play['second-player-name']) : ''}}</span>
                      </span>
                    </div>
        
                  </div>
        
                  <div class="row" *ngIf="showAll && !nothingHappen">
                    <div class="col-12">
                      
                      <div class="sports-table_action">
                        <a href="javascript:void(0)" (click)="all()">Cargar más</a>
                      </div>
                    </div>
                  </div>
        
                </div>
                <!-- End of Stat -->
        
              </div>
            </div>
          </div>
        </div>
        <!-- STATS -->
				<div class="stats tab {{activeTab === 'e' ? 'active' : ''}}">
          <div class="container-fluid p-0">
            <div class="row">
        
              <div class="col-12">
        
                <!-- Stat -->
                <div class="sports-table">
        
                  <!-- Stat Content -->
                  <div class="sports-table_content">
        
                    <div class="sports-table_content-row" *ngFor="let estadistica of estadisticas">
                      <span class="column local">
                        <span class="stat">{{estadistica.home}}</span>
                      </span>
                      <h4>{{estadistica.label}}</h4>
                      <span class="column visitor">
                        <span class="stat">{{estadistica.visit}}</span>
                      </span>
                    </div>
        
                  </div>
        
                </div>
                <!-- End of Stat -->
        
              </div>
            </div>
          </div>
        </div>
        <!-- ALIGNMENTS -->
        <div class="alignments tab {{activeTab === 'a' ? 'active' : ''}}">
          <div class="container-fluid p-0">
            <div class="row">
        
              <div class="col-12">
                <ul class="team-choice">
                  <li (click)="changeAlign(true)" class="{{activeAlign ? 'active' : ''}}">{{data['home-team']['team-name']}}</li>
                  <li (click)="changeAlign(false)" class="{{!activeAlign ? 'active' : ''}}">{{data['visiting-team']['team-name']}}</li>
                </ul>
              </div>
        
              <div class="col-12">
                <div class="football-field_wrapper">
                  <div class="football-field">
                    <img class="football-field_local" src="/assets/formacion_local_343.svg">
                    <img class="football-field_visitante" src="/assets/formacion_visitante_4222.svg">
                  </div>
                </div>
              </div>
        
              <div class="col-md-6 tab align {{activeAlign ? 'active' : ''}}">
        
                <!-- Team -->
                <div class="sports-table">
        
                  <!-- Team Heading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_heading">
                        <h4 class="column">{{hometeam['team-info']['team-name']}}</h4>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Entrenador</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
                    <div class="sports-table_content-row">
                      <span class="column">
                        <span class="position">DT</span>
                        <i class="flag-arg"></i>
                        <span>{{hometeam['manager-info']['manager-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(hometeam['manager-info'])">Ver detalle</a>
                      </span>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Porteros</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
                    <div class="sports-table_content-row">
                      <span class="column">
                        <span class="position">{{homeplayers['goalkeeper'][0]['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{homeplayers['goalkeeper'][0]['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(homeplayers['goalkeeper'][0])">Ver detalle</a>
                      </span>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Defensas</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of homeplayers['defender']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
                  
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Mediocampistas</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of homeplayers['midfielder']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
                  
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Delanteros</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of homeplayers['forward']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
        
                </div>
                <!-- End of Team -->
        
              </div>
        
              <div class="col-md-6 tab align {{!activeAlign ? 'active' : ''}}">
        
                <!-- Team -->
                <div class="sports-table">
        
                  <!-- Team Heading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_heading">
                        <h4 class="column">{{visitteam['team-info']['team-name']}}</h4>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Entrenador</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
                    <div class="sports-table_content-row">
                      <span class="column">
                        <span class="position">DT</span>
                        <i class="flag-arg"></i>
                        <span>{{visitteam['manager-info']['manager-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(visitteam['manager-info'])">Ver detalle</a>
                      </span>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Porteros</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
                    <div class="sports-table_content-row">
                      <span class="column">
                        <span class="position">{{visitplayers['goalkeeper'][0]['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{visitplayers['goalkeeper'][0]['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(visitplayers['goalkeeper'][0])">Ver detalle</a>
                      </span>
                    </div>
                  </div>
        
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Defensas</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of visitplayers['defender']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
                  
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Mediocampistas</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of visitplayers['midfielder']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
                  
                  <!-- Team SubHeading -->
                  <div class="row">
                    <div class="col-12">
                      <div class="sports-table_subheading">
                        <h5 class="column">Delanteros</h5>
                      </div>
                    </div>
                  </div>
        
                  <!-- Team Content -->
                  <div class="sports-table_content">
        
        
                    <div class="sports-table_content-row" *ngFor="let player of visitplayers['forward']">
                      <span class="column">
                        <span class="position">{{player['player-number']}}</span>
                        <i class="flag-arg"></i>
                        <span>{{player['player-name']}}</span>
                      </span>
                      <span class="column text-right">
                        <a href="javascript:void(0)" (click)="onplayer(player)">Ver detalle</a>
                      </span>
                    </div>
        
                  </div>
        
                </div>
                <!-- End of Team -->
        
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
 	</div>
</div>`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXBhcnRpZG8uY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3gtcGFydGlkby8iLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2ZveC1wYXJ0aWRvL2ZveC1wYXJ0aWRvLmNvbXBvbmVudC5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMmFSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXG48ZGl2IGNsYXNzPVwiZ2VuZXJhbC13cmFwcGVyXCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cblx0XHRcdFx0PCEtLSBIZWFkZXIgLS0+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaC1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3RlYW1zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3RlYW1cIj5cblx0XHRcdFx0XHRcdFx0PGgzPnt7ZGF0YVsnaG9tZS10ZWFtJ11bJ3RlYW0tbmFtZSddfX08L2gzPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7ZGF0YVsnaG9tZS10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXX19XCIgYWx0PVwie3tkYXRhWydob21lLXRlYW0nXVsndGVhbS1uYW1lJ119fVwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3Jlc3VsdHNcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tkYXRhWydob21lLXNjb3JlJ119fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+Ojwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tkYXRhWyd2aXNpdGluZy1zY29yZSddfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaC1oZWFkZXJfdGVhbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ119fVwiIGFsdD1cInt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLW5hbWUnXX19XCI+XG5cdFx0XHRcdFx0XHRcdDxoMz57e2RhdGFbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1uYW1lJ119fTwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7ZGF0YVsnZ2FtZS1zdGF0ZSddWydzdGF0dXMnXX19PC9zcGFuPlxuICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cInRvdXJuYW1lbnRcIj5TdXBlcmxpZ2EgQXJnZW50aW5hIGRlIEbDunRib2wgLSBGZWNoYSA5PC9kaXYtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3VybmFtZW50XCI+e3tkYXRhWydnYW1lLXR5cGUnXX19PC9kaXY+XG5cdFx0XHRcdFx0PHVsICpuZ0lmPVwiIWhhc05vdFN0YXJ0ZWRcIj5cblx0XHRcdFx0XHRcdDxsaSAqbmdJZj1cImhhc0VuZGVkXCIgY2xhc3M9XCJ7e2FjdGl2ZVRhYiA9PT0gJ3MnID8gJ2FjdGl2ZScgOiAnJ319XCIgKGNsaWNrKT1cInRvZ2dsZVRhYigncycpXCI+UmVzdW1lbjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ7e2FjdGl2ZVRhYiA9PT0gJ20nID8gJ2FjdGl2ZScgOiAnJ319XCIgKGNsaWNrKT1cInRvZ2dsZVRhYignbScpXCI+TWludXRvIGEgbWludXRvPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cInt7YWN0aXZlVGFiID09PSAnZScgPyAnYWN0aXZlJyA6ICcnfX1cIiAoY2xpY2spPVwidG9nZ2xlVGFiKCdlJylcIj5Fc3RhZMOtc3RpY2FzPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cInt7YWN0aXZlVGFiID09PSAnYScgPyAnYWN0aXZlJyA6ICcnfX1cIiAoY2xpY2spPVwidG9nZ2xlVGFiKCdhJylcIj5BbGluZWFjaW9uZXM8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwhLS0gU1VNTUFSWSAtLT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1bW1hcnkgdGFiIHt7YWN0aXZlVGFiID09PSAncycgfHwgYWN0aXZlVGFiID09PSAnbScgPyAnYWN0aXZlJyA6ICcnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIFN0YXQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCIgKm5nSWY9XCJub3RoaW5nSGFwcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QSZ1YWN1dGU7biBubyBoYXkgaW5jaWRlbmNpYXMgZW4gZWwgcGFydGlkbzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBTdGF0IENvbnRlbnQgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnRcIiAqbmdJZj1cIiFub3RoaW5nSGFwcGVuXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93XCIgKm5nRm9yPVwibGV0IHBsYXkgb2YgcGxheXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB7e3BsYXlbJ3RlYW0taWQnXSA9PT0gaG9tZVRlYW1JZCA/ICcnIDogJ3JldmVyc2UnfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpY29uKHBsYXlbJ2V2ZW50LXRleHQnXSl9fVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+e3twbGF5Lm1pbnV0ZXN9fSc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXlbJ2ZpcnN0LXBsYXllci1uYW1lJ119fXt7cGxheVsnc2Vjb25kLXBsYXllci1uYW1lJ10gPyAoJyAtICcgKyBwbGF5WydzZWNvbmQtcGxheWVyLW5hbWUnXSkgOiAnJ319PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwic2hvd0FsbCAmJiAhbm90aGluZ0hhcHBlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwiYWxsKClcIj5DYXJnYXIgbcOhczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBFbmQgb2YgU3RhdCAtLT5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNUQVRTIC0tPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3RhdHMgdGFiIHt7YWN0aXZlVGFiID09PSAnZScgPyAnYWN0aXZlJyA6ICcnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIFN0YXQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gU3RhdCBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93XCIgKm5nRm9yPVwibGV0IGVzdGFkaXN0aWNhIG9mIGVzdGFkaXN0aWNhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIGxvY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRcIj57e2VzdGFkaXN0aWNhLmhvbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7ZXN0YWRpc3RpY2EubGFiZWx9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdmlzaXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0XCI+e3tlc3RhZGlzdGljYS52aXNpdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRW5kIG9mIFN0YXQgLS0+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBBTElHTk1FTlRTIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ25tZW50cyB0YWIge3thY3RpdmVUYWIgPT09ICdhJyA/ICdhY3RpdmUnIDogJyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGVhbS1jaG9pY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiY2hhbmdlQWxpZ24odHJ1ZSlcIiBjbGFzcz1cInt7YWN0aXZlQWxpZ24gPyAnYWN0aXZlJyA6ICcnfX1cIj57e2RhdGFbJ2hvbWUtdGVhbSddWyd0ZWFtLW5hbWUnXX19PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiY2hhbmdlQWxpZ24oZmFsc2UpXCIgY2xhc3M9XCJ7eyFhY3RpdmVBbGlnbiA/ICdhY3RpdmUnIDogJyd9fVwiPnt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLW5hbWUnXX19PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGJhbGwtZmllbGRfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RiYWxsLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290YmFsbC1maWVsZF9sb2NhbFwiIHNyYz1cIi9hc3NldHMvZm9ybWFjaW9uX2xvY2FsXzM0My5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZVwiIHNyYz1cIi9hc3NldHMvZm9ybWFjaW9uX3Zpc2l0YW50ZV80MjIyLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHRhYiBhbGlnbiB7e2FjdGl2ZUFsaWduID8gJ2FjdGl2ZScgOiAnJ319XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gVGVhbSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIEhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbHVtblwiPnt7aG9tZXRlYW1bJ3RlYW0taW5mbyddWyd0ZWFtLW5hbWUnXX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RW50cmVuYWRvcjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIENvbnRlbnQgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnRcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPkRUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGFnLWFyZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aG9tZXRlYW1bJ21hbmFnZXItaW5mbyddWydtYW5hZ2VyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKGhvbWV0ZWFtWydtYW5hZ2VyLWluZm8nXSlcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPlBvcnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3tob21lcGxheWVyc1snZ29hbGtlZXBlciddWzBdWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2hvbWVwbGF5ZXJzWydnb2Fsa2VlcGVyJ11bMF1bJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihob21lcGxheWVyc1snZ29hbGtlZXBlciddWzBdKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RGVmZW5zYXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgaG9tZXBsYXllcnNbJ2RlZmVuZGVyJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+TWVkaW9jYW1waXN0YXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgaG9tZXBsYXllcnNbJ21pZGZpZWxkZXInXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3twbGF5ZXJbJ3BsYXllci1udW1iZXInXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGFnLWFyZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cGxheWVyWydwbGF5ZXItbmFtZSddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwib25wbGF5ZXIocGxheWVyKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBTdWJIZWFkaW5nIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjb2x1bW5cIj5EZWxhbnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIiAqbmdGb3I9XCJsZXQgcGxheWVyIG9mIGhvbWVwbGF5ZXJzWydmb3J3YXJkJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIEVuZCBvZiBUZWFtIC0tPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGFiIGFsaWduIHt7IWFjdGl2ZUFsaWduID8gJ2FjdGl2ZScgOiAnJ319XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gVGVhbSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIEhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbHVtblwiPnt7dmlzaXR0ZWFtWyd0ZWFtLWluZm8nXVsndGVhbS1uYW1lJ119fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPkVudHJlbmFkb3I8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj5EVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Zpc2l0dGVhbVsnbWFuYWdlci1pbmZvJ11bJ21hbmFnZXItbmFtZSddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwib25wbGF5ZXIodmlzaXR0ZWFtWydtYW5hZ2VyLWluZm8nXSlcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPlBvcnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3t2aXNpdHBsYXllcnNbJ2dvYWxrZWVwZXInXVswXVsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2aXNpdHBsYXllcnNbJ2dvYWxrZWVwZXInXVswXVsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHZpc2l0cGxheWVyc1snZ29hbGtlZXBlciddWzBdKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RGVmZW5zYXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgdmlzaXRwbGF5ZXJzWydkZWZlbmRlciddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj57e3BsYXllclsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twbGF5ZXJbJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihwbGF5ZXIpXCI+VmVyIGRldGFsbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPk1lZGlvY2FtcGlzdGFzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIiAqbmdGb3I9XCJsZXQgcGxheWVyIG9mIHZpc2l0cGxheWVyc1snbWlkZmllbGRlciddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj57e3BsYXllclsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twbGF5ZXJbJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihwbGF5ZXIpXCI+VmVyIGRldGFsbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPkRlbGFudGVyb3M8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgdmlzaXRwbGF5ZXJzWydmb3J3YXJkJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIEVuZCBvZiBUZWFtIC0tPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiBcdDwvZGl2PlxuPC9kaXY+YFxuIl19