import { useEffect, useState } from "react";

export const App = () => {

  const [theme, setTheme] = useState(() =>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    }
    return 'light';
  });
  
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-800">
      <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 
      dark:bg-slate-700 dark:text-white dark:hover:bg-slate-500"
        onClick={toggleTheme}>
        Change theme
      </button>
    </div>
  );
};
