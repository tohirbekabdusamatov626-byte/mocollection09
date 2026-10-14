import React from 'react';
import { User } from 'lucide-react';

const Board = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  const initialPieces = {
    'a8': 'r', 'b8': 'n', 'c8': 'b', 'd8': 'q', 'e8': 'k', 'f8': 'b', 'g8': 'n', 'h8': 'r',
    'a7': 'p', 'b7': 'p', 'c7': 'p', 'd7': 'p', 'e7': 'p', 'f7': 'p', 'g7': 'p', 'h7': 'p',
    'a2': 'P', 'b2': 'P', 'c2': 'P', 'd2': 'P', 'e2': 'P', 'f2': 'P', 'g2': 'P', 'h2': 'P',
    'a1': 'R', 'b1': 'N', 'c1': 'B', 'd1': 'Q', 'e1': 'K', 'f1': 'B', 'g1': 'N', 'h1': 'R',
  };

  const renderPiece = (code) => {
    if (!code) return null;
    const isWhite = code === code.toUpperCase();
    const type = code.toLowerCase();

    const paths = {
      p: isWhite ? (
        <path d="M 22 9 C 19.79 9 18 10.79 18 13 C 18 14.12 18.46 15.13 19.2 15.86 C 17.5 17.1 16 19.8 16 23 C 16 23.5 16.5 24 17 24 C 18.5 24 20 23.5 22 23.5 C 24 23.5 25.5 24 27 24 C 27.5 24 28 23.5 28 23 C 28 19.8 26.5 17.1 24.8 15.86 C 25.54 15.13 26 14.12 26 13 C 26 10.79 24.21 9 22 9 Z M 15 27 C 15 26.45 15.45 26 16 26 L 28 26 C 28.55 26 29 26.45 29 27 L 29 29 C 29 29.55 28.55 30 28 30 L 16 30 C 15.45 30 15 29.55 15 29 Z M 13 32 L 31 32 L 32 35 L 12 35 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 22 9 C 19.79 9 18 10.79 18 13 C 18 14.12 18.46 15.13 19.2 15.86 C 17.5 17.1 16 19.8 16 23 C 16 23.5 16.5 24 17 24 C 18.5 24 20 23.5 22 23.5 C 24 23.5 25.5 24 27 24 C 28 19.8 26.5 17.1 24.8 15.86 C 25.54 15.13 26 14.12 26 13 C 26 10.79 24.21 9 22 9 Z M 15 27 L 29 27 L 29 29 L 15 29 Z M 13 32 L 31 32 L 32 35 L 12 35 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
      r: isWhite ? (
        <path d="M 12 35 L 32 35 L 32 32 L 12 32 Z M 14 29 L 30 29 L 30 23 C 30 21 28 19 28 17 L 28 13 L 29 13 L 29 9 L 25 9 L 25 11 L 23 11 L 23 9 L 21 9 L 21 11 L 19 11 L 19 9 L 15 9 L 15 13 L 16 13 L 16 17 C 16 19 14 21 14 23 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 12 35 L 32 35 L 32 32 L 12 32 Z M 14 29 L 30 29 L 30 23 C 30 21 28 19 28 17 L 28 13 L 29 13 L 29 9 L 25 9 L 25 11 L 23 11 L 23 9 L 21 9 L 21 11 L 19 11 L 19 9 L 15 9 L 15 13 L 16 13 L 16 17 C 16 19 14 21 14 23 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
      n: isWhite ? (
        <path d="M 22 10 C 22 10 24 11 24 13 C 24 14 22 15 22 15 C 24 15 27 16 28 19 C 29 22 28 25 27 27 L 16 27 C 14 25 14 22 14 20 C 14 17 16 14 18 12 C 20 10 22 10 22 10 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 22 10 C 22 10 24 11 24 13 C 24 14 22 15 22 15 C 24 15 27 16 28 19 C 29 22 28 25 27 27 L 16 27 C 14 25 14 22 14 20 C 14 17 16 14 18 12 C 20 10 22 10 22 10 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
      b: isWhite ? (
        <path d="M 22 9 A 2.5 2.5 0 1 1 21.99 9 Z M 17 17 C 17 14 20 12 22 12 C 24 12 27 14 27 17 C 27 21 24 24 24 27 L 20 27 C 20 24 17 21 17 17 Z M 14 35 L 30 35 L 29 30 L 15 30 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 22 9 A 2.5 2.5 0 1 1 21.99 9 Z M 17 17 C 17 14 20 12 22 12 C 24 12 27 14 27 17 C 27 21 24 24 24 27 L 20 27 C 20 24 17 21 17 17 Z M 14 35 L 30 35 L 29 30 L 15 30 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
      q: isWhite ? (
        <path d="M 9 13 L 13 21 L 22 12 L 31 21 L 35 13 L 32 28 L 12 28 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 9 13 L 13 21 L 22 12 L 31 21 L 35 13 L 32 28 L 12 28 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
      k: isWhite ? (
        <path d="M 22 6 L 22 11 M 19.5 8.5 L 24.5 8.5 M 17 16 C 17 13 20 12 22 12 C 24 12 27 13 27 16 C 27 20 24 24 24 27 L 20 27 C 20 24 17 20 17 16 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#FFFFFF" stroke="#1b1917" strokeWidth="1.5" strokeLinejoin="round"/>
      ) : (
        <path d="M 22 6 L 22 11 M 19.5 8.5 L 24.5 8.5 M 17 16 C 17 13 20 12 22 12 C 24 12 27 13 27 16 C 27 20 24 24 24 27 L 20 27 C 20 24 17 20 17 16 Z M 12 35 L 32 35 L 31 31 L 13 31 Z" fill="#262421" stroke="#262421" strokeWidth="1.5" strokeLinejoin="round"/>
      ),
    };

    return (
      <svg viewBox="0 0 44 44" className="w-full h-full">
        {paths[type]}
      </svg>
    );
  };

  return (
    /* max-w-[560px] va w-full orqali doska kattalashtirildi */
    <div className="flex flex-col w-full max-w-[540px] select-none  ">
      {/* Raqib profili */}
      <div className="flex items-center gap-3 py-2 px-1">
        <div className="w-9 h-9 bg-[#262421] rounded flex items-center justify-center text-gray-400">
          <User className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800 text-sm">Ahmadjon</span>
        </div>
      </div>

      {/* Shaxmat doskasi: aspect-square va w-full orqali to'liq kvadrat shaklda ko'rinadi */}
      <div className="w-full aspect-square  grid grid-cols-8 grid-rows-8 rounded overflow-hidden shadow-xl border border-[#312e2b]">
        {rows.map((row, rowIndex) =>
          cols.map((col, colIndex) => {
            const squareId = `${col}${row}`;
            const isDark = (rowIndex + colIndex) % 2 === 1;
            const piece = initialPieces[squareId];

            return (
              <div
                key={squareId}
                className={`relative flex items-center justify-center ${
                  isDark ? 'bg-[#779952]' : 'bg-[#edeed1]'
                }`}
              >
                {/* Katak raqami */}
                {colIndex === 0 && (
                  <span
                    className={`absolute top-0.5 left-1 text-[11px] font-bold ${
                      isDark ? 'text-[#edeed1]' : 'text-[#779952]'
                    }`}
                  >
                    {row}
                  </span>
                )}

                {/* Katak harfi */}
                {rowIndex === 7 && (
                  <span
                    className={`absolute bottom-0.5 right-1 text-[11px] font-bold ${
                      isDark ? 'text-[#edeed1]' : 'text-[#779952]'
                    }`}
                  >
                    {col}
                  </span>
                )}

                {/* Dona */}
                {piece && (
                  <div className="w-[88%] h-[88%] z-10">
                    {renderPiece(piece)}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Foydalanuvchi profili */}
      <div className="flex items-center gap-3 py-2 px-1">
        <div className="w-9 h-9 bg-[#262421] rounded flex items-center justify-center text-gray-400">
          <User className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800 text-sm">Toxirbekkk</span>
          <span className="text-[10px] bg-[#262421] px-1.5 py-0.5 rounded text-gray-300 font-mono">
            🇺🇿
          </span>
        </div>
      </div>
    </div>
  );
};

export default Board;