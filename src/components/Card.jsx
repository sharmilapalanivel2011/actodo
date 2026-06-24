function Card({ bgcolor, title, subtitle, icon }) {
  const bgColorMap = {
    navy: 'bg-gradient-to-br from-navy-500 to-navy-600',
    sky: 'bg-gradient-to-br from-sky-400 to-sky-500',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
    emerald: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
  };

  return (
    <div className="animate-slide-in">
      <div className={`${bgColorMap[bgcolor] || bgcolor} rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-grow min-w-[150px]`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-4xl font-bold text-white">{title}</h3>
            <p className="text-white/80 mt-2 text-sm font-medium">{subtitle}</p>
          </div>
          {icon && <span className="text-4xl opacity-70">{icon}</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;