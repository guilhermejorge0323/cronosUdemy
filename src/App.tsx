import { useLocation } from 'react-router';
import './App.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './MessagesContainer';
import { MainRouter } from './Routers/MainRouter';
import { useEffect } from 'react';



export function App() {


  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
