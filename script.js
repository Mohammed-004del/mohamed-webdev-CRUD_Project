let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let Total = document.getElementById('Total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');

let mood = "create";
let tmp;

let input = [price , taxes , ads , discount];

function gettotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        Total.innerHTML = result;
        Total.style.background = 'green';
    }else{
        Total.innerHTML = '';
        Total.style.background = '#690000';
    }
}

for(let i = 0 ; i < input.length ; i++){
    input[i].onkeyup = function(){
        gettotal();
    }
}


let arrpro;

if(localStorage.product != null){
    arrpro = JSON.parse(localStorage.product);
}else{
    arrpro = [];  //array عشان افضل مكان نحفظ فيه الداتا و سهل لأي عمليه عايزين نعملها على الداتا فيما بعد
}



create.onclick = function(){

    let discountValue;

    if (discount.value === '' || discount.value == null) {  
        discount.value = 0;
    } else {
        discount.value = +discount.value; // تأكد إنها رقم
    }

    let newpro = {            //object عشان تكون لدنيا منظمه و نعرف انهي بيانات لانهي عنصر
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        Total: Total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
        create: create.value,
    }


    if(title.value != '' && price.value != '' && category.value != '' && count.value < 100){
        if(mood === "create"){
            if(newpro.count > 1){
            for(let i = 0 ; i < newpro.count ; i++){
                arrpro.push(newpro);    //to add elemnt in the end of the array, if I created a new product it will be added after the firstone I have been already add it
            }
            }else{
                arrpro.push(newpro);
            }
        }else{
            arrpro[tmp] = newpro;
            mood = "create";
            create.innerHTML = 'create';
            count.style.display = 'block';
        }
        cleardata();        
    }
    
    localStorage.setItem('product' , JSON.stringify(arrpro));
    read();
    
    gettotal();
}


function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    Total.innerHTML = '';
    count.value = '';
    category.value = '';
}


function read(){
    let tablebody = document.getElementById('table');
    let table = '';
    for(let i = 0 ; i < arrpro.length ; i++){
        table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${arrpro[i].title} </td>
            <td>${arrpro[i].price}</td>
            <td>${arrpro[i].taxes}</td>
            <td>${arrpro[i].ads}</td>
            <td>${arrpro[i].discount}</td>
            <td>${arrpro[i].Total}</td>
            <th>${arrpro[i].category}</th>
            <td><button onclick="updatedata(${i})" id="update">update</button></td>
            <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
        </tr>
        `
    }

    tablebody.innerHTML = table;

    let btndelete = document.getElementById('DeleteAll');
    if(arrpro.length > 0){
        btndelete.innerHTML = `
        <button onclick="deleteAll()"  id="delete">Delete All (${arrpro.length})</button>
        `
    }else{
        btndelete.innerHTML = '';
    }
}
read();



function deletedata(i){
    arrpro.splice(i , 1);
    localStorage.product = JSON.stringify(arrpro);
    read();
}




function deleteAll(){
    localStorage.clear();
    arrpro.splice(0);
    read();
}


function updatedata(i){
    title.value = arrpro[i].title;
    price.value = arrpro[i].price;
    taxes.value = arrpro[i].taxes;
    ads.value = arrpro[i].ads;
    discount.value = arrpro[i].discount;
    category.value = arrpro[i].category;
    count.style.display = 'none';
    gettotal();
    create.innerHTML = 'Update';
    tmp = i;
    mood = "Update";
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}




let searchmood = 'title';

function getsearchmood(id){
    let search = document.getElementById('search');
    if(id == "searchtitle"){
        searchmood = 'title';
    }else{
        searchmood = 'category';
    }
    search.placeholder = 'search by '+searchmood;
    search.focus();
    search.value = '';
    read();
}



function search(value){
    let tablebody = document.getElementById('table');
    let table = '';
    for(let i = 0 ; i < arrpro.length ; i++){
        if(searchmood == 'title'){
            if(arrpro[i].title.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td> ${i} </td>
                    <td> ${arrpro[i].title} </td>
                    <td>${arrpro[i].price}</td>
                    <td>${arrpro[i].taxes}</td>
                    <td>${arrpro[i].ads}</td>
                    <td>${arrpro[i].discount}</td>
                    <td>${arrpro[i].Total}</td>
                    <th>${arrpro[i].category}</th>
                    <td><button onclick="updatedata(${i})" id="update">update</button></td>
                    <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
                </tr>
                `
            }
        }else{
            if(arrpro[i].category.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td> ${i} </td>
                    <td> ${arrpro[i].title} </td>
                    <td>${arrpro[i].price}</td>
                    <td>${arrpro[i].taxes}</td>
                    <td>${arrpro[i].ads}</td>
                    <td>${arrpro[i].discount}</td>
                    <td>${arrpro[i].Total}</td>
                    <th>${arrpro[i].category}</th>
                    <td><button onclick="updatedata(${i})" id="update">update</button></td>
                    <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
                </tr>
                `
            }
        }
    }

    tablebody.innerHTML = table;
}



