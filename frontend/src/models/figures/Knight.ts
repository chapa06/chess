import { Cell } from "../Cell";
import { Colors } from "../colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/KnightBlack.png'
import whitelogo from '../../assets/KnightWhite.png'
export class Knight extends Figure{
constructor(color: Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.KNIGHT;
    }
}