import React from 'react';
import Row from './Row';

const ChessBoard = ({size, black, white}) => {
    const rows = []
    for (let i = 0; i < size; i++) {
        rows.push(i);
    }
    return(
        <div className="chessboard">
            {
                rows.map((row) => {
                    return <Row key={row} rowType={row % 2 == 0 ? 'even' : 'odd'} size={size} black={black} white={white} />
                })
            }
        </div>
    )
}
export default ChessBoard;