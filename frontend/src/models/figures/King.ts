import { Cell } from "../Cell";
import { Colors } from "../colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../../public/assets/KingBlack.png'
import whitelogo from '../../../public/assets/KingWhite.png'

export class King extends Figure{
constructor(color: Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.BISHOP;
}
}