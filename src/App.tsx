import './App.css';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  );
}
