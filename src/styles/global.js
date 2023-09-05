import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --text:#303030;
    --secondary:#ccc;
    --main: #eef2ff;
    --red : #8d0801;
    --gray:#eee;
    --green:#40916c;
    --white:#fffffe;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

html {
    font-family: 'Poppins', sans-serif;
    color : #3F2305;
    
}
body {
    width: 100vw;
     position: absolute;
       
}

button {
    outline: none;
    border: none;
    &:focus{
        outline:none
    }
}

a{
    color : inherit;
    text-decoration: none;
    
}
li{
    list-style-type:none;
}
* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}

`;
