import './App.css';
import { Route, Routes } from 'react-router-dom';
import Visitor from './components/visitor/visitorInterface';
import Quiz from './components/visitor/pages/Quiz';
import RegleJeu from './components/visitor/pages/ReglesJeu';
import PrincipalePage from './components/visitor/pages/PrincipalePage';
import Acceuil from './components/visitor/pages/Acceuil';
import NotFound from './components/visitor/pages/NotFound';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Visitor/>}>
               <Route index element={<PrincipalePage/>} />
               <Route path='regle_de_jeu' element={<RegleJeu />}/>
               <Route path='Quiz' element={<Quiz />} />
               <Route path='Acceuil' element={<Acceuil />}/>
               
            </Route>


            <Route path='*' element={<NotFound />} /> {/* Gérer les liens non définis */}
        </Routes>
    </div>
  );
}

export default App;

