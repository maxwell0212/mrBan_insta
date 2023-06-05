/*
document.addEventListener("DOMContentLoaded",
    function(e) {
        
        document.addEventListener("keydown",
            function(e) {
                console.log(e.key)
                if( e.key === 'q' ){
                    alert("this is Q!")
                }
            }
        )
        
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e) {
                console.log(e.target.value)
            }
        )

        let change = document.querySelector("#change")
        change.addEventListener("change", 
            function(e) {
                console.log(e.target.value)
            }
        )
        
        let input = document.querySelector("#input")
        input.addEventListener("input", 
            function(e){ 
                console.log(e.target.value) 
            }
        )
    }
)
*/

/*
document.addEventListener("DOMContentLoaded", 
    function( e ){
        let input = document.querySelector("input")
        input.addEventListener("click", 
            function(e) {
                //console.log( e.target.getAttribute("type") )
                if( e.target.getAttribute("type") === "button")
                    e.target.setAttribute("type", "text")
                else
                    e.target.setAttribute("type", "button")
            }
        )

        input.addEventListener("change", 
            function( e ) {
                //if( e.key === "Enter" ){
                    e.target.setAttribute("type", "button")
                //}
            }
        )
    }
)
*/

/*
document.addEventListener("DOMContentLoaded", 
    function( e ) {
        let button = document.querySelector("input")

        let img = document.querySelector("img")
        let img1 = "image/hl 1.jpg"
        let img2 = "image/hl 2.jpg"
        let img3 = "image/profile.jpg"

        button.addEventListener("click", 
            function(e) {
                let src = img.getAttribute("src")
                if( src === img1 ){
                    img.setAttribute("src", img2)
                } else if( src === img2 ){
                    img.setAttribute("src", img3 )
                } else {
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)
*/

/*
document.addEventListener("DOMContentLoaded", 
    function( e ) {
        let button = document.querySelector("input")
        let p = document.querySelector("p")

        button.addEventListener("click", 
            function(e){
                //console.log(p.textContent)
                p.textContent = "JS로 입력함"
            }
        )
    }
)
*/

document.addEventListener("DOMContentLoaded", 
    function( e ) {
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editNameField")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click", 
            function( e ) {
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        okButton.addEventListener("click", 
            function(e) {
                nameHere.textContent = newName.value 
                editName.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )

    }
)

// JavaScript 의 주석
function hi(){
    alert("hi")
}

function red(e){
    console.log(e)
    e.target.style.backgroundColor = "red"
}

function blue(e){
    e.target.style.backgroundColor = "blue"
}