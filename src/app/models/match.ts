import { Event } from '../models/event';
import { Map } from '../models/map';
import { Stream } from '../models/stream';
import { Players } from '../models/players';

export class Match {

    constructor(
        public team1: string,
        public team1Id: number,
        public team2: string,
        public team2Id: number,
        public date: number,
        public format: string,
        public additionalInfo: string,
        public event: Event,
        public maps: Map[],
        public streams: Stream[],
        public players: Players,
        public title: string
    ){}

}
