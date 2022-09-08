
let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)

        for (let i=0;i<data.length;i++)
        {
            console.log(`
            ${data[i].name.common}
            ${data[i].name.common}
            ${data[i].subregion}
            `)
        }
}

xhr.send();

//console.log("New object created"+xhr);