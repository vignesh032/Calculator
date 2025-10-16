let input=document.querySelector("input")
let buttons=document.querySelectorAll("button")
let ac=document.querySelector(".ac")
let del=document.querySelector(".del")
let result=document.querySelector(".result")
buttons.forEach(e => {
    if(e.innerHTML!="DEL" && e.innerHTML!="="){
        e.addEventListener("click",()=>{
        input.value+=e.innerHTML
        console.log(e.innerHTML)
    })
}
});
ac.addEventListener("click",()=>{
    input.value=""
})
del.addEventListener("click",()=>{
    // let len=input.value.length-1
    input.value=input.value.slice(0,-1)
})
result.addEventListener("click",()=>{
    let exp=input.value
    input.value=eval(exp)
})

