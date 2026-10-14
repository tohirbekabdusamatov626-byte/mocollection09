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
    <div className="flex flex-col gap-4 w-full sm:w-[380px]">
      {/* Play Menyusi */}
      <div className="w-full bg-[#262421] text-white p-5 flex flex-col gap-3.5 rounded-2xl shadow-2xl border border-[#312e2b]">
        {/* Sarlavha */}
        <div className="flex items-center justify-center gap-2 py-2 mb-1 border-b border-[#312e2b]">
          <span className="text-2xl">🤝</span>
          <h2 className="text-2xl font-bold tracking-wide">Play Chess</h2>
        </div>

        {/* Tugmalar ro'yxati */}
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4 bg-[#312e2b] hover:bg-[#3b3734] transition-all duration-150 p-3.5 rounded-xl text-left border border-transparent hover:border-gray-600 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-lg leading-snug">
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
    </div>
  );
};

export default Sidebar;