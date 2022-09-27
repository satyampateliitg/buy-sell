const firebaseConfig = {
    apiKey: "AIzaSyC6wbrvtVgSgKS-2eolBQzX_AzDShPGNM0",
    authDomain: "trial-44a22.firebaseapp.com",
    databaseURL: "https://trial-44a22-default-rtdb.firebaseio.com",
    projectId: "trial-44a22",
    storageBucket: "trial-44a22.appspot.com",
    messagingSenderId: "986784761160",
    appId: "1:986784761160:web:8e00b3b3d83c29c3bf5f7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var OuterDiv = document.getElementById('productsDiv');
let uid=sessionStorage.getItem("uid");
function delfun() {
    let del = firebase.database().ref("users/" + uid);
    del.remove()
        .then(() => {
            alert("data removed successfully");
        })
        .catch((error) => {
            alert("unsuccessful,error" + error);
        })
}



let star = firebase.database().ref("users/" + uid);
star.on("value", (snapshot) => {
    const data = snapshot.val();
    if(data!=null){

    console.log(data.Name)
    console.log(data.Email)
    console.log(data.Category)
    console.log(data.Price)
    console.log(data.LinksOfImagesArray[0])

    _name = data.Name
    _email = data.Email
    _category = data.Category
    _price = data.Price
    _imglink = data.LinksOfImagesArray[0]



        let html =
        `
    <img src="`+ _imglink + `" class="thumb mt-2" id="thumb1` + `">
    <h5 class="category"> Category: `+ _category.toUpperCase() + `</h5>
    <h5 class="name"> Name: `+ _name.toUpperCase() + `</h5>
    <h5 class="email"> Email: `+ _email+ `</h5>
    <h5 class="price"> Price: `+ _price +` Rs.</h5>
    <button type="button" id="khtm">Delete</button>
    `

//     let html =
//         `
// <img src="`+ _imglink + `" class="thumb mt-2" id="thumb1` + `">
// <h5 class="category"> Category: `+ _category.toUpperCase() + `</h5>
// <h5 class="name"> Name: `+ _name.toUpperCase() + `</h5>
// <h5 class="email"> Email: `+ _email + `</h5>
// <h5 class="price"> Price: `+ _price + ` Rs.</h5>
// <button type="button" onclick="`+ delfun()`">Delete</button>
// `


    //     let html =
    //     `
    // <img src="`+ _imglink + `" class="thumb mt-2" id="thumb1` + `">
    // <h5>`+ _category.toUpperCase() + `</h5>
    // <h5>`+ _name.toUpperCase() + `</h5>
    // <h5>`+ _email + `</h5>
    // <h5>`+ _price +` Rs.</h5>
    // `
    //     `
    // <img src="`+ _imglink + `" class="thumb mt-2" id="thumb1` + `">
    // <h5 class="category"> Category: `+ category.toUpperCase() + `</h5>
    // <h5 class="name"> Name: `+ _name.toUpperCase() + `</h5>
    // <h5 class="email"> Email: `+_email + `</h5>
    // <h5 class="price"> Price: `+ _price +` Rs.</h5>
    // `

    let newProd = document.createElement('div');
    newProd.classList.add('productcard');
    newProd.innerHTML = html;
    OuterDiv.append(newProd)

    // for (const key in data) {
    //     console.log(key + ":" + data[key]);
    //   }

    // console.log(data);

    var khtm=document.getElementById("khtm");
    khtm.addEventListener("click",()=>{
        delfun();
        window.location.reload();
        insertingnew();
    })
}
else{
    console.log("no data");
    let message=document.createElement('h5');
    message.classList.add("msg");
    let upbtn=document.createElement('button');
    upbtn.classList.add("upbt");
    message.innerHTML="no item to show";
    upbtn.innerHTML="Upload";
    upbtn.type="button";
    upbtn.addEventListener("click",()=>{
        window.location.href="uploadpagecopy.html";
    })
    OuterDiv.append(message);
    OuterDiv.append(upbtn);

}
});






