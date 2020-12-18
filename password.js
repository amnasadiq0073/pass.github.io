function Mpassword()
{
    s = document.getElementsByID("M_pass");
    if (s=="abcd")
    {
        window.location.href="correct.html";
    }
    else
    {
        alert("Incorrect password-Try again");
    }
}