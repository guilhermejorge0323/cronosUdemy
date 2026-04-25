import './App.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './MessagesContainer';
import { MainRouter } from './Routers/MainRouter';



export function App() {


  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
