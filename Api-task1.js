const Api_url = "https://fakestoreapi.com/products";

async function Fake_store() {
  const response = await fetch(Api_url);
  const data = await response.json();
  console.log(data);
  // let tablecontent ="";
  data.forEach((element) => {
    document.getElementById(tablecontent);
    const trELe = document.createElement("tr");
    tablecontent.appendChild(trELe);
    //td id
    const tdid = document.createElement("td");
    tdid.innerText = element.id;
    trELe.appendChild(tdid);

    //td
    const td1 = document.createElement("td");
    td1.innerText = element.title;
    trELe.appendChild(td1);

    //td2
    const td2 = document.createElement("td");
    td2.innerText = element.description;
    trELe.appendChild(td2);
    // td3
    //td2
    const td3 = document.createElement("td");
    td3.innerText = `${element.price}$`;
    td3.style.fontSize = "32px";

    trELe.appendChild(td3);
    //td4
    //td2
    const td4 = document.createElement("td");
    const imgele = document.createElement("img");
    imgele.style.width = "150px";
    imgele.style.height = "150px";
    imgele.src = element.image;
    td4.appendChild(imgele);
    trELe.appendChild(td4);
  });
}
Fake_store();
