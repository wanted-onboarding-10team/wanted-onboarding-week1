import { Outlet } from 'react-router-dom';
import BasicTemplate from './components/common/BasicTemplate';

function App() {
  return (
    <BasicTemplate>
      <Outlet />
    </BasicTemplate>
  );
}

export default App;
