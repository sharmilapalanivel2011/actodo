function Header({ username = "User" }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-500 to-sky-500 bg-clip-text text-transparent">
            {greeting}, {username}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Stay organized and accomplish your goals
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;