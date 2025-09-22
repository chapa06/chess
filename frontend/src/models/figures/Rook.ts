import { Cell } from "../Cell";
import { Colors } from "../colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/RookBlack.png'
import whitelogo from '../../assets/RookWhite.png'
export class Rook extends Figure{
constructor(color: Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.ROOK;
    }
}