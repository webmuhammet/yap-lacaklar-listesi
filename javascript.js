let girilen,secilen;

let eklenen,btnTamamla,btnSil,sonuc;

function listeyeEkle()
{
    girilen=document.getElementById("txtyapilacaklar").value;

    if(girilen!="")
    {
        eklenen=document.createElement("li");
        document.getElementById("listeyapilacaklar").appendChild(eklenen);
        eklenen.innerHTML=girilen;
    }
}