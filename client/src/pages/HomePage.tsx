<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import './Index.css';


import UserProfile from '../components/UserProfile';
import TaskList from '../components/TaskList';
import WeatherWidget from '../components/WeatherWidget';
import Reminders from '../components/Reminders';

function App() {
  // Storing User Data
  const [user, setUser] = useState({
    username: 'JohnDoe',
    location: 'Plano, TX',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // Storing Tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Morning Exercise', completed: false, priority: 'high' },
    { id: 2, title: 'Project Meeting', completed: false, priority: 'medium' },
    { id: 3, title: 'Code Review', completed: true, priority: 'low' },
  ]);

  // Storing Weather Data
  const [weather, setWeather] = useState({
    temperature: '72°F',
    description: 'Partly Cloudy',
  });

  // Storing Reminders
  const [reminders, setReminders] = useState([
    { id: 1, taskId: 1, reminderTime: '2024-09-16T08:00:00Z' },
  ]);

  // Fetching Weather Data Based on User's Location
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${user.location}&appid= ADD_API_KEY_HERE`
        );
        const data = await response.json();
        // Convert temperature from Kelvin to Fahrenheit
        const temperatureInFahrenheit = Math.round((data.main.temp - 273.15) * 9/5 + 32);
        setWeather({
          temperature: `${temperatureInFahrenheit}°F`,
          description: data.weather[0].description,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
  }, [user.location]);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Daily Tracker</h1>
        <nav>
          <ul>
            {/* Adding aria-labels for accessibility */}
            <li><a href="#tasks" aria-label="Tasks">Tasks</a></li>
            <li><a href="#profile" aria-label="Profile">Profile</a></li>
            <li><a href="#reminders" aria-label="Reminders">Reminders</a></li>
            <li><a href="#weather" aria-label="Weather">Weather</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* User Profile Section */}
        <section id="profile">
          <h2>User Profile</h2>
          <UserProfile user={user} />
        </section>

        {/* Task List Section */}
        <section id="tasks">
          <h2>Your Daily Tasks</h2>
          <TaskList tasks={tasks} />
        </section>

        {/* Reminders Section */}
        <section id="reminders">
          <h2>Reminders</h2>
          {reminders.length > 0 ? (
            <Reminders reminders={reminders} />
          ) : (
            <p>No reminders set</p>
          )}
        </section>

        {/* Weather Widget Section */}
        <section id="weather">
          <h2>Current Weather</h2>
          <WeatherWidget weather={weather} />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
=======

const HomePage = () => {
    return(
        <>

        </>
    )
}


export default HomePage
>>>>>>> d16db11683158f47788409f961f8413487c43e59
