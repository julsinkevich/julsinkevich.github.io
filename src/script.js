var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "style_light.css";
    let darkTheme = "style_dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    console.log(currTheme)
   
    if(currTheme.endsWith(lightTheme))
    {

        theme = "style_dark.css";
    
    }
    else
    {    
         theme = "style_light.css";
  
    }

    link.setAttribute("href", theme);
  
    //Save(theme);
}