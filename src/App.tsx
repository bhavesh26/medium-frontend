

import './index.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import {Blog} from './pages/Blog';
function App() {
 

  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/blogs" element={<Blog/>}/>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
