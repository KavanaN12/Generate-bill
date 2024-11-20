function addPurchase() {
    var item=document.getElementById("item").value;
    var quantity=document.getElementById("quantity").value;
    var code=document.getElementById("code").value;
    var price=document.getElementById("price").value;
    var tableBody=document.getElementById("purchaseBody");
    if (item!='' & quantity!='' & code!='' & price!='') {
    var newRow=tableBody.insertRow();
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=item;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=quantity;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=code;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=price+'*'+quantity+' = '+price*quantity;
    updateTotalPrice(parseFloat(price*quantity));
    document.getElementById("purchaseForm").reset();
    }
}
function updateTotalPrice(price) {
    var totalPrice=document.getElementById("totalPrice");
    var currentPrice=parseFloat(totalPrice.innerHTML);
    totalPrice.innerHTML=(currentPrice+price).toFixed(2);
}