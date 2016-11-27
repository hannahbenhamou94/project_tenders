﻿var url = null;
function LoadDTender() {
    if (!url) {
        url = window.location.href;
        url = url.substr(url.indexOf('=') + 1);

    }
    //alert(url);
    $.ajax({
        type: "POST",
        url: "/Client/getSuggestion",
        data: { 'numTender': url },
        success: function (data) {
            // alert("sucsses");
            //render products to appropriate dropdown
            renderDTender(data);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function renderDTender(data) {
    //render product
    $.each(data, function (i, v) {
        var table = document.getElementById("t01");
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell3 = row.insertCell(1);
        var cell4 = row.insertCell(2);
        var cell5 = row.insertCell(3);
        var cell6 = row.insertCell(4);
        var cell7 = row.insertCell(5);
        var cell8 = row.insertCell(6);
        cell1.innerHTML = v.name;
        cell3.innerHTML = v.nameCategory;
        cell4.innerHTML = v.timeSuggestion;
        cell5.innerHTML = v.NameProduct;
        cell6.innerHTML = v.nameCompanyCont;
        cell7.innerHTML = v.phoneCont;
        cell8.innerHTML = v.priceToProduct;


    }
    )
}

LoadDTender();


