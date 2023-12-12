import Hunting from "./Hunting";

export default interface Competition {
    code : string;
    date : Date;
    startTime : Date;
    endTime : Date;
    numberOfParticipants : number;
    location : string;
    amount : number;
    huntings : Hunting[];
}