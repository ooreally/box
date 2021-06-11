// import './App.css';

import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Main>
      <Square> </Square>
        <Square2> </Square2>
        <Square3> </Square3>
        <Square4> </Square4>
      </Main>
        
    </Container>
  );
}

export default App;

const Container = styled.main`

display:block;
transform: translate(-10%, -50%);
position: absolute;
left: 50%;
top: 50%;
`
const Main = styled.div`

display: flex;
align-items: center;
min-height: 100vh;
`

const Square = styled.div`

  height: 400px;
  width: 400px;
  border: 2px solid black;
`

const Square2 = styled(Square)`

  transform: translate(-105%,-5%);
`
const Square3= styled(Square)`

  transform: translate(-210%,-10%);
`
const Square4= styled(Square)`

  transform: translate(-315%,-15%);
`
