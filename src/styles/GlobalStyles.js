import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }


  ::-webkit-scrollbar {
      -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
      width:10px;
  }

  ::-webkit-scrollbar-button:increment,::-webkit-scrollbar-button {
      display: none;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #b3b1b1;
      border-radius: 20px;
      border: 3px solid #f1f2f3;
  }

  ::-webkit-scrollbar-track {
      border-radius: 10px;
  }
`;
