import { Component, Input, NgModule } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var template = `
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var style = `

.match-header {
	background: #fff;
}

.match-header_teams {
	align-items: center;
	display: flex;
	justify-content: center;
}

.match-header_team {
	align-items: center;
	display: flex;
	width: 45%;
}

.match-header_teams .match-header_team:first-child {
	justify-content: flex-end;
	text-align: right;
}

.match-header_team h3 {
	color: #303030;
	font-size: 1.15em;
	font-weight: 400;
	margin-bottom: 0;
}

@media (max-width: 768px) {
	.match-header_team h3 {
		font-size: 1em;
	}
}

.match-header_team img {
	height: 40px;
	margin: 0 10px;
	width: 40px;
}


@media (max-width: 768px) {
	.match-header_team img {
		height: 36px;
		margin: 0 5px;
		width: 36px;
	}
}

.match-header_results {
	min-width: 90px;
    text-align: center;
}

@media (max-width: 768px) {
	.match-header_results {
		min-width: 80px;
	}
}

.match-header_results span {
	font-size: 1.4em;
	margin: 0 5px;
}

@media (max-width: 768px) {
	.match-header_results span {
		font-size: 1.2em;
		margin: 0 5px;
	}
}

.match-header .status {
	color: #999;
	display: block;
	font-size: .85em;
	text-align: center;
	text-transform: uppercase;
}

.match-header .tournament {
	display: block;
	font-size: .85em;
	margin: 10px 0;
	text-align: center;
} 

.match-header ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
}

@media (max-width: 768px) {
	.match-header ul {
		display: flex;
		overflow-x: scroll;
	}
}

.match-header ul li {
	color: #999;
	cursor: pointer;
	display: inline-block;
	margin: 0 30px;
	padding: 10px 0;
	text-transform: uppercase;
}

@media (max-width: 768px) {
	.match-header ul li {
		margin: 0 15px;
		white-space: nowrap;
	}
}

.match-header ul li.active {
	color: #303030;
	border-bottom: 2px solid #007aff;
	font-weight: 600;
}

.tab {
  display: none;
}

@media (min-width: 768px) {
  .tab.align {
    display: block;
  }
}

.tab.active {
  display: block;
}

.stats .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.stats .sports-table_content-row {
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 16px 14px;
}

.stats .sports-table_content-row h4 {
	color: #999;
	font-size: 1em;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	min-width: 80px;
}

.stats .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}


.stats .sports-table_content-row .stat {
	color: #303030;
	font-size: 1em;
	line-height: 1.8em;
}


@media (max-width: 768px) {
	.stats .sports-table_content-row .column {
		font-size: 1.2em;
	}
}

.stats .sports-table_content-row:nth-of-type(even) {
	background: #fafafa;
}

.stats .sports-table_content-row:nth-of-type(odd) {
	background: #fff;
}

.summary .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.summary .column:nth-of-type(1) {
	color: #000;
	width: 100%;
}

.summary .sports-table_content-row {
	padding: 16px 14px;
}

.summary .sports-table_heading h4 {
	width: 100%;
}

.summary .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.summary .column.reverse {
	display: flex;
	flex-direction: row-reverse;
}

.summary .column.reverse span {
	margin: 0 0 0 12px;
}

.summary .sports-table_content-row .column i {
	margin: 0 15px 0 0;
}

.summary .sports-table_content-row .column.reverse i {
	margin: 0 0 0 15px;
}

.summary .sports-table_content-row img {
	display: inline-block;
	height: 28px;
    margin-right: 12px;
	text-align: center;
	width: 28px;
}

.summary .sports-table_content-row .minute {
	color: #999;
	font-size: .85em;
	line-height: 1.8em;
}

@media (max-width: 768px) {
	.summary .sports-table_content-row img {
		margin-right: 6px;
	}
}

.summary .sports-table_content-row .column:nth-of-type(1) {
	align-items: center;
	display: flex;
}

.summary .sports-table_content-row .column strong {
	font-size: 1.1em;
}

@media (max-width: 768px) {
	.summary .sports-table_content-row .column:nth-of-type(1), 
	.summary .sports-table_content-row .column:nth-of-type(2), 
	.summary .sports-table_content-row .column:nth-of-type(10) {
		font-size: 1.2em;
	}

	.summary .sports-table_content-row .column:nth-of-type(10) {
		line-height: 2em;
	}
}

.summary .sports-table_content-row:nth-of-type(even) {
	background: #fafafa;
}

.summary .sports-table_content-row:nth-of-type(odd) {
	background: #fff;
}

.summary .empty .circle {
  background: #ddd;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  margin: 50px auto 20px;
}

.summary .empty p {
  color: #ccc;
  text-align: center;
  margin-bottom: 150px;
}

.alignments .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.alignments .sports-table_subheading {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eeeff0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 4px;
  padding: 14px;
  text-transform: uppercase;
}

.alignments .sports-table_subheading h5 {
    color: #999;
    font-size: .75em;
    font-weight: 500;
    margin: 0;
    padding: 0;
}

.alignments .flag-arg {
    background-image: url(/assets/flag-arg.svg);
}

.alignments .column:nth-of-type(1) {
	width: 100%;
}

.alignments .football-field {
	background: url('/assets/campo_futbol.svg') center center no-repeat;
	background-size: 80%;
	height: 220px;
	position: relative;
}

.alignments .football-field_wrapper {
	background-color: #fff;
	width: 100%;
}

.alignments .football-field_local {
	left: 10%;
}

.alignments .football-field_visitante {
	right: 10%;
}

.alignments .football-field_local, 
.alignments .football-field_visitante {
	position: absolute;
	top: 14%;
	width: 40%;
}

@media (max-width: 1199px) {
	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 20%;
	}
}

@media (max-width: 991px) {
	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 28%;
	}
}

@media (max-width: 768px) {
	.alignments .football-field {
		background-size: 90%;
	}

	.alignments .football-field_local {
		left: 8%;
	}

	.alignments .football-field_visitante {
		right: 8%;
	}
}

@media (max-width: 576px) {
	.alignments .football-field {
		margin: 0 auto;
		width: 340px;
	}

	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 37%;
	}

	.alignments .football-field_local {
		left: 7.5%;
	}

	.alignments .football-field_visitante {
		right: 7.5%;
	}
}

.alignments .team-choice {
	display: none;
	list-style-type: none;
	margin: 0;
	padding: 0;
	width: 100%;
}

.alignments .team-choice li {
	border-radius: 2px;
	color: #999;
	cursor: pointer;
	font-size: .9em;
	padding: 14px;
	text-align: center;
	text-transform: uppercase;
	width: 50%;
}

.alignments .team-choice li:hover {
	color: #303030;
}

.alignments .team-choice li.active {
	background-color: #fff;
	color: #303030;
}


@media (max-width: 576px) {
	.alignments .team-choice {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
}


.alignments .sports-table_heading h4 {
	width: 100%;
}

.alignments .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	color: #303030;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.alignments .sports-table_content-row {
	padding: 18px 14px;
}

.alignments .sports-table_content-row .column:nth-of-type(1) {
	width: 80%;
}

.alignments .sports-table_content-row .column:nth-of-type(2) {
    min-width: 130px;
	width: 20%;
}

.alignments .sports-table_content-row i {
	height: 14px;
	margin-right: 15px;
}

.alignments .sports-table_content-row a {
	border: 1px solid #eeeff0; 
	border-radius: 4px;
	color: #999;
	font-size: .75em;
	font-weight: 600;
	padding: 8px 12px;
	text-transform: uppercase;
}

