var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "src/style_light.css";
    let darkTheme = "src/style_dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    console.log(currTheme)
   
    if(currTheme.endsWith(lightTheme))
    {
        theme = "src/style_dark.css";
    }
    else
    {    
         theme = "src/style_light.css";
    }

    link.setAttribute("href", theme);
  
}