import styled from 'styled-components'

export const Cloudy = styled.div`
  position: absolute;
  right: 30px;
  top: 30px; 
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: linear-gradient(to top right,#000000 0,#eee 90%);
  box-shadow: 0 0 0 0.1px #280000, 0 0 10px -1px #C0C0C0;
  .cloud {
  position: absolute;
  top: 25%;
  left: 40%;
  width: 20px;
  height: 6px;
  border-radius: 4px;
  background-color: #eee;
  box-shadow: 0 0 4px 2px #e6e8db,0 0 20px -2px #c9e8de;
  animation: move 4000ms infinite ease-in-out;
  }
  @keyframes move {
    50% {
      transform: translateX(-10px);
    }
  }
  .cloud::before {
    left: 3px;
    height: 10px;
    width: 10px;
  }
  .cloud::after {
    left: 9px;
    height: 7px;
    width: 7px;
  }
  .cloud::before, .cloud::after {
    content: '';
    position: inherit;
    border-radius: 100%;
    background-color: inherit;
    box-shadow: inherit;
    bottom: 40%;
  }
  `

export const Sunny = styled.div`
  position: absolute;
  right: 30px;
  top: 30px; 
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: linear-gradient(to top right, #fc5830 0%, #f98c24 65%);
  box-shadow: 0 0 0 1px #e6e8db,0 0 10px -1px #c9e8de;
  .sun{
    position: absolute;
    top: 20%;
    left: 80%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    border-radius: 100%;
    background: #ffeb3b;
    box-shadow: 0 0 0 0.02em #e6e8db, 0 0 0.3em -0.03em #fd6f21;
  }
`