.alignments .sports-table_content-row a:hover {
	border: 1px solid #999;
	text-decoration: none;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row a {
		border: 0;
		color: transparent;
		display: inline-block;
		max-width: 6px;
		padding: 0;
		position: relative;
		text-indent: -999999999px;
	}

	.alignments .sports-table_content-row a:hover {
		border: 0;
	}

	.alignments .sports-table_content-row a::after {
		background: url('../assets/chevron-right.svg');
		content: "";
		float: right;
		height: 10px;
		position: absolute;
		right: 0;
		width: 6px;
	}
}

.alignments .sports-table_content-row img {
	display: inline-block;
	height: 28px;
    margin-right: 12px;
	text-align: center;
	width: 28px;
}

.alignments .sports-table_content-row .position {
	color: #999;
	font-size: .75em;
	line-height: 1.9em;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row img {
		margin-right: 6px;
	}
}

.alignments .sports-table_content-row .column:nth-of-type(1) {
	align-items: center;
	display: flex;
}

.alignments .sports-table_content-row .column strong {
	font-size: 1.1em;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row .column:nth-of-type(1), 
  .alignments .sports-table_content-row .column:nth-of-type(2), 
  .alignments .sports-table_content-row .column:nth-of-type(10) {
		font-size: 1.2em;
	}

	.alignments .sports-table_content-row .column:nth-of-type(10) {
		line-height: 2em;
	}
}

