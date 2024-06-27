import './App.css';
import  Gallery  from './components/gallery';
import {imagesArray} from './data';
import Form from './components/form';
import FeedbackForm from './components/feedbackForm';
function App() {
  return (
    <div className="App">
      <Form ></Form>
     <Gallery data={imagesArray} />
     <FeedbackForm></FeedbackForm>
    </div>
  );
}

export default App;
