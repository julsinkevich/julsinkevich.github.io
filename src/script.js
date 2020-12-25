var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "style_light.css";
    let darkTheme = "style_dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "style_dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "style_light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}