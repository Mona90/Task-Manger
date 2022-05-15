import styled from "styled-components";


export const Modal = styled.div
`
  top: 50%;
  left: 50%;
  width: 55%;
  height: auto;
  transform: translate(-50%, -50%);
  display:block;
  color: #CCC;
  padding: 15px;
  font-size: 14px;
  border-radius: 5px;
  overflow: initial;
  .close{
      font-size: 25px;
      color: #ffc107;
      margin-right: 10px;
  }
  .container{
    .modal-text{
      background: transparent;
      color: #FFF;
      border: none;
      border-bottom: 1px solid #646464;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
    }
  }

`