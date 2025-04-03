import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2025-04-30T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="py-8">
			<div className="flex justify-center gap-6 flex-nowrap">
				{Object.entries(timeLeft).map(([label, value]) => (
					<div 
						key={label} 
						className="flex flex-col items-center bg-gradient-to-b from-[#ffffff10] to-[#ffffff05] backdrop-blur-sm rounded-xl px-6 py-4 min-w-[120px] border border-[#ffffff20]"
					>
						<div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
							{value.toString().padStart(2, '0')}
						</div>
						<span className="uppercase text-sm text-[#fff] opacity-60 mt-2 font-medium">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Countdown;