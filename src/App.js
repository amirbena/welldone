import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesFromLocalStorage } from './redux/actions';
import { Switch, Redirect, Route } from 'react-router-dom';
import AllCategories from './components/allCategories/allCategories';
import CreateCatergory from './components/createCategory/createCategory';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesFromLocalStorage());
  }, [])
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/categories" component={AllCategories} />
          <Route path="/add-category" component={CreateCatergory} />
          <Redirect from="/" to="/categories" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
