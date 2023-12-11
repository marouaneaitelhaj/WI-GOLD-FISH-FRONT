import Competition from "./Competition";
import Member from "./Member";

export default interface Ranking {
    id: number;
    rank: number;
    score: number;
    member : Member;
    competition : Competition;
}