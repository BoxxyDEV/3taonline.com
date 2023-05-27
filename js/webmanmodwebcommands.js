// Some webman mod commands library you can use if you would like this was made by Boxuga
// if loading on a ps3 contact localhost at "127.0.0.1"


function PS3Notify(ip, text, icon)
{
    const ps3req = new XMLHttpRequest();
    ps3req.open("GET", "http://"+ encodeURIComponent(ip) + "/popup.ps3?" + encodeURIComponent(text) + "&icon=" + encodeURIComponent(icon));
    ps3req.send();
}

function PS3Delete(ip, path)
{
    const ps3 = new XMLHttpRequest();
    ps3.open("GET", "http://" + encodeURIComponent(ip) + "/delete.ps3/" + encodeURIComponent(path));
    ps3.send();
}

function PS3AutoInstallPKG(ip, downloadurl)
{
    const ps3 = new XMLHttpRequest();
    ps3.open("GET", "http://" + encodeURIComponent(ip) + "/xmb.ps3/install.ps3?url=" + encodeURIComponent(downloadurl));
    ps3.send();
}
