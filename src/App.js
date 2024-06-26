import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
const ROLES = {
  'CLIENT': 'CLIENT',
  'ADMIN': 'ADMIN'
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="product" element={<Product />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.CLIENT]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="product" element={<Product />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.CLIENT]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>



        <Route element={<RequireAuth allowedRoles={[ROLES.CLIENT, ROLES.ADMIN]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;