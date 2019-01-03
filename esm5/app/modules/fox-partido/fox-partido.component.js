/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import template from './fox-partido.component.html';
import style from './fox-partido.component.css';
import axios from 'axios';
var FoxPartidoComponent = /** @class */ (function () {
    function FoxPartidoComponent() {
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
    FoxPartidoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Usefull variables
        var /** @type {?} */ _this = this;
        var /** @type {?} */ params = {};
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
                _this.estadisticas = resp.data['home-team'].map(function (item) {
                    return {
                        home: item['stats-value'],
                        label: _this.label(item['stats-label']),
                        visit: resp.data['visiting-team'].find(function (v) { return v['stats-label'] == item['stats-label']; })['stats-value']
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
                    resp.data.players.forEach(function (player) {
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
                        resp.data.players.forEach(function (player) {
                            if (player.position === 'goalkeeper')
                                _this.visitplayers[player.position][0] = player;
                            else
                                _this.visitplayers[player.position].push(player);
                        });
                        if (_this.oninit)
                            _this.oninit(_this.data);
                    }).catch(function (err) {
                        if (_this.onerror)
                            _this.onerror(err);
                    });
                }).catch(function (err) {
                    if (_this.onerror)
                        _this.onerror(err);
                });
            }).catch(function (err) {
                if (_this.onerror)
                    _this.onerror(err);
            });
        }).catch(function (err) {
            if (_this.onerror)
                _this.onerror(err);
        });
    };
    /**
     * @param {?} home
     * @return {?}
     */
    FoxPartidoComponent.prototype.changeAlign = /**
     * @param {?} home
     * @return {?}
     */
    function (home) {
        this.activeAlign = home;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    FoxPartidoComponent.prototype.toggleTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
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
    };
    /**
     * @return {?}
     */
    FoxPartidoComponent.prototype.all = /**
     * @return {?}
     */
    function () {
        this.plays = this.stats.plays;
        this.showAll = false;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    FoxPartidoComponent.prototype.icon = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
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
    };
    /**
     * @param {?} text
     * @return {?}
     */
    FoxPartidoComponent.prototype.label = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
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
    };
    FoxPartidoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-fox-partido',
                    template: template + '',
                    styles: [style + '']
                },] },
    ];
    /** @nocollapse */
    FoxPartidoComponent.ctorParameters = function () { return []; };
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
    return FoxPartidoComponent;
}());
export { FoxPartidoComponent };
function FoxPartidoComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FoxPartidoComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FoxPartidoComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FoxPartidoComponent.propDecorators;
    /** @type {?} */
    FoxPartidoComponent.prototype.showtitle;
    /** @type {?} */
    FoxPartidoComponent.prototype.competitionid;
    /** @type {?} */
    FoxPartidoComponent.prototype.matchid;
    /** @type {?} */
    FoxPartidoComponent.prototype.lang;
    /** @type {?} */
    FoxPartidoComponent.prototype.max;
    /** @type {?} */
    FoxPartidoComponent.prototype.country;
    /** @type {?} */
    FoxPartidoComponent.prototype.onsummary;
    /** @type {?} */
    FoxPartidoComponent.prototype.onmintomin;
    /** @type {?} */
    FoxPartidoComponent.prototype.onstats;
    /** @type {?} */
    FoxPartidoComponent.prototype.onalignments;
    /** @type {?} */
    FoxPartidoComponent.prototype.onplayer;
    /** @type {?} */
    FoxPartidoComponent.prototype.oninit;
    /** @type {?} */
    FoxPartidoComponent.prototype.onerror;
    /** @type {?} */
    FoxPartidoComponent.prototype.title;
    /** @type {?} */
    FoxPartidoComponent.prototype.activeTab;
    /** @type {?} */
    FoxPartidoComponent.prototype.activeAlign;
    /** @type {?} */
    FoxPartidoComponent.prototype.hasEnded;
    /** @type {?} */
    FoxPartidoComponent.prototype.hasNotStarted;
    /** @type {?} */
    FoxPartidoComponent.prototype.nothingHappen;
    /** @type {?} */
    FoxPartidoComponent.prototype.data;
    /** @type {?} */
    FoxPartidoComponent.prototype.stats;
    /** @type {?} */
    FoxPartidoComponent.prototype.plays;
    /** @type {?} */
    FoxPartidoComponent.prototype.homeTeamId;
    /** @type {?} */
    FoxPartidoComponent.prototype.visitingTeamId;
    /** @type {?} */
    FoxPartidoComponent.prototype.showAll;
    /** @type {?} */
    FoxPartidoComponent.prototype.estadisticas;
    /** @type {?} */
    FoxPartidoComponent.prototype.objectKeys;
    /** @type {?} */
    FoxPartidoComponent.prototype.parseInt;
    /** @type {?} */
    FoxPartidoComponent.prototype.hometeam;
    /** @type {?} */
    FoxPartidoComponent.prototype.homeplayers;
    /** @type {?} */
    FoxPartidoComponent.prototype.visitteam;
    /** @type {?} */
    FoxPartidoComponent.prototype.visitplayers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXBhcnRpZG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm94LXBhcnRpZG8vIiwic291cmNlcyI6WyJhcHAvbW9kdWxlcy9mb3gtcGFydGlkby9mb3gtcGFydGlkby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sUUFBUSxNQUFNLDhCQUE4QixDQUFBO0FBQ25ELE9BQU8sS0FBSyxNQUFNLDZCQUE2QixDQUFBO0FBQy9DLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTs7SUE2RXZCO3lCQXJFOEIsSUFBSTs2QkFDRCxFQUFFO3VCQUNSLEVBQUU7b0JBQ0wsSUFBSTttQkFDTCxDQUFDO3VCQUNHLElBQUk7cUJBVXZCLFNBQVM7eUJBQ0wsR0FBRzsyQkFDRCxJQUFJO3dCQUNQLEtBQUs7NkJBQ0EsS0FBSzs2QkFDTCxLQUFLOztvQkFHZDtZQUNMLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsWUFBWSxFQUFFLEVBQUU7U0FDakI7O3FCQUdPO1lBQ04sS0FBSyxFQUFFLEVBQUU7U0FDVjtxQkFDTyxFQUFFOzBCQUNHLEVBQUU7OEJBQ0UsRUFBRTt1QkFDVCxJQUFJOzs0QkFHQyxFQUFFOzBCQUNKLE1BQU0sQ0FBQyxJQUFJO3dCQUNiLE1BQU0sQ0FBQyxRQUFROzt3QkFHZjtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsY0FBYyxFQUFFLEVBQUU7U0FDbkI7MkJBQ2E7WUFDWixVQUFVLEVBQUU7Z0JBQ1YsRUFBRTthQUNIO1lBQ0QsVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1NBQ1o7eUJBQ1c7WUFDVixXQUFXLEVBQUUsRUFBRTtZQUNmLGNBQWMsRUFBRSxFQUFFO1NBQ25COzRCQUNjO1lBQ2IsVUFBVSxFQUFFO2dCQUNWLEVB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LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9mb3gtcGFydGlkby5jb21wb25lbnQuaHRtbCdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZveC1wYXJ0aWRvLmNvbXBvbmVudC5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3gtcGFydGlkbycsXG4gIHRlbXBsYXRlOiB0ZW1wbGF0ZSArICcnLFxuICBzdHlsZXM6IFtzdHlsZSArICcnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3hQYXJ0aWRvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd3RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgY29tcGV0aXRpb25pZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1hdGNoaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSAnZXMnO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZyA9ICdhcic7XG5cbiAgQElucHV0KCkgb25zdW1tYXJ5OiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25taW50b21pbjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uc3RhdHM6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbmFsaWdubWVudHM6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbnBsYXllcjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uaW5pdDogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZXJyb3I6IEZ1bmN0aW9uO1xuXG4gIHRpdGxlID0gJ1BhcnRpZG8nO1xuICBhY3RpdmVUYWIgPSAncydcbiAgYWN0aXZlQWxpZ24gPSB0cnVlO1xuICBoYXNFbmRlZCA9IGZhbHNlXG4gIGhhc05vdFN0YXJ0ZWQgPSBmYWxzZVxuICBub3RoaW5nSGFwcGVuID0gZmFsc2VcblxuICAvLyBIRUFERVIgUFJPUFNcbiAgZGF0YSA9IHtcbiAgICAnaG9tZS10ZWFtJzoge30sXG4gICAgJ3Zpc2l0aW5nLXRlYW0nOiB7fSxcbiAgICAnZ2FtZS1zdGF0ZSc6IHt9XG4gIH1cblxuICAvLyBTVU1NQVJZIFBST1BTXG4gIHN0YXRzID0ge1xuICAgIHBsYXlzOiBbXVxuICB9XG4gIHBsYXlzID0gW11cbiAgaG9tZVRlYW1JZCA9ICcnXG4gIHZpc2l0aW5nVGVhbUlkID0gJydcbiAgc2hvd0FsbCA9IHRydWVcblxuICAvLyBTVEFUUyBQUk9QU1xuICBlc3RhZGlzdGljYXMgPSBbXVxuICBvYmplY3RLZXlzID0gT2JqZWN0LmtleXNcbiAgcGFyc2VJbnQgPSBOdW1iZXIucGFyc2VJbnRcblxuICAvLyBBTElHTk1FTlRTIFBST1BTXG4gIGhvbWV0ZWFtID0ge1xuICAgICd0ZWFtLWluZm8nOiB7fSxcbiAgICAnbWFuYWdlci1pbmZvJzoge31cbiAgfVxuICBob21lcGxheWVycyA9IHtcbiAgICBnb2Fsa2VlcGVyOiBbXG4gICAgICB7fVxuICAgIF0sXG4gICAgbWlkZmllbGRlcjogW10sXG4gICAgZGVmZW5kZXI6IFtdLFxuICAgIGZvcndhcmQ6IFtdXG4gIH1cbiAgdmlzaXR0ZWFtID0ge1xuICAgICd0ZWFtLWluZm8nOiB7fSxcbiAgICAnbWFuYWdlci1pbmZvJzoge31cbiAgfVxuICB2aXNpdHBsYXllcnMgPSB7XG4gICAgZ29hbGtlZXBlcjogW1xuICAgICAge31cbiAgICBdLFxuICAgIG1pZGZpZWxkZXI6IFtdLFxuICAgIGRlZmVuZGVyOiBbXSxcbiAgICBmb3J3YXJkOiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFVzZWZ1bGwgdmFyaWFibGVzXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgLy8gQVBJIFBhcmFtcyBzZXR1cFxuICAgIGlmIChfdGhpcy5jb3VudHJ5KSBwYXJhbXNbJ2NvdW50cnktY29kZSddID0gX3RoaXMuY291bnRyeTtcbiAgICBpZiAoX3RoaXMubWF0Y2hpZCkgcGFyYW1zWydtYXRjaC1pZCddID0gX3RoaXMubWF0Y2hpZDtcblxuXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3N0YXRzLmZveHNwb3J0c2xhLmNvbS9zdGF0cy9nZXRfcGxheV90b19wbGF5X2xpdmUnLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXG4gICAgICAvLyBIRUFERVIgREFUQVxuICAgICAgX3RoaXMuZGF0YSA9IHJlc3AuZGF0YVxuXG4gICAgICAvLyBTVU1NQVJZIERBVEFcbiAgICAgIF90aGlzLnN0YXRzID0gcmVzcC5kYXRhXG4gICAgICBfdGhpcy5wbGF5cyA9IHJlc3AuZGF0YS5wbGF5cy5zcGxpY2UoMCwgMTApXG4gICAgICBfdGhpcy52aXNpdGluZ1RlYW1JZCA9IHJlc3AuZGF0YVsndmlzaXRpbmctdGVhbSddLl9pZFxuICAgICAgX3RoaXMuaG9tZVRlYW1JZCA9IHJlc3AuZGF0YVsnaG9tZS10ZWFtJ10uX2lkXG5cbiAgICAgIF90aGlzLm5vdGhpbmdIYXBwZW4gPSBfdGhpcy5wbGF5cy5sZW5ndGggPT09IDA7XG4gICAgICBfdGhpcy5oYXNFbmRlZCA9IHJlc3AuZGF0YVsnZ2FtZS1zdGF0ZSddWydzdGF0dXMnXSA9PT0gJ2ZpbmFsJztcbiAgICAgIF90aGlzLmhhc05vdFN0YXJ0ZWQgPSByZXNwLmRhdGFbJ2dhbWUtc3RhdGUnXVsnc3RhdHVzJ10gIT09ICdmaW5hbCcgJiYgcmVzcC5kYXRhWydnYW1lLXN0YXRlJ11bJ2xpdmUtbWludXRlJ10gPT09IDBcbiAgICAgIGlmICghX3RoaXMuaGFzRW5kZWQgJiYgcmVzcC5kYXRhWydnYW1lLXN0YXRlJ11bJ2xpdmUtbWludXRlJ10gPD0gMTUpIF90aGlzLmFsbCgpXG5cbiAgICAgIGlmIChfdGhpcy5oYXNOb3RTdGFydGVkKSBfdGhpcy5hY3RpdmVUYWIgPSAnYSdcbiAgICAgIGVsc2UgaWYgKF90aGlzLmhhc0VuZGVkKSBfdGhpcy5hY3RpdmVUYWIgPSAncydcbiAgICAgIGVsc2UgaWYgKF90aGlzLm5vdGhpbmdIYXBwZW4pIF90aGlzLmFjdGl2ZVRhYiA9ICdtJ1xuXG4gICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF9zdGF0aXN0aWNzX2xpdmUnLCB7XG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgICAvLyBTVEFUUyBEQVRBXG4gICAgICAgIF90aGlzLmVzdGFkaXN0aWNhcyA9IHJlc3AuZGF0YVsnaG9tZS10ZWFtJ10ubWFwKCBpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG9tZTogaXRlbVsnc3RhdHMtdmFsdWUnXSxcbiAgICAgICAgICAgIGxhYmVsOiBfdGhpcy5sYWJlbChpdGVtWydzdGF0cy1sYWJlbCddKSxcbiAgICAgICAgICAgIHZpc2l0OiByZXNwLmRhdGFbJ3Zpc2l0aW5nLXRlYW0nXS5maW5kKHYgPT4gdlsnc3RhdHMtbGFiZWwnXSA9PSBpdGVtWydzdGF0cy1sYWJlbCddKVsnc3RhdHMtdmFsdWUnXVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF90ZWFtc19kZXRhaWwnLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAnY29tcGV0aXRpb24taWQnOiBfdGhpcy5jb21wZXRpdGlvbmlkLFxuICAgICAgICAgICAgJ3RlYW0taWQnOiBfdGhpcy5kYXRhWydob21lLXRlYW0nXVsnX2lkJ10sXG4gICAgICAgICAgICAnY291bnRyeS1jb2RlJzogX3RoaXMuY291bnRyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwKSB7XG5cbiAgICAgICAgICBfdGhpcy5ob21ldGVhbSA9IHJlc3AuZGF0YVxuXG4gICAgICAgICAgcmVzcC5kYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllci5wb3NpdGlvbiA9PT0gJ2dvYWxrZWVwZXInKSBfdGhpcy5ob21lcGxheWVyc1twbGF5ZXIucG9zaXRpb25dWzBdID0gcGxheWVyXG4gICAgICAgICAgICBlbHNlIF90aGlzLmhvbWVwbGF5ZXJzW3BsYXllci5wb3NpdGlvbl0ucHVzaChwbGF5ZXIpXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL3N0YXRzLmZveHNwb3J0c2xhLmNvbS9zdGF0cy9nZXRfdGVhbXNfZGV0YWlsJywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICdjb21wZXRpdGlvbi1pZCc6IF90aGlzLmNvbXBldGl0aW9uaWQsXG4gICAgICAgICAgICAgICd0ZWFtLWlkJzogX3RoaXMuZGF0YVsndmlzaXRpbmctdGVhbSddWydfaWQnXSxcbiAgICAgICAgICAgICAgJ2NvdW50cnktY29kZSc6IF90aGlzLmNvdW50cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgICAgICAgX3RoaXMudmlzaXR0ZWFtID0gcmVzcC5kYXRhXG5cbiAgICAgICAgICAgIHJlc3AuZGF0YS5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgICAgaWYgKHBsYXllci5wb3NpdGlvbiA9PT0gJ2dvYWxrZWVwZXInKSBfdGhpcy52aXNpdHBsYXllcnNbcGxheWVyLnBvc2l0aW9uXVswXSA9IHBsYXllclxuICAgICAgICAgICAgICBlbHNlIF90aGlzLnZpc2l0cGxheWVyc1twbGF5ZXIucG9zaXRpb25dLnB1c2gocGxheWVyKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBpZiAoX3RoaXMub25pbml0KSBfdGhpcy5vbmluaXQoX3RoaXMuZGF0YSk7XG5cbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcblxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGlmIChfdGhpcy5vbmVycm9yKSBfdGhpcy5vbmVycm9yKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUFsaWduIChob21lKSB7XG4gICAgdGhpcy5hY3RpdmVBbGlnbiA9IGhvbWU7XG4gIH1cblxuICB0b2dnbGVUYWIodGFiKSB7XG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgaWYgKHRhYiA9PT0gXCJzXCIpIHtcbiAgICAgIHRoaXMub25zdW1tYXJ5KHRoaXMuZGF0YSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT09ICdhJykge1xuICAgICAgdGhpcy5vbmFsaWdubWVudHModGhpcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2UnKSB7XG4gICAgICB0aGlzLm9uc3RhdHModGhpcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ20nKSB7XG4gICAgICB0aGlzLm9ubWludG9taW4odGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBhbGwoKSB7XG4gICAgdGhpcy5wbGF5cyA9IHRoaXMuc3RhdHMucGxheXNcbiAgICB0aGlzLnNob3dBbGwgPSBmYWxzZVxuICB9XG5cbiAgaWNvbih0ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzdGFydC1oYWxmJzogJ2ljb24tYmFsbCcsXG4gICAgICAnZm91bCc6ICdpY29uLWJhbGwnLFxuICAgICAgJ2ZyZWUta2ljayc6ICdpY29uLXNob2UnLFxuICAgICAgJ3Nob3Qtb24tZ29hbCc6ICdpY29uLWJhbGwnLFxuICAgICAgJ2Nvcm5lci1raWNrJzogJ2ljb24tc2hvZScsXG4gICAgICAnY3Jvc3MnOiAnaWNvbi1iYWxsJyxcbiAgICAgICdvZmZzaWRlJzogJ2ljb24tZmxhZycsXG4gICAgICAndGhyb3ctaW4nOiAnaWNvbi1iYWxsJyxcbiAgICAgICdnb2FsJzogJ2ljb24tYmFsbCcsXG4gICAgICAneWVsbG93LWNhcmQnOiAnaWNvbi15ZWxsb3dfY2FyZCcsXG4gICAgICAnc2hvdCc6ICdpY29uLWJhbGwnLFxuICAgICAgJ2dvYWwta2ljayc6ICdpY29uLXNob2UnLFxuICAgICAgJ3JlZC1jYXJkJzogJ2ljb24tYmFsbCcsXG4gICAgICAnaGFsZi1vdmVyJzogJ2ljb24tYmFsbCcsXG4gICAgICAnc3Vic3RpdHV0aW9uJzogJ2ljb24tZmxhZycsXG4gICAgICAnZ2FtZS1vdmVyJzogJ2ljb24tYmFsbCdcbiAgICB9W3RleHRdO1xuICB9XG5cbiAgbGFiZWwgKHRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2dvYWwnOiAnR29sZXMnLFxuICAgICAgJ3llbGxvdy1jYXJkJzogJ1RhcmpldGFzIEFtYXJpbGxhcycsXG4gICAgICAncGxheS1jbGVhcic6ICdKdWdhZGFzIENsYXJhcycsXG4gICAgICAnY29ybmVyLWtpY2snOiAnVGlyb3MgZGUgZXNxdWluYScsXG4gICAgICAnY3Jvc3MnOiAnUGFzZXMnLFxuICAgICAgJ3JlZC1jYXJkJzogJ1RhcmpldGFzIFJvamFzJyxcbiAgICAgICdmb3VsJzogJ0ZhbHRhcycsXG4gICAgICAnZnJlZS1raWNrJzogJ1Rpcm9zIExpYnJlcycsXG4gICAgICAnZ2FtZS1vdmVyJzogJ0ZpbmFsIGRlIGp1ZWdvJyxcbiAgICAgICdoYWxmLW92ZXInOiAnTWVkaW8gdGllbXBvJyxcbiAgICAgICdpbmp1cnknOiAnTGVzaW9uZXMnLFxuICAgICAgJ29mZnNpZGUnOiAnT2Zmc2lkZXMnLFxuICAgICAgJ3BlbmFsdGktb2snOiAnUGVuYWxlcyBjb252ZXJ0aWRvcycsXG4gICAgICAncGVuYWx0aS1ub3Qtb2snOiAnUGVuYWxlcyBlcnJhZG9zJyxcbiAgICAgICdzaG90JzogJ1Rpcm9zJyxcbiAgICAgICdzaG90LW9uLWdvYWwnOiAnVGlyb3MgYSBnb2wnLFxuICAgICAgJ3N0YXJ0LWhhbGYnOiAnUHJpbWVyYSBtaXRhZCcsXG4gICAgICAnc3Vic3RpdHV0aW9uJzogJ1N1c3RpdHVjaW9uZXMnLFxuICAgICAgJ293bi1nb2FsJzogJ0dvbGVzIGVuIGNvbnRyYScsXG4gICAgICAnZ29hbC1raWNrJzogJ1NhcXVlcyBkZSBhcmNvJyxcbiAgICAgICd0aHJvdy1pbic6ICdMYXRlcmFsZXMnLFxuICAgICAgJ3Nob3RvdXQtZ29hbCc6ICdUaXJvcyBhbCBhcmNvJyxcbiAgICAgICdzaG90b3V0LXNhdmUnOiAnQXRhamFkYXMnLFxuICAgICAgJ3Nob3RvdXQgbWlzcyc6ICdUaXJvcyBhZnVlcmEnXG4gICAgfVt0ZXh0XTtcbiAgfVxuXG59XG4iXX0=