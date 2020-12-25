session_start();

if(isset($_GET["theme"]))
{
    $theme = $_GET["theme"];

    if($theme == "light" || $theme == "dark")
    {
   	 $_SESSION["theme"] = $theme;
    }
}
https://skillbox.ru/media/code/kak_sdelat_tyemnuyu_temu_dlya_sayta/ 