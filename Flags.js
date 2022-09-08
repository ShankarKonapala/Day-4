
let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)
    allCountryFlags(data);

    function allCountryFlags(data) {
        for (let i=0;i<data.length;i++)
        {
            console.log(data[i].flags.png)
        }
    }
}

xhr.send();

//console.log("New object created"+xhr);