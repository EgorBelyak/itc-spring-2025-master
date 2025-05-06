import { BlackBishop } from './BlackBishop';
import { BlackKing } from './BlackKing';
import { BlackKnight } from './BlackKnight';
import { BlackPawn } from './BlackPawn';
import { BlackQueen } from './BlackQueen';
import { BlackRook } from './BlackRook'; 
import { WhiteBishop } from './WhiteBishop';
import { WhiteKing } from './WhiteKing';
import { WhiteKnight } from './WhiteKnight';
import { WhitePawn } from './WhitePawn';
import { WhiteQueen } from './WhiteQueen';
import { WhiteRook } from './WhiteRook'; 

// Объект, сопоставляющий slug с соответствующими компонентами фигур
const figureComponents = {
  'black-bishop': BlackBishop,
  'black-king': BlackKing,
  'black-knight': BlackKnight,
  'black-pawn': BlackPawn,
  'black-queen': BlackQueen,
  'black-rook': BlackRook, 
  'white-bishop': WhiteBishop,
  'white-king': WhiteKing,
  'white-knight': WhiteKnight,
  'white-pawn': WhitePawn,
  'white-queen': WhiteQueen,
  'white-rook': WhiteRook,
};

export const Figure = ({ slug }) => {
  const FigureComponent = figureComponents[slug];
  
  if (!FigureComponent) {
    return null;
  }
  
  return <FigureComponent />;
};