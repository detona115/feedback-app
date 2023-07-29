import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.slice(-1)[0].id + 1;
    setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback)
  };

  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
          } />
          
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <AboutIconLink />
      </div>
    </>
  );
}

export default App;
