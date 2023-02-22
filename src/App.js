import { Outlet } from 'react-router-dom';
import { BasicTemplate } from './components';

function App() {
  return (
    <BasicTemplate>
      <Outlet />
    </BasicTemplate>
  );
}

export default App;
