import React from 'react';

const Greeting = ({ name }) => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl shadow-lg">
      <div className="text-2xl font-bold text-teal-600 text-center animate-fade-in">
        {getTimeBasedGreeting()}, {name}!
      </div>
      <div className="mt-2 text-center text-teal-500 text-sm">
        From Sirajje
      </div>
    </div>
  );
};

export default Greeting;
