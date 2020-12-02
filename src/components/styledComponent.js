import styled from 'styled-components';

export const Header =  styled.div`
  position: relative;
  height: 15vh;
  width: 100%;
  background: black;
  color: white;
  border-bottom: 0.5vh solid white;
  span {
    line-height: 15vh;
    margin-left: 30px;
  }
`
export const SideBar = styled.div`
  background: #3f3040;
  width: 5vw;
  height: 813px;
  text-align: center;
  padding:3px;
  img {
    width: 50px;
    height: 50px;
  }
`
export const Button = styled.button `
  background: white;
  margin: 10px auto;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  padding:5px;
  outline: none;
  border-radius: 10px;
`
export const ImageViewer = styled.div`
  width: 70%;
  height: 813px;
`
export const ImageSelector = styled.div`
  height: 72%;
  border: 50px solid black;
  div, img {
    width: 100%;
    height: 100%;
  }
`
export const CropImageViewer = styled.div`
  height: 100px;
  width: 100%;
  background: black;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  border-top: 5px solid white;
  img {
    max-height: 100%; 
    height: 50px;
    width: 50px;
    margin: 10px;
  };
`
export const ObjectBar = styled.div`
  width: 25vw;
  background: #3f3040;
  padding: 50px;
  overflow-y:auto;
  height: 720px;
  div {
    text-align: center;
  }
`

export const ObjectList = styled.button`
  margin: 10px;
  color: white;
  background: transparent;
  padding: 10px;
  outline: none;
  width: 80%;
  height: 50px;
  font-size: 20px;
`