'use client'
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timer
    const timer = setTimeout(() => {
      setIsLoading(false);  // Set isLoading to false after 3 seconds
    }, 3000);  // 3000 milliseconds (3 seconds)

    // Clean up timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);  // Empty dependency array ensures useEffect runs only once

  return (
    <div className="bg-black p-4 ">
      {isLoading ? (  // Conditional rendering based on isLoading state
        <div className="flex items-center justify-center h-40">
          <div className="loader"></div>  {/* Placeholder for loader animation */}
        </div>
      ) : (
        <p className="text-xl text-center text-green-600">Loading complete!</p>
      )}
    </div>
  );
};

export default ExampleComponent;