`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FoxPartidoComponent {
    constructor() {
        this.showtitle = true;
        this.competitionid = '';
        this.matchid = '';
        this.lang = 'es';
        this.max = 0;
        this.country = 'ar';
        this.title = 'Partido';
        this.activeTab = 's';
        this.activeAlign = true;
        this.hasEnded = false;
        this.hasNotStarted = false;
        this.nothingHappen = false;
        // HEADER PROPS
        this.data = {
            'home-team': {},
            'visiting-team': {},
            'game-state': {}
        };
        // SUMMARY PROPS
        this.stats = {
            plays: []
        };
        this.plays = [];
        this.homeTeamId = '';
        this.visitingTeamId = '';
        this.showAll = true;
        // STATS PROPS
        this.estadisticas = [];
        this.objectKeys = Object.keys;
        this.parseInt = Number.parseInt;
        // ALIGNMENTS PROPS
        this.hometeam = {
            'team-info': {},
            'manager-info': {}
        };
        this.homeplayers = {
            goalkeeper: [
                {}
            ],
            midfielder: [],
            defender: [],
            forward: []
        };
        this.visitteam = {
            'team-info': {},
            'manager-info': {}
        };
        this.visitplayers = {
            goalkeeper: [
                {}
            ],
            midfielder: [],
            defender: [],
            forward: []
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Usefull variables
        const /** @type {?} */ _this = this;
        const /** @type {?} */ params = {};
        // API Params setup
        if (_this.country)
            params['country-code'] = _this.country;
        if (_this.matchid)
            params['match-id'] = _this.matchid;
        axios.get('https://stats.foxsportsla.com/stats/get_play_to_play_live', {
            params: params
        }).then(function (resp) {
            // HEADER DATA
            _this.data = resp.data;
            // SUMMARY DATA
            _this.stats = resp.data;
            _this.plays = resp.data.plays.splice(0, 10);
            _this.visitingTeamId = resp.data['visiting-team']._id;
            _this.homeTeamId = resp.data['home-team']._id;
            _this.nothingHappen = _this.plays.length === 0;
            _this.hasEnded = resp.data['game-state']['status'] === 'final';
            _this.hasNotStarted = resp.data['game-state']['status'] !== 'final' && resp.data['game-state']['live-minute'] === 0;
            if (!_this.hasEnded && resp.data['game-state']['live-minute'] <= 15)
                _this.all();
            if (_this.hasNotStarted)
                _this.activeTab = 'a';
            else if (_this.hasEnded)
                _this.activeTab = 's';
            else if (_this.nothingHappen)
                _this.activeTab = 'm';
            axios.get('https://stats.foxsportsla.com/stats/get_statistics_live', {
                params: params
            }).then(function (resp) {
                // STATS DATA
                _this.estadisticas = resp.data['home-team'].map(item => {
                    return {
                        home: item['stats-value'],
                        label: _this.label(item['stats-label']),
                        visit: resp.data['visiting-team'].find(v => v['stats-label'] == item['stats-label'])['stats-value']
                    };
                });
                axios.get('https://stats.foxsportsla.com/stats/get_teams_detail', {
                    params: {
                        'competition-id': _this.competitionid,
                        'team-id': _this.data['home-team']['_id'],
                        'country-code': _this.country
                    }
                }).then(function (resp) {
                    _this.hometeam = resp.data;
                    resp.data.players.forEach(player => {
                        if (player.position === 'goalkeeper')
                            _this.homeplayers[player.position][0] = player;
                        else
                            _this.homeplayers[player.position].push(player);
                    });
                    axios.get('https://stats.foxsportsla.com/stats/get_teams_detail', {
                        params: {
                            'competition-id': _this.competitionid,
                            'team-id': _this.data['visiting-team']['_id'],
                            'country-code': _this.country
                        }
                    }).then(function (resp) {
                        _this.visitteam = resp.data;
                        resp.data.players.forEach(player => {
                            if (player.position === 'goalkeeper')
                                _this.visitplayers[player.position][0] = player;
                            else
                                _this.visitplayers[player.position].push(player);
                        });
                        if (_this.oninit)
                            _this.oninit(_this.data);
                    }).catch(err => {
                        if (_this.onerror)
                            _this.onerror(err);
                    });
                }).catch(err => {
                    if (_this.onerror)
                        _this.onerror(err);
                });
            }).catch(err => {
                if (_this.onerror)
                    _this.onerror(err);
            });
        }).catch(err => {
            if (_this.onerror)
                _this.onerror(err);
        });
    }
    /**
     * @param {?} home
     * @return {?}
     */
    changeAlign(home) {
        this.activeAlign = home;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    toggleTab(tab) {
        this.activeTab = tab;
        if (tab === "s") {
            this.onsummary(this.data);
        }
        else if (tab === 'a') {
            this.onalignments(this.data);
        }
        else if (tab === 'e') {
            this.onstats(this.data);
        }
        else if (tab === 'm') {
            this.onmintomin(this.data);
        }
    }
    /**
     * @return {?}
     */
    all() {
        this.plays = this.stats.plays;
        this.showAll = false;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    icon(text) {
        return {
            'start-half': 'icon-ball',
            'foul': 'icon-ball',
            'free-kick': 'icon-shoe',
            'shot-on-goal': 'icon-ball',
            'corner-kick': 'icon-shoe',
            'cross': 'icon-ball',
            'offside': 'icon-flag',
            'throw-in': 'icon-ball',
            'goal': 'icon-ball',
            'yellow-card': 'icon-yellow_card',
            'shot': 'icon-ball',
            'goal-kick': 'icon-shoe',
            'red-card': 'icon-ball',
            'half-over': 'icon-ball',
            'substitution': 'icon-flag',
            'game-over': 'icon-ball'
        }[text];
    }
    /**
     * @param {?} text
     * @return {?}
     */
    label(text) {
        return {
            'goal': 'Goles',
            'yellow-card': 'Tarjetas Amarillas',
            'play-clear': 'Jugadas Claras',
            'corner-kick': 'Tiros de esquina',
            'cross': 'Pases',
            'red-card': 'Tarjetas Rojas',
            'foul': 'Faltas',
            'free-kick': 'Tiros Libres',
            'game-over': 'Final de juego',
            'half-over': 'Medio tiempo',
            'injury': 'Lesiones',
            'offside': 'Offsides',
            'penalti-ok': 'Penales convertidos',
            'penalti-not-ok': 'Penales errados',
            'shot': 'Tiros',
            'shot-on-goal': 'Tiros a gol',
            'start-half': 'Primera mitad',
            'substitution': 'Sustituciones',
            'own-goal': 'Goles en contra',
            'goal-kick': 'Saques de arco',
            'throw-in': 'Laterales',
            'shotout-goal': 'Tiros al arco',
            'shotout-save': 'Atajadas',
            'shotout miss': 'Tiros afuera'
        }[text];
    }
}
FoxPartidoComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-fox-partido',
                template: template + '',
                styles: [style + '']
            },] },
];
/** @nocollapse */
FoxPartidoComponent.ctorParameters = () => [];
FoxPartidoComponent.propDecorators = {
    "showtitle": [{ type: Input },],
    "competitionid": [{ type: Input },],
    "matchid": [{ type: Input },],
    "lang": [{ type: Input },],
    "max": [{ type: Input },],
    "country": [{ type: Input },],
    "onsummary": [{ type: Input },],
    "onmintomin": [{ type: Input },],
    "onstats": [{ type: Input },],
    "onalignments": [{ type: Input },],
    "onplayer": [{ type: Input },],
    "oninit": [{ type: Input },],
    "onerror": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FoxPartidoModule {
}
FoxPartidoModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FoxPartidoComponent],
                exports: [
                    FoxPartidoComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FoxPartidoModule, FoxPartidoComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXBhcnRpZG8uanMubWFwIiwic291cmNlcyI6WyJuZzovL2ZveC1wYXJ0aWRvL2FwcC9tb2R1bGVzL2ZveC1wYXJ0aWRvL2ZveC1wYXJ0aWRvLmNvbXBvbmVudC5odG1sLnRzIiwibmc6Ly9mb3gtcGFydGlkby9hcHAvbW9kdWxlcy9mb3gtcGFydGlkby9mb3gtcGFydGlkby5jb21wb25lbnQuY3NzLnRzIiwibmc6Ly9mb3gtcGFydGlkby9hcHAvbW9kdWxlcy9mb3gtcGFydGlkby9mb3gtcGFydGlkby5jb21wb25lbnQudHMiLCJuZzovL2ZveC1wYXJ0aWRvL2FwcC9tb2R1bGVzL2ZveC1wYXJ0aWRvL2ZveC1wYXJ0aWRvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXG48ZGl2IGNsYXNzPVwiZ2VuZXJhbC13cmFwcGVyXCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cblx0XHRcdFx0PCEtLSBIZWFkZXIgLS0+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaC1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3RlYW1zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3RlYW1cIj5cblx0XHRcdFx0XHRcdFx0PGgzPnt7ZGF0YVsnaG9tZS10ZWFtJ11bJ3RlYW0tbmFtZSddfX08L2gzPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7ZGF0YVsnaG9tZS10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXX19XCIgYWx0PVwie3tkYXRhWydob21lLXRlYW0nXVsndGVhbS1uYW1lJ119fVwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWF0Y2gtaGVhZGVyX3Jlc3VsdHNcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tkYXRhWydob21lLXNjb3JlJ119fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+Ojwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tkYXRhWyd2aXNpdGluZy1zY29yZSddfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXRjaC1oZWFkZXJfdGVhbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ119fVwiIGFsdD1cInt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLW5hbWUnXX19XCI+XG5cdFx0XHRcdFx0XHRcdDxoMz57e2RhdGFbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1uYW1lJ119fTwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7ZGF0YVsnZ2FtZS1zdGF0ZSddWydzdGF0dXMnXX19PC9zcGFuPlxuICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cInRvdXJuYW1lbnRcIj5TdXBlcmxpZ2EgQXJnZW50aW5hIGRlIEbDg8K6dGJvbCAtIEZlY2hhIDk8L2Rpdi0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnRcIj57e2RhdGFbJ2dhbWUtdHlwZSddfX08L2Rpdj5cblx0XHRcdFx0XHQ8dWwgKm5nSWY9XCIhaGFzTm90U3RhcnRlZFwiPlxuXHRcdFx0XHRcdFx0PGxpICpuZ0lmPVwiaGFzRW5kZWRcIiBjbGFzcz1cInt7YWN0aXZlVGFiID09PSAncycgPyAnYWN0aXZlJyA6ICcnfX1cIiAoY2xpY2spPVwidG9nZ2xlVGFiKCdzJylcIj5SZXN1bWVuPC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cInt7YWN0aXZlVGFiID09PSAnbScgPyAnYWN0aXZlJyA6ICcnfX1cIiAoY2xpY2spPVwidG9nZ2xlVGFiKCdtJylcIj5NaW51dG8gYSBtaW51dG88L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwie3thY3RpdmVUYWIgPT09ICdlJyA/ICdhY3RpdmUnIDogJyd9fVwiIChjbGljayk9XCJ0b2dnbGVUYWIoJ2UnKVwiPkVzdGFkw4PCrXN0aWNhczwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ7e2FjdGl2ZVRhYiA9PT0gJ2EnID8gJ2FjdGl2ZScgOiAnJ319XCIgKGNsaWNrKT1cInRvZ2dsZVRhYignYScpXCI+QWxpbmVhY2lvbmVzPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8IS0tIFNVTU1BUlkgLS0+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdW1tYXJ5IHRhYiB7e2FjdGl2ZVRhYiA9PT0gJ3MnIHx8IGFjdGl2ZVRhYiA9PT0gJ20nID8gJ2FjdGl2ZScgOiAnJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSBTdGF0IC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eVwiICpuZ0lmPVwibm90aGluZ0hhcHBlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEmdWFjdXRlO24gbm8gaGF5IGluY2lkZW5jaWFzIGVuIGVsIHBhcnRpZG88L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gU3RhdCBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCIgKm5nSWY9XCIhbm90aGluZ0hhcHBlblwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5IG9mIHBsYXlzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4ge3twbGF5Wyd0ZWFtLWlkJ10gPT09IGhvbWVUZWFtSWQgPyAnJyA6ICdyZXZlcnNlJ319XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7aWNvbihwbGF5WydldmVudC10ZXh0J10pfX1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPnt7cGxheS5taW51dGVzfX0nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twbGF5WydmaXJzdC1wbGF5ZXItbmFtZSddfX17e3BsYXlbJ3NlY29uZC1wbGF5ZXItbmFtZSddID8gKCcgLSAnICsgcGxheVsnc2Vjb25kLXBsYXllci1uYW1lJ10pIDogJyd9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInNob3dBbGwgJiYgIW5vdGhpbmdIYXBwZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cImFsbCgpXCI+Q2FyZ2FyIG3Dg8KhczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBFbmQgb2YgU3RhdCAtLT5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNUQVRTIC0tPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3RhdHMgdGFiIHt7YWN0aXZlVGFiID09PSAnZScgPyAnYWN0aXZlJyA6ICcnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIFN0YXQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZVwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gU3RhdCBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93XCIgKm5nRm9yPVwibGV0IGVzdGFkaXN0aWNhIG9mIGVzdGFkaXN0aWNhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIGxvY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRcIj57e2VzdGFkaXN0aWNhLmhvbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7ZXN0YWRpc3RpY2EubGFiZWx9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdmlzaXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0XCI+e3tlc3RhZGlzdGljYS52aXNpdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gRW5kIG9mIFN0YXQgLS0+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBBTElHTk1FTlRTIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ25tZW50cyB0YWIge3thY3RpdmVUYWIgPT09ICdhJyA/ICdhY3RpdmUnIDogJyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGVhbS1jaG9pY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiY2hhbmdlQWxpZ24odHJ1ZSlcIiBjbGFzcz1cInt7YWN0aXZlQWxpZ24gPyAnYWN0aXZlJyA6ICcnfX1cIj57e2RhdGFbJ2hvbWUtdGVhbSddWyd0ZWFtLW5hbWUnXX19PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiY2hhbmdlQWxpZ24oZmFsc2UpXCIgY2xhc3M9XCJ7eyFhY3RpdmVBbGlnbiA/ICdhY3RpdmUnIDogJyd9fVwiPnt7ZGF0YVsndmlzaXRpbmctdGVhbSddWyd0ZWFtLW5hbWUnXX19PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGJhbGwtZmllbGRfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RiYWxsLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb290YmFsbC1maWVsZF9sb2NhbFwiIHNyYz1cIi9hc3NldHMvZm9ybWFjaW9uX2xvY2FsXzM0My5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZVwiIHNyYz1cIi9hc3NldHMvZm9ybWFjaW9uX3Zpc2l0YW50ZV80MjIyLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IHRhYiBhbGlnbiB7e2FjdGl2ZUFsaWduID8gJ2FjdGl2ZScgOiAnJ319XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gVGVhbSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIEhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbHVtblwiPnt7aG9tZXRlYW1bJ3RlYW0taW5mbyddWyd0ZWFtLW5hbWUnXX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RW50cmVuYWRvcjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIENvbnRlbnQgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnRcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPkRUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGFnLWFyZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aG9tZXRlYW1bJ21hbmFnZXItaW5mbyddWydtYW5hZ2VyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKGhvbWV0ZWFtWydtYW5hZ2VyLWluZm8nXSlcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPlBvcnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3tob21lcGxheWVyc1snZ29hbGtlZXBlciddWzBdWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2hvbWVwbGF5ZXJzWydnb2Fsa2VlcGVyJ11bMF1bJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihob21lcGxheWVyc1snZ29hbGtlZXBlciddWzBdKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RGVmZW5zYXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgaG9tZXBsYXllcnNbJ2RlZmVuZGVyJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+TWVkaW9jYW1waXN0YXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgaG9tZXBsYXllcnNbJ21pZGZpZWxkZXInXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3twbGF5ZXJbJ3BsYXllci1udW1iZXInXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGFnLWFyZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cGxheWVyWydwbGF5ZXItbmFtZSddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwib25wbGF5ZXIocGxheWVyKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBTdWJIZWFkaW5nIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjb2x1bW5cIj5EZWxhbnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIiAqbmdGb3I9XCJsZXQgcGxheWVyIG9mIGhvbWVwbGF5ZXJzWydmb3J3YXJkJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIEVuZCBvZiBUZWFtIC0tPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGFiIGFsaWduIHt7IWFjdGl2ZUFsaWduID8gJ2FjdGl2ZScgOiAnJ319XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gVGVhbSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIEhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2hlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbHVtblwiPnt7dmlzaXR0ZWFtWyd0ZWFtLWluZm8nXVsndGVhbS1uYW1lJ119fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPkVudHJlbmFkb3I8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj5EVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Zpc2l0dGVhbVsnbWFuYWdlci1pbmZvJ11bJ21hbmFnZXItbmFtZSddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwib25wbGF5ZXIodmlzaXR0ZWFtWydtYW5hZ2VyLWluZm8nXSlcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPlBvcnRlcm9zPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uXCI+e3t2aXNpdHBsYXllcnNbJ2dvYWxrZWVwZXInXVswXVsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2aXNpdHBsYXllcnNbJ2dvYWxrZWVwZXInXVswXVsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHZpc2l0cGxheWVyc1snZ29hbGtlZXBlciddWzBdKVwiPlZlciBkZXRhbGxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gU3ViSGVhZGluZyAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY29sdW1uXCI+RGVmZW5zYXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgdmlzaXRwbGF5ZXJzWydkZWZlbmRlciddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj57e3BsYXllclsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twbGF5ZXJbJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihwbGF5ZXIpXCI+VmVyIGRldGFsbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPk1lZGlvY2FtcGlzdGFzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8IS0tIFRlYW0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcG9ydHMtdGFibGVfY29udGVudC1yb3dcIiAqbmdGb3I9XCJsZXQgcGxheWVyIG9mIHZpc2l0cGxheWVyc1snbWlkZmllbGRlciddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb25cIj57e3BsYXllclsncGxheWVyLW51bWJlciddfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctYXJnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twbGF5ZXJbJ3BsYXllci1uYW1lJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4gdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJvbnBsYXllcihwbGF5ZXIpXCI+VmVyIGRldGFsbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPCEtLSBUZWFtIFN1YkhlYWRpbmcgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BvcnRzLXRhYmxlX3N1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNvbHVtblwiPkRlbGFudGVyb3M8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwhLS0gVGVhbSBDb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50XCI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwb3J0cy10YWJsZV9jb250ZW50LXJvd1wiICpuZ0Zvcj1cImxldCBwbGF5ZXIgb2YgdmlzaXRwbGF5ZXJzWydmb3J3YXJkJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvblwiPnt7cGxheWVyWydwbGF5ZXItbnVtYmVyJ119fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1hcmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3BsYXllclsncGxheWVyLW5hbWUnXX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cIm9ucGxheWVyKHBsYXllcilcIj5WZXIgZGV0YWxsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIEVuZCBvZiBUZWFtIC0tPlxuICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiBcdDwvZGl2PlxuPC9kaXY+YFxuIiwiZXhwb3J0IGRlZmF1bHQgYFxuXG4ubWF0Y2gtaGVhZGVyIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1hdGNoLWhlYWRlcl90ZWFtcyB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0Y2gtaGVhZGVyX3RlYW0ge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3aWR0aDogNDUlO1xufVxuXG4ubWF0Y2gtaGVhZGVyX3RlYW1zIC5tYXRjaC1oZWFkZXJfdGVhbTpmaXJzdC1jaGlsZCB7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWF0Y2gtaGVhZGVyX3RlYW0gaDMge1xuXHRjb2xvcjogIzMwMzAzMDtcblx0Zm9udC1zaXplOiAxLjE1ZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubWF0Y2gtaGVhZGVyX3RlYW0gaDMge1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXJfdGVhbSBpbWcge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbjogMCAxMHB4O1xuXHR3aWR0aDogNDBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm1hdGNoLWhlYWRlcl90ZWFtIGltZyB7XG5cdFx0aGVpZ2h0OiAzNnB4O1xuXHRcdG1hcmdpbjogMCA1cHg7XG5cdFx0d2lkdGg6IDM2cHg7XG5cdH1cbn1cblxuLm1hdGNoLWhlYWRlcl9yZXN1bHRzIHtcblx0bWluLXdpZHRoOiA5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5tYXRjaC1oZWFkZXJfcmVzdWx0cyB7XG5cdFx0bWluLXdpZHRoOiA4MHB4O1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXJfcmVzdWx0cyBzcGFuIHtcblx0Zm9udC1zaXplOiAxLjRlbTtcblx0bWFyZ2luOiAwIDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5tYXRjaC1oZWFkZXJfcmVzdWx0cyBzcGFuIHtcblx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdG1hcmdpbjogMCA1cHg7XG5cdH1cbn1cblxuLm1hdGNoLWhlYWRlciAuc3RhdHVzIHtcblx0Y29sb3I6ICM5OTk7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IC44NWVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYXRjaC1oZWFkZXIgLnRvdXJuYW1lbnQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAuODVlbTtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0gXG5cbi5tYXRjaC1oZWFkZXIgdWwge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm1hdGNoLWhlYWRlciB1bCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdH1cbn1cblxuLm1hdGNoLWhlYWRlciB1bCBsaSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAwIDMwcHg7XG5cdHBhZGRpbmc6IDEwcHggMDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5tYXRjaC1oZWFkZXIgdWwgbGkge1xuXHRcdG1hcmdpbjogMCAxNXB4O1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cbn1cblxuLm1hdGNoLWhlYWRlciB1bCBsaS5hY3RpdmUge1xuXHRjb2xvcjogIzMwMzAzMDtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDdhZmY7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRhYi5hbGlnbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnRhYi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0YXRzIC5nZW5lcmFsLXdyYXBwZXIgaDIge1xuXHRmb250LXNpemU6IDEuMjVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDE2cHggMTRweDtcbn1cblxuLnN0YXRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgaDQge1xuXHRjb2xvcjogIzk5OTtcblx0Zm9udC1zaXplOiAxZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRtaW4td2lkdGg6IDgwcHg7XG59XG5cbi5zdGF0cyAuY29sdW1uIHNwYW4ge1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbjogMCAxMnB4IDAgMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cblxuLnN0YXRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLnN0YXQge1xuXHRjb2xvcjogIzMwMzAzMDtcblx0Zm9udC1zaXplOiAxZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnN0YXRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbiB7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0fVxufVxuXG4uc3RhdHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdzpudGgtb2YtdHlwZShldmVuKSB7XG5cdGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi5zdGF0cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc3VtbWFyeSAuZ2VuZXJhbC13cmFwcGVyIGgyIHtcblx0Zm9udC1zaXplOiAxLjI1ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdW1tYXJ5IC5jb2x1bW46bnRoLW9mLXR5cGUoMSkge1xuXHRjb2xvcjogIzAwMDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cge1xuXHRwYWRkaW5nOiAxNnB4IDE0cHg7XG59XG5cbi5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfaGVhZGluZyBoNCB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uc3VtbWFyeSAuY29sdW1uIHNwYW4ge1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbjogMCAxMnB4IDAgMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zdW1tYXJ5IC5jb2x1bW4ucmV2ZXJzZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLnN1bW1hcnkgLmNvbHVtbi5yZXZlcnNlIHNwYW4ge1xuXHRtYXJnaW46IDAgMCAwIDEycHg7XG59XG5cbi5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbiBpIHtcblx0bWFyZ2luOiAwIDE1cHggMCAwO1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW4ucmV2ZXJzZSBpIHtcblx0bWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMjhweDtcbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAubWludXRlIHtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtc2l6ZTogLjg1ZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgaW1nIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDZweDtcblx0fVxufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMSkge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW4gc3Ryb25nIHtcblx0Zm9udC1zaXplOiAxLjFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgxKSwgXG5cdC5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgyKSwgXG5cdC5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgxMCkge1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdH1cblxuXHQuc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMTApIHtcblx0XHRsaW5lLWhlaWdodDogMmVtO1xuXHR9XG59XG5cbi5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3c6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc3VtbWFyeSAuZW1wdHkgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogNTBweCBhdXRvIDIwcHg7XG59XG5cbi5zdW1tYXJ5IC5lbXB0eSBwIHtcbiAgY29sb3I6ICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5hbGlnbm1lbnRzIC5nZW5lcmFsLXdyYXBwZXIgaDIge1xuXHRmb250LXNpemU6IDEuMjVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9zdWJoZWFkaW5nIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVmZjA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX3N1YmhlYWRpbmcgaDUge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmFsaWdubWVudHMgLmZsYWctYXJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9mbGFnLWFyZy5zdmcpO1xufVxuXG4uYWxpZ25tZW50cyAuY29sdW1uOm50aC1vZi10eXBlKDEpIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZCB7XG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9jYW1wb19mdXRib2wuc3ZnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogODAlO1xuXHRoZWlnaHQ6IDIyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF93cmFwcGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF9sb2NhbCB7XG5cdGxlZnQ6IDEwJTtcbn1cblxuLmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdHJpZ2h0OiAxMCU7XG59XG5cbi5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF9sb2NhbCwgXG4uYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfdmlzaXRhbnRlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE0JTtcblx0d2lkdGg6IDQwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuXHQuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfbG9jYWwsIFxuICAuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfdmlzaXRhbnRlIHtcblx0XHR0b3A6IDIwJTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX2xvY2FsLCBcbiAgLmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdFx0dG9wOiAyOCU7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZCB7XG5cdFx0YmFja2dyb3VuZC1zaXplOiA5MCU7XG5cdH1cblxuXHQuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfbG9jYWwge1xuXHRcdGxlZnQ6IDglO1xuXHR9XG5cblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdFx0cmlnaHQ6IDglO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHQuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGQge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHdpZHRoOiAzNDBweDtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF9sb2NhbCwgXG4gIC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF92aXNpdGFudGUge1xuXHRcdHRvcDogMzclO1xuXHR9XG5cblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX2xvY2FsIHtcblx0XHRsZWZ0OiA3LjUlO1xuXHR9XG5cblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdFx0cmlnaHQ6IDcuNSU7XG5cdH1cbn1cblxuLmFsaWdubWVudHMgLnRlYW0tY2hvaWNlIHtcblx0ZGlzcGxheTogbm9uZTtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ25tZW50cyAudGVhbS1jaG9pY2UgbGkge1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGNvbG9yOiAjOTk5O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0cGFkZGluZzogMTRweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR3aWR0aDogNTAlO1xufVxuXG4uYWxpZ25tZW50cyAudGVhbS1jaG9pY2UgbGk6aG92ZXIge1xuXHRjb2xvcjogIzMwMzAzMDtcbn1cblxuLmFsaWdubWVudHMgLnRlYW0tY2hvaWNlIGxpLmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGNvbG9yOiAjMzAzMDMwO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHQuYWxpZ25tZW50cyAudGVhbS1jaG9pY2Uge1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cbn1cblxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2hlYWRpbmcgaDQge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmFsaWdubWVudHMgLmNvbHVtbiBzcGFuIHtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuXHRjb2xvcjogIzMwMzAzMDtcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiAwIDEycHggMCAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyB7XG5cdHBhZGRpbmc6IDE4cHggMTRweDtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEpIHtcblx0d2lkdGg6IDgwJTtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDIpIHtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuXHR3aWR0aDogMjAlO1xufVxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGkge1xuXHRoZWlnaHQ6IDE0cHg7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBhIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2VlZWZmMDsgXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtc2l6ZTogLjc1ZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdHBhZGRpbmc6IDhweCAxMnB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGE6aG92ZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGEge1xuXHRcdGJvcmRlcjogMDtcblx0XHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG1heC13aWR0aDogNnB4O1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtaW5kZW50OiAtOTk5OTk5OTk5cHg7XG5cdH1cblxuXHQuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGE6aG92ZXIge1xuXHRcdGJvcmRlcjogMDtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgYTo6YWZ0ZXIge1xuXHRcdGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2NoZXZyb24tcmlnaHQuc3ZnJyk7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogNnB4O1xuXHR9XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgaW1nIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAyOHB4O1xufVxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5wb3NpdGlvbiB7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IC43NWVtO1xuXHRsaW5lLWhlaWdodDogMS45ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGltZyB7XG5cdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XG5cdH1cbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEpIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uIHN0cm9uZyB7XG5cdGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMSksIFxuICAuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMiksIFxuICAuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMTApIHtcblx0XHRmb250LXNpemU6IDEuMmVtO1xuXHR9XG5cblx0LmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEwKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDJlbTtcblx0fVxufVxuXG5gXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZveC1wYXJ0aWRvLmNvbXBvbmVudC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vZm94LXBhcnRpZG8uY29tcG9uZW50LmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZveC1wYXJ0aWRvJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlICsgJycsXG4gIHN0eWxlczogW3N0eWxlICsgJyddXG59KVxuZXhwb3J0IGNsYXNzIEZveFBhcnRpZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93dGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBjb21wZXRpdGlvbmlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWF0Y2hpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9ICdlcyc7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nID0gJ2FyJztcblxuICBASW5wdXQoKSBvbnN1bW1hcnk6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbm1pbnRvbWluOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25zdGF0czogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uYWxpZ25tZW50czogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9ucGxheWVyOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25pbml0OiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lcnJvcjogRnVuY3Rpb247XG5cbiAgdGl0bGUgPSAnUGFydGlkbyc7XG4gIGFjdGl2ZVRhYiA9ICdzJ1xuICBhY3RpdmVBbGlnbiA9IHRydWU7XG4gIGhhc0VuZGVkID0gZmFsc2VcbiAgaGFzTm90U3RhcnRlZCA9IGZhbHNlXG4gIG5vdGhpbmdIYXBwZW4gPSBmYWxzZVxuXG4gIC8vIEhFQURFUiBQUk9QU1xuICBkYXRhID0ge1xuICAgICdob21lLXRlYW0nOiB7fSxcbiAgICAndmlzaXRpbmctdGVhbSc6IHt9LFxuICAgICdnYW1lLXN0YXRlJzoge31cbiAgfVxuXG4gIC8vIFNVTU1BUlkgUFJPUFNcbiAgc3RhdHMgPSB7XG4gICAgcGxheXM6IFtdXG4gIH1cbiAgcGxheXMgPSBbXVxuICBob21lVGVhbUlkID0gJydcbiAgdmlzaXRpbmdUZWFtSWQgPSAnJ1xuICBzaG93QWxsID0gdHJ1ZVxuXG4gIC8vIFNUQVRTIFBST1BTXG4gIGVzdGFkaXN0aWNhcyA9IFtdXG4gIG9iamVjdEtleXMgPSBPYmplY3Qua2V5c1xuICBwYXJzZUludCA9IE51bWJlci5wYXJzZUludFxuXG4gIC8vIEFMSUdOTUVOVFMgUFJPUFNcbiAgaG9tZXRlYW0gPSB7XG4gICAgJ3RlYW0taW5mbyc6IHt9LFxuICAgICdtYW5hZ2VyLWluZm8nOiB7fVxuICB9XG4gIGhvbWVwbGF5ZXJzID0ge1xuICAgIGdvYWxrZWVwZXI6IFtcbiAgICAgIHt9XG4gICAgXSxcbiAgICBtaWRmaWVsZGVyOiBbXSxcbiAgICBkZWZlbmRlcjogW10sXG4gICAgZm9yd2FyZDogW11cbiAgfVxuICB2aXNpdHRlYW0gPSB7XG4gICAgJ3RlYW0taW5mbyc6IHt9LFxuICAgICdtYW5hZ2VyLWluZm8nOiB7fVxuICB9XG4gIHZpc2l0cGxheWVycyA9IHtcbiAgICBnb2Fsa2VlcGVyOiBbXG4gICAgICB7fVxuICAgIF0sXG4gICAgbWlkZmllbGRlcjogW10sXG4gICAgZGVmZW5kZXI6IFtdLFxuICAgIGZvcndhcmQ6IFtdXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gVXNlZnVsbCB2YXJpYWJsZXNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAvLyBBUEkgUGFyYW1zIHNldHVwXG4gICAgaWYgKF90aGlzLmNvdW50cnkpIHBhcmFtc1snY291bnRyeS1jb2RlJ10gPSBfdGhpcy5jb3VudHJ5O1xuICAgIGlmIChfdGhpcy5tYXRjaGlkKSBwYXJhbXNbJ21hdGNoLWlkJ10gPSBfdGhpcy5tYXRjaGlkO1xuXG5cbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF9wbGF5X3RvX3BsYXlfbGl2ZScsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwKSB7XG5cbiAgICAgIC8vIEhFQURFUiBEQVRBXG4gICAgICBfdGhpcy5kYXRhID0gcmVzcC5kYXRhXG5cbiAgICAgIC8vIFNVTU1BUlkgREFUQVxuICAgICAgX3RoaXMuc3RhdHMgPSByZXNwLmRhdGFcbiAgICAgIF90aGlzLnBsYXlzID0gcmVzcC5kYXRhLnBsYXlzLnNwbGljZSgwLCAxMClcbiAgICAgIF90aGlzLnZpc2l0aW5nVGVhbUlkID0gcmVzcC5kYXRhWyd2aXNpdGluZy10ZWFtJ10uX2lkXG4gICAgICBfdGhpcy5ob21lVGVhbUlkID0gcmVzcC5kYXRhWydob21lLXRlYW0nXS5faWRcblxuICAgICAgX3RoaXMubm90aGluZ0hhcHBlbiA9IF90aGlzLnBsYXlzLmxlbmd0aCA9PT0gMDtcbiAgICAgIF90aGlzLmhhc0VuZGVkID0gcmVzcC5kYXRhWydnYW1lLXN0YXRlJ11bJ3N0YXR1cyddID09PSAnZmluYWwnO1xuICAgICAgX3RoaXMuaGFzTm90U3RhcnRlZCA9IHJlc3AuZGF0YVsnZ2FtZS1zdGF0ZSddWydzdGF0dXMnXSAhPT0gJ2ZpbmFsJyAmJiByZXNwLmRhdGFbJ2dhbWUtc3RhdGUnXVsnbGl2ZS1taW51dGUnXSA9PT0gMFxuICAgICAgaWYgKCFfdGhpcy5oYXNFbmRlZCAmJiByZXNwLmRhdGFbJ2dhbWUtc3RhdGUnXVsnbGl2ZS1taW51dGUnXSA8PSAxNSkgX3RoaXMuYWxsKClcblxuICAgICAgaWYgKF90aGlzLmhhc05vdFN0YXJ0ZWQpIF90aGlzLmFjdGl2ZVRhYiA9ICdhJ1xuICAgICAgZWxzZSBpZiAoX3RoaXMuaGFzRW5kZWQpIF90aGlzLmFjdGl2ZVRhYiA9ICdzJ1xuICAgICAgZWxzZSBpZiAoX3RoaXMubm90aGluZ0hhcHBlbikgX3RoaXMuYWN0aXZlVGFiID0gJ20nXG5cbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9zdGF0cy5mb3hzcG9ydHNsYS5jb20vc3RhdHMvZ2V0X3N0YXRpc3RpY3NfbGl2ZScsIHtcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXG4gICAgICAgIC8vIFNUQVRTIERBVEFcbiAgICAgICAgX3RoaXMuZXN0YWRpc3RpY2FzID0gcmVzcC5kYXRhWydob21lLXRlYW0nXS5tYXAoIGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob21lOiBpdGVtWydzdGF0cy12YWx1ZSddLFxuICAgICAgICAgICAgbGFiZWw6IF90aGlzLmxhYmVsKGl0ZW1bJ3N0YXRzLWxhYmVsJ10pLFxuICAgICAgICAgICAgdmlzaXQ6IHJlc3AuZGF0YVsndmlzaXRpbmctdGVhbSddLmZpbmQodiA9PiB2WydzdGF0cy1sYWJlbCddID09IGl0ZW1bJ3N0YXRzLWxhYmVsJ10pWydzdGF0cy12YWx1ZSddXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9zdGF0cy5mb3hzcG9ydHNsYS5jb20vc3RhdHMvZ2V0X3RlYW1zX2RldGFpbCcsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICdjb21wZXRpdGlvbi1pZCc6IF90aGlzLmNvbXBldGl0aW9uaWQsXG4gICAgICAgICAgICAndGVhbS1pZCc6IF90aGlzLmRhdGFbJ2hvbWUtdGVhbSddWydfaWQnXSxcbiAgICAgICAgICAgICdjb3VudHJ5LWNvZGUnOiBfdGhpcy5jb3VudHJ5XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgICAgIF90aGlzLmhvbWV0ZWFtID0gcmVzcC5kYXRhXG5cbiAgICAgICAgICByZXNwLmRhdGEucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyLnBvc2l0aW9uID09PSAnZ29hbGtlZXBlcicpIF90aGlzLmhvbWVwbGF5ZXJzW3BsYXllci5wb3NpdGlvbl1bMF0gPSBwbGF5ZXJcbiAgICAgICAgICAgIGVsc2UgX3RoaXMuaG9tZXBsYXllcnNbcGxheWVyLnBvc2l0aW9uXS5wdXNoKHBsYXllcilcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF90ZWFtc19kZXRhaWwnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgJ2NvbXBldGl0aW9uLWlkJzogX3RoaXMuY29tcGV0aXRpb25pZCxcbiAgICAgICAgICAgICAgJ3RlYW0taWQnOiBfdGhpcy5kYXRhWyd2aXNpdGluZy10ZWFtJ11bJ19pZCddLFxuICAgICAgICAgICAgICAnY291bnRyeS1jb2RlJzogX3RoaXMuY291bnRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXG4gICAgICAgICAgICBfdGhpcy52aXNpdHRlYW0gPSByZXNwLmRhdGFcblxuICAgICAgICAgICAgcmVzcC5kYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgICBpZiAocGxheWVyLnBvc2l0aW9uID09PSAnZ29hbGtlZXBlcicpIF90aGlzLnZpc2l0cGxheWVyc1twbGF5ZXIucG9zaXRpb25dWzBdID0gcGxheWVyXG4gICAgICAgICAgICAgIGVsc2UgX3RoaXMudmlzaXRwbGF5ZXJzW3BsYXllci5wb3NpdGlvbl0ucHVzaChwbGF5ZXIpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmluaXQpIF90aGlzLm9uaW5pdChfdGhpcy5kYXRhKTtcblxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub25lcnJvcikgX3RoaXMub25lcnJvcihlcnIpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBpZiAoX3RoaXMub25lcnJvcikgX3RoaXMub25lcnJvcihlcnIpO1xuICAgICAgICB9KVxuXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBpZiAoX3RoaXMub25lcnJvcikgX3RoaXMub25lcnJvcihlcnIpO1xuICAgICAgfSlcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlQWxpZ24gKGhvbWUpIHtcbiAgICB0aGlzLmFjdGl2ZUFsaWduID0gaG9tZTtcbiAgfVxuXG4gIHRvZ2dsZVRhYih0YWIpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICBpZiAodGFiID09PSBcInNcIikge1xuICAgICAgdGhpcy5vbnN1bW1hcnkodGhpcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2EnKSB7XG4gICAgICB0aGlzLm9uYWxpZ25tZW50cyh0aGlzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSAnZScpIHtcbiAgICAgIHRoaXMub25zdGF0cyh0aGlzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSAnbScpIHtcbiAgICAgIHRoaXMub25taW50b21pbih0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGFsbCgpIHtcbiAgICB0aGlzLnBsYXlzID0gdGhpcy5zdGF0cy5wbGF5c1xuICAgIHRoaXMuc2hvd0FsbCA9IGZhbHNlXG4gIH1cblxuICBpY29uKHRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3N0YXJ0LWhhbGYnOiAnaWNvbi1iYWxsJyxcbiAgICAgICdmb3VsJzogJ2ljb24tYmFsbCcsXG4gICAgICAnZnJlZS1raWNrJzogJ2ljb24tc2hvZScsXG4gICAgICAnc2hvdC1vbi1nb2FsJzogJ2ljb24tYmFsbCcsXG4gICAgICAnY29ybmVyLWtpY2snOiAnaWNvbi1zaG9lJyxcbiAgICAgICdjcm9zcyc6ICdpY29uLWJhbGwnLFxuICAgICAgJ29mZnNpZGUnOiAnaWNvbi1mbGFnJyxcbiAgICAgICd0aHJvdy1pbic6ICdpY29uLWJhbGwnLFxuICAgICAgJ2dvYWwnOiAnaWNvbi1iYWxsJyxcbiAgICAgICd5ZWxsb3ctY2FyZCc6ICdpY29uLXllbGxvd19jYXJkJyxcbiAgICAgICdzaG90JzogJ2ljb24tYmFsbCcsXG4gICAgICAnZ29hbC1raWNrJzogJ2ljb24tc2hvZScsXG4gICAgICAncmVkLWNhcmQnOiAnaWNvbi1iYWxsJyxcbiAgICAgICdoYWxmLW92ZXInOiAnaWNvbi1iYWxsJyxcbiAgICAgICdzdWJzdGl0dXRpb24nOiAnaWNvbi1mbGFnJyxcbiAgICAgICdnYW1lLW92ZXInOiAnaWNvbi1iYWxsJ1xuICAgIH1bdGV4dF07XG4gIH1cblxuICBsYWJlbCAodGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAnZ29hbCc6ICdHb2xlcycsXG4gICAgICAneWVsbG93LWNhcmQnOiAnVGFyamV0YXMgQW1hcmlsbGFzJyxcbiAgICAgICdwbGF5LWNsZWFyJzogJ0p1Z2FkYXMgQ2xhcmFzJyxcbiAgICAgICdjb3JuZXIta2ljayc6ICdUaXJvcyBkZSBlc3F1aW5hJyxcbiAgICAgICdjcm9zcyc6ICdQYXNlcycsXG4gICAgICAncmVkLWNhcmQnOiAnVGFyamV0YXMgUm9qYXMnLFxuICAgICAgJ2ZvdWwnOiAnRmFsdGFzJyxcbiAgICAgICdmcmVlLWtpY2snOiAnVGlyb3MgTGlicmVzJyxcbiAgICAgICdnYW1lLW92ZXInOiAnRmluYWwgZGUganVlZ28nLFxuICAgICAgJ2hhbGYtb3Zlcic6ICdNZWRpbyB0aWVtcG8nLFxuICAgICAgJ2luanVyeSc6ICdMZXNpb25lcycsXG4gICAgICAnb2Zmc2lkZSc6ICdPZmZzaWRlcycsXG4gICAgICAncGVuYWx0aS1vayc6ICdQZW5hbGVzIGNvbnZlcnRpZG9zJyxcbiAgICAgICdwZW5hbHRpLW5vdC1vayc6ICdQZW5hbGVzIGVycmFkb3MnLFxuICAgICAgJ3Nob3QnOiAnVGlyb3MnLFxuICAgICAgJ3Nob3Qtb24tZ29hbCc6ICdUaXJvcyBhIGdvbCcsXG4gICAgICAnc3RhcnQtaGFsZic6ICdQcmltZXJhIG1pdGFkJyxcbiAgICAgICdzdWJzdGl0dXRpb24nOiAnU3VzdGl0dWNpb25lcycsXG4gICAgICAnb3duLWdvYWwnOiAnR29sZXMgZW4gY29udHJhJyxcbiAgICAgICdnb2FsLWtpY2snOiAnU2FxdWVzIGRlIGFyY28nLFxuICAgICAgJ3Rocm93LWluJzogJ0xhdGVyYWxlcycsXG4gICAgICAnc2hvdG91dC1nb2FsJzogJ1Rpcm9zIGFsIGFyY28nLFxuICAgICAgJ3Nob3RvdXQtc2F2ZSc6ICdBdGFqYWRhcycsXG4gICAgICAnc2hvdG91dCBtaXNzJzogJ1Rpcm9zIGFmdWVyYSdcbiAgICB9W3RleHRdO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm94UGFydGlkb0NvbXBvbmVudCB9IGZyb20gJy4vZm94LXBhcnRpZG8uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3hQYXJ0aWRvQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEZveFBhcnRpZG9Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3hQYXJ0aWRvTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJhUixDQUFBOzs7Ozs7QUMzYVAsWUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFqQmQsQ0FBQTs7Ozs7O0FDcmpCRDtJQWdGRTt5QkFyRThCLElBQUk7NkJBQ0QsRUFBRTt1QkFDUixFQUFFO29CQUNMLElBQUk7bUJBQ0wsQ0FBQzt1QkFDRyxJQUFJO3FCQVV2QixTQUFTO3lCQUNMLEdBQUc7MkJBQ0QsSUFBSTt3QkFDUCxLQUFLOzZCQUNBLEtBQUs7NkJBQ0wsS0FBSzs7b0JBR2Q7WUFDTCxXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFlBQVksRUFBRSxFQUFFO1NBQ2pCOztxQkFHTztZQUNOLEtBQUssRUFBRSxFQUFFO1NBQ1Y7cUJBQ08sRUFBRTswQkFDRyxFQUFFOzhCQUNFLEVBQUU7dUJBQ1QsSUFBSTs7NEJBR0MsRUFBRTswQkFDSixNQUFNLENBQUMsSUFBSTt3QkFDYixNQUFNLENBQUMsUUFBUTs7d0JBR2Y7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLGNBQWMsRUFBRSxFQUFFO1NBQ25COzJCQUNhO1lBQ1osVUFBVSxFQUFFO2dCQUNWLEVBQUU7YUFDSDtZQUNELFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtTQUNaO3lCQUNXO1lBQ1YsV0FBVyxFQUFFLEVBQUU7WUFDZixjQUFjLEVBQUUsRUFBRTtTQUNuQjs0QkFDYztZQUNiLFVBQVUsRUFBRTtnQkFDVixFQUFFO2FBQ0g7WUFDRCxVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWjtLQUVlOzs7O0lBRWhCLFFBQVE7O1FBRU4sdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQix1QkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOztRQUdsQixJQUFJLEtBQUssQ0FBQyxPQUFPO1lBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDMUQsSUFBSSxLQUFLLENBQUMsT0FBTztZQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBR3RELEtBQUssQ0FBQyxHQUFHLENBQUMsMkRBQTJELEVBQUU7WUFDckUsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTs7WUFHbkIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBOztZQUd0QixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUE7WUFDckQsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtZQUU3QyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssT0FBTyxDQUFDO1lBQy9ELEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO2dCQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUVoRixJQUFJLEtBQUssQ0FBQyxhQUFhO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2lCQUN6QyxJQUFJLEtBQUssQ0FBQyxRQUFRO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2lCQUN6QyxJQUFJLEtBQUssQ0FBQyxhQUFhO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO1lBRW5ELEtBQUssQ0FBQyxHQUFHLENBQUMseURBQXlELEVBQUU7Z0JBQ25FLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7O2dCQUduQixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUk7b0JBQ25ELE9BQU87d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQ3pCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO3FCQUNwRyxDQUFBO2lCQUNGLENBQUMsQ0FBQztnQkFHSCxLQUFLLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxFQUFFO29CQUNoRSxNQUFNLEVBQUU7d0JBQ04sZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGFBQWE7d0JBQ3JDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDekMsY0FBYyxFQUFFLEtBQUssQ0FBQyxPQUFPO3FCQUM5QjtpQkFDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtvQkFFbkIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO29CQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTt3QkFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFlBQVk7NEJBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFBOzs0QkFDL0UsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO3FCQUNyRCxDQUFDLENBQUE7b0JBR0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsRUFBRTt3QkFDaEUsTUFBTSxFQUFFOzRCQUNOLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxhQUFhOzRCQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQzdDLGNBQWMsRUFBRSxLQUFLLENBQUMsT0FBTzt5QkFDOUI7cUJBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7d0JBRW5CLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTt3QkFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07NEJBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxZQUFZO2dDQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTs7Z0NBQ2hGLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDdEQsQ0FBQyxDQUFBO3dCQUdGLElBQUksS0FBSyxDQUFDLE1BQU07NEJBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBRTVDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRzt3QkFDVixJQUFJLEtBQUssQ0FBQyxPQUFPOzRCQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3ZDLENBQUMsQ0FBQTtpQkFFSCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7b0JBQ1YsSUFBSSxLQUFLLENBQUMsT0FBTzt3QkFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QyxDQUFDLENBQUE7YUFFSCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7Z0JBQ1YsSUFBSSxLQUFLLENBQUMsT0FBTztvQkFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQTtTQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztZQUNWLElBQUksS0FBSyxDQUFDLE9BQU87Z0JBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QyxDQUFDLENBQUE7S0FDSDs7Ozs7SUFFRCxXQUFXLENBQUUsSUFBSTtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3pCOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7S0FDRjs7OztJQUVELEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0tBQ3JCOzs7OztJQUVELElBQUksQ0FBQyxJQUFJO1FBQ1AsT0FBTztZQUNMLFlBQVksRUFBRSxXQUFXO1lBQ3pCLE1BQU0sRUFBRSxXQUFXO1lBQ25CLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLGFBQWEsRUFBRSxXQUFXO1lBQzFCLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLE1BQU0sRUFBRSxXQUFXO1lBQ25CLGFBQWEsRUFBRSxrQkFBa0I7WUFDakMsTUFBTSxFQUFFLFdBQVc7WUFDbkIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNUOzs7OztJQUVELEtBQUssQ0FBRSxJQUFJO1FBQ1QsT0FBTztZQUNMLE1BQU0sRUFBRSxPQUFPO1lBQ2YsYUFBYSxFQUFFLG9CQUFvQjtZQUNuQyxZQUFZLEVBQUUsZ0JBQWdCO1lBQzlCLGFBQWEsRUFBRSxrQkFBa0I7WUFDakMsT0FBTyxFQUFFLE9BQU87WUFDaEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsY0FBYztZQUMzQixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsZ0JBQWdCLEVBQUUsaUJBQWlCO1lBQ25DLE1BQU0sRUFBRSxPQUFPO1lBQ2YsY0FBYyxFQUFFLGFBQWE7WUFDN0IsWUFBWSxFQUFFLGVBQWU7WUFDN0IsY0FBYyxFQUFFLGVBQWU7WUFDL0IsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLGNBQWMsRUFBRSxlQUFlO1lBQy9CLGNBQWMsRUFBRSxVQUFVO1lBQzFCLGNBQWMsRUFBRSxjQUFjO1NBQy9CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDVDs7O1lBblBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsUUFBUSxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDckI7Ozs7OzBCQUVFLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7Ozs7QUN4QlI7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtpQkFDcEI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9