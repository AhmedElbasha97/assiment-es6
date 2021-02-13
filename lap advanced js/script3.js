function styled(css, ...variables) {
  const theme = {
    color: {
      primary: "red",
      secondary: "blue",
    },
    fontSize: {
      small: "10px",
      large: "20px",
    },
  };

let sty = ``;
for(let i=0;i<css.length;i++){
    sty = variables[i]? sty + css[i] + variables[i](theme):sty + css[i];
}
    let style= document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML += sty.replace(/,/g,';');
    console.log(sty.replace(/,/g,';'));
    
}

const Button = styled`.h1 {color: ${ theme => theme.color.primary},font-size: ${ theme => theme.fontSize.large}
  }
`
  
