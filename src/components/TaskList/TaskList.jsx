import React, { useEffect, useState } from "react";
import "../TaskList/TaskList.css";

const TaskList = () => {
    const [countdown, setCountdown] = useState("Calculating...");
    const [recentActivity, setRecentActivity] = useState([
        { action: "Completed 'Design UI'", time: "2 hours ago" },
        { action: "Accepted 'Fix Bugs'", time: "5 hours ago" },
        { action: "Failed 'Submit Report'", time: "1 day ago" }
    ]);

    useEffect(() => {
        const calculateCountdown = () => {
            const deadline = new Date("2025-02-20T23:59:59").getTime();
            const now = new Date().getTime();
            const timeLeft = deadline - now;

            if (timeLeft <= 0) return setCountdown("Time Over");

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);
            setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        };

        const interval = setInterval(calculateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tasklist-container">
            {/* Ongoing Tasks (Live Countdown) */}
            <section className="task-section ongoing-tasks">
                <h2>🕒 Ongoing Tasks</h2>
                <p>Time Left: <span className="countdown-timer">{countdown}</span></p>
            </section>

            {/* Recent Activity Feed */}
            <section className="task-section recent-activity">
                <h2>🔥 Recent Activity</h2>
                <ul>
                    {recentActivity.map((activity, index) => (
                        <li key={index}>{activity.action} - <span>{activity.time}</span></li>
                    ))}
                </ul>
            </section>

            {/* Weekly Performance Chart */}
            <section className="task-section weekly-performance">
                <h2>📊 Weekly Performance</h2>
                <div className="chart-placeholder">(Chart Placeholder)</div>
            </section>

            {/* Quick Actions */}
            <section className="task-section quick-actions">
                <h2>🚀 Quick Actions</h2>
                <div className="actions-buttons">
                    <button>➕ Start New Task</button>
                    <button>📑 View Reports</button>
                    <button>⚙️ Settings</button>
                </div>
            </section>

            {/* Motivational Section (Leaderboard & Streaks) */}
            <section className="task-section motivation-section">
                <h2>🏆 Leaderboard & Streaks</h2>
                <p className="motivation-text">You are ranked <b>#2</b> this week! Keep up the great work! 🎯</p>
            </section>
        </div>
    );
};

export default TaskList;