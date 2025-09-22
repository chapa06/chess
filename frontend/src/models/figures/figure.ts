import { Cell } from "../Cell";
import { Colors } from "../colors";
import Logo from '../../assets/KingBlack.png';

export enum FigureNames{
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон"
}
export class Figure{
    color: Colors;
    logo : typeof Logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;



    constructor(color: Colors, cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    CanMove(target: Cell): boolean{
        return true;
    }

    MoveFigure(terget: Cell){}

}