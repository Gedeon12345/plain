import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const target = 20000000; // Target number
  const duration = 200000; // Animation duration in ms (3 seconds)
  const increment = Math.ceil(target / (duration / 16)); // Approx. step size

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 16); // Runs every ~16ms (approx. 60fps)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[#000] text-4xl font-bold">
      {count.toLocaleString()} +
      <p className="text-lg">Number of users</p>
    </div>
  );
};

export default Counter;
