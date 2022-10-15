import { BussinessContext } from './components/BussinessContext';
import { Layout } from './components/Layout';
import { ListTasks } from './components/TasksList';

const App = () => {
  return (
    <Layout>
      <ListTasks />
      <BussinessContext/>
    </Layout>
  );
};

export default App;
