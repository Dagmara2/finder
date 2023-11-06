import ListItems from "./ListItems";
import './App.scss';

function App() {
  return (
    <div className="categories__wrapper">
      <h1 className="categories__title">Join 2 milion+ Australians finding better</h1>
      <p className="categories__subtitle">Finder's team of 40+ experts will help you find the right choices in over 100 categories.</p>
      <ListItems></ListItems>
    </div>
  );
}

export default App;
