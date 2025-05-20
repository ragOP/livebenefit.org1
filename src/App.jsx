import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './Chatbot';
import ChatbotTwo from './Chatbottwo';
import ChatbotThree from './ChatbotThree';
import ChatbotFour from './ChatbotFour';
import Home from './Home';
import Raghib from './Raghib';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/engsf1" element={<Chatbot />} />
        <Route path="/engsf2200" element={<ChatbotTwo />} />
        <Route path="/engsf1dup" element={<ChatbotThree />} />
        <Route path="/engsf2200dup" element={<ChatbotFour />} />
        <Route path='/raghib' element={<Raghib />} />
      </Routes>
    </Router>
  );
};

export default App;
