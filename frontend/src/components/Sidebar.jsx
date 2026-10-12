import React from 'react';

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Play Online',
      subtitle: 'Play vs a person of similar skill',
      icon: '⚡',
      bgColor: 'bg-[#f5ad27]',
    },
    {
      id: 2,
      title: 'Play Bots',
      subtitle: 'Challenge a bot from Easy to Master',
      icon: '🤖',
      bgColor: 'bg-[#3ca9e2]',
    },
    {
      id: 3,
      title: 'Play Coach',
      subtitle: 'Learn as you play a game with Coach',
      icon: '👨‍🏫',
      bgColor: 'bg-[#a3d162]',
    },
    {
      id: 4,
      title: 'Play a Friend',
      subtitle: 'Invite a friend to a game of chess',
      icon: '🤝',
      bgColor: 'bg-[#e2823c]',
    },
    {
      id: 5,
      title: 'Tournaments',
      subtitle: 'Join an Arena where anyone can win',
      icon: '🥇',
      bgColor: 'bg-[#eec128]',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row lg:flex-row gap-4 w-full lg:w-auto items-start select-none">
      {/* Play Menyusi */}
      <div className="w-full sm:w-340px bg-[#262421] text-white p-4 flex flex-col gap-3 rounded-lg shadow-xl border border-[#312e2b]">
        <div className="flex items-center justify-center gap-2 py-2 mb-1 border-b border-[#312e2b]">
          <span className="text-2xl">🤝</span>
          <h2 className="text-2xl font-bold tracking-wide">Play Chess</h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4 bg-[#312e2b] hover:bg-[#3b3734] transition-all duration-150 p-3 rounded-xl text-left border border-transparent hover:border-gray-600 group cursor-pointer"
            >
              <div
                className={`w-11 h-11 ${item.bgColor} rounded-lg flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-snug">
                  {item.title}
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  {item.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reklama Banneri (Rozmetov) */}
      <div className="w-full sm:w-260px bg-[#1b1917] rounded-lg overflow-hidden border border-[#312e2b] flex flex-col justify-between shadow-xl">
        <div className="relative p-4 flex flex-col items-center text-center  from-[#010101] via-[#5c0606] to-[#2b0202] text-white min-h-[380px]">
          <div className="absolute top-3 right-3 bg-white text-emerald-800 font-bold text-[9px] px-2 py-0.5 rounded-full border border-emerald-600 flex items-center gap-1">
            <span>HALAL</span>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-red-900 rounded-full border-2 border-yellow-500 flex items-center justify-center font-bold text-yellow-400 text-xs shadow-lg mb-4 tracking-wider">
              ROZMETOV
            </div>
            <h3 className="text-2xl font-black text-yellow-400 tracking-wider">
              Asl Farxod
            </h3>
            <p className="text-xs font-medium mt-1 text-gray-200">
              Go'shtdan qilingan
            </p>
          </div>
        </div>

        <button className="w-full bg-[#00a6ed] hover:bg-[#0095d4] text-white font-semibold py-2.5 px-4 text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer">
          <span className="text-sm">🚫</span> Remove Ads
        </button>
      </div>
    </div>
  );
};

export default Sidebar;