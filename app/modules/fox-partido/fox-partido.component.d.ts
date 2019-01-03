import { OnInit } from '@angular/core';
export declare class FoxPartidoComponent implements OnInit {
    showtitle: boolean;
    competitionid: string;
    matchid: string;
    lang: string;
    max: number;
    country: string;
    onsummary: Function;
    onmintomin: Function;
    onstats: Function;
    onalignments: Function;
    onplayer: Function;
    oninit: Function;
    onerror: Function;
    title: string;
    activeTab: string;
    activeAlign: boolean;
    hasEnded: boolean;
    hasNotStarted: boolean;
    nothingHappen: boolean;
    data: {
        'home-team': {};
        'visiting-team': {};
        'game-state': {};
    };
    stats: {
        plays: any[];
    };
    plays: any[];
    homeTeamId: string;
    visitingTeamId: string;
    showAll: boolean;
    estadisticas: any[];
    objectKeys: (o: {}) => string[];
    parseInt: (string: string, radix?: number) => number;
    hometeam: {
        'team-info': {};
        'manager-info': {};
    };
    homeplayers: {
        goalkeeper: {}[];
        midfielder: any[];
        defender: any[];
        forward: any[];
    };
    visitteam: {
        'team-info': {};
        'manager-info': {};
    };
    visitplayers: {
        goalkeeper: {}[];
        midfielder: any[];
        defender: any[];
        forward: any[];
    };
    constructor();
    ngOnInit(): void;
    changeAlign(home: any): void;
    toggleTab(tab: any): void;
    all(): void;
    icon(text: any): any;
    label(text: any): any;
}
