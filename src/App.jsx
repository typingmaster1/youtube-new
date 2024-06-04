// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import VideoList from './VideoList';

const videos = [
  {
    id: 1,
    title: 'ARY News 8 AM Prime Time Headlines | 4th June...',
    views: '6K views',
    time: '36 minutes ago',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANNyTP1QVjB8PiicgnYa8IadRZjOgHNVuiw&s',
    channel: 'ARY News',
  },
  {
    id: 2,
    title: 'Dunya News Headlines 08 AM | Cipher Case Verdict...',
    views: '3.9K views',
    time: '56 minutes ago',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zrc21X3VIAHeXzyh2U07uZOLacEoirgPWA&s',
    channel: 'Dunya News',
  },
  {
    id: 3,
    title: 'Musadik Malik Shocking Statement Regarding Imran...',
    views: '4.1K views',
    time: '1 hour ago',
    thumbnail: 'https://i.ytimg.com/vi/F5zZ5jxm4LE/maxresdefault.jpg',
    channel: 'Capital TV',
  },
  {
    id: 4,
    title: 'Cipher case - court ordered the release of Imran Khan...',
    views: '4.4K views',
    time: '1 hour ago',
    thumbnail: 'https://i.tribune.com.pk/media/images/Imran-Qureshi1699384015-0/Imran-Qureshi1699384015-0.jpg',
    channel: 'Aaj TV Official',
  },
];

const navItems = ['All', 'Colleges', 'Bowling', 'Mixes', 'Live', 'Software Engineering', 'News', 'Nursing', 'Music', 'Gaming', 'Computer programming', 'Dubbing'];

function App() {
  return (
    <div className="App">
      <Navbar items={navItems} />
      <h2>Breaking news</h2>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
