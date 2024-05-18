let home=document.body.getElementsByTagName("nav")[0].firstElementChild.firstElementChild;
let o=document.body.getElementsByTagName("nav")[0].firstElementChild.children;
let other=Array.from(o);


for (let i = 1; i < other.length-2; i++) {
    
    other[i].addEventListener("mouseover",()=>{
    other[i].style.color="white";
    other[i].style.backgroundColor="black";
    home.style.color="black";
    home.style.backgroundColor="white";
    })
    
}
for (let i = 0; i < other.length-2; i++) {
    
    other[i].addEventListener("mouseout",()=>{
    other[i].style.color="black";
    other[i].style.backgroundColor="white";
    home.style.color="white";
    home.style.backgroundColor="black";
    })
    
}
let latest=document.body.querySelector(".latest");
let popular=document.body.querySelector(".popular");




    
    popular.addEventListener("mouseover",()=>{
    popular.style.color="white";
    popular.style.backgroundColor="black";
    latest.style.color="black";
    latest.style.backgroundColor="white";
    })
    


    
    popular.addEventListener("mouseout",()=>{
    popular.style.color="black";
    popular.style.backgroundColor="white";
    latest.style.color="white";
    latest.style.backgroundColor="black";
    })
    

let data = fetch("https://coding-week-2024-api.onrender.com/api/data");

data.then((response) => {
    return response.json();
}).then((resp2) => {

    let first = [document.body.querySelector(".first"), document.body.querySelector("#f1"), document.body.querySelector("#f2"), document.body.querySelector("#f3"), document.body.querySelector("#f4")];
    let second = [document.body.querySelector(".second"), document.body.querySelector("#s1"), document.body.querySelector("#s2"), document.body.querySelector("#s3"), document.body.querySelector("#s4")];
    let te = [document.body.querySelector(".ek"), document.body.querySelector("#te1"), document.body.querySelector("#te2"), document.body.querySelector("#te3"), document.body.querySelector("#te4")];
    let td = [document.body.querySelector(".do"), document.body.querySelector("#td1"), document.body.querySelector("#td2"), document.body.querySelector("#td3"), document.body.querySelector("#td4")];

    let n = resp2.length;

    first[0].style.backgroundImage = `url('${resp2[0].image}')`;
    second[0].style.backgroundImage = `url('${resp2[1].image}')`;
    te[0].style.backgroundImage = `url('${resp2[2].image}')`;
    td[0].style.backgroundImage = `url('${resp2[3].image}')`;

    first[1].innerHTML = resp2[0].type;
    second[1].innerHTML = resp2[1].type;
    te[1].innerHTML = resp2[2].type;
    td[1].innerHTML = resp2[3].type;

    first[2].innerHTML = resp2[0].headline;
    second[2].innerHTML = resp2[1].headline;
    te[2].innerHTML = resp2[2].headline;
    td[2].innerHTML = resp2[3].headline;

    first[3].innerHTML = resp2[0].author;
    second[3].innerHTML = resp2[1].author;
    te[3].innerHTML = resp2[2].author;
    td[3].innerHTML = resp2[3].author;

    first[4].innerHTML = resp2[0].date;
    second[4].innerHTML = resp2[1].date;
    te[4].innerHTML = resp2[2].date;
    td[4].innerHTML = resp2[3].date;

    document.body.getElementsByClassName("n1")[0].src = `${resp2[4].image}`;
    document.body.getElementsByClassName("n2")[0].innerHTML = resp2[4].headline;
    document.body.getElementsByClassName("n3")[0].innerHTML = resp2[4].date;

    for (let i = 5; i < n; i++) {
        let copy = document.querySelector(".pehle");
        let news = document.querySelector(".news");
        let copied = document.createElement("div");
        copied.className = "pehle";
        copied.innerHTML = copy.innerHTML;
        news.append(copied);

        document.body.getElementsByClassName("n1")[i - 4].src = `${resp2[i].image}`;
        document.body.getElementsByClassName("n2")[i - 4].innerHTML = resp2[i].headline;
        document.body.getElementsByClassName("n3")[i - 4].innerHTML = resp2[i].date;
    }

    let arr = [document.body.querySelector(".first"), document.body.querySelector(".second"), document.body.querySelector(".ek"), document.body.querySelector(".do")];
    let x = arr.length;

    for (let i = 0; i < 6; i++) {
        arr.push(document.getElementsByClassName("pehle")[i]);
    }



    console.log(Object.values(resp2[0]));
    console.log(resp2[0]);

    for (let i = 0; i < n; i++) {
  
        arr[i].addEventListener("click", () => {
            let desc = document.createElement("div");
            desc.className = "desc";  
            
            let img = document.createElement("img");
            img.src = `${resp2[i].image}`;
            desc.prepend(img);
 
            let content = document.createElement("ul"); 

            for (let k = 0; k < 7 ; k++) {
                if ((k == 0) || (k == 4)) {
                   
                }
                else{
                    let li = document.createElement("li");
                    li.textContent = `${Object.keys(resp2[i])[k]}:  ${Object.values(resp2[i])[k]}`;
                    content.appendChild(li);
                }
            }

            desc.appendChild(content);
            document.body.getElementsByTagName("main")[0].innerHTML = desc.outerHTML;
            setTimeout(() => {
                alert("press Home to go home page")
            }, 1000);
            
        });
    
    }
});


home.addEventListener("click",()=>{
    
    location.reload();



})


