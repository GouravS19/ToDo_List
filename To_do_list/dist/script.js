let add_btn=document.querySelector("#add_task")
add_btn.addEventListener("click",(e)=>{
    
    task=e.target.parentNode.querySelector("input").value
    // console.log(task)
    if(task=="")
    {
        console.log("there is no value")
    }
    else{
        //it is for recleaning add area
        e.target.parentNode.querySelector("input").value=""
        //
        let list=document.querySelector("#list")
        // console.log(list.childElementCount)
        if(list.childElementCount===1)
        {
            let manda=document.querySelector("#manda")
            manda.style.display="none"
        }
        let newDiv=document.createElement("div")
        newDiv.innerHTML=`
        <div class="flex ">
            <input type="checkbox" class="che size-[1.05rem] relative top-[6.3px]" name="" id="">
            <div class="ar text-xl ml-2 ">${task}</div>
        </div>
        <div>
            <i class="fa-solid fa-pencil fa-lg edit "></i>
            <i class="fa-solid fa-trash fa-lg del  mx-3"></i>
        </div>`
        newDiv.classList.add("flex", "justify-between","py-3","px-3","bg-white","border-b" ,"border-[#cacfd9]","dark:bg-[#26283dff]","dark:text-white","dark:border-[#363744]","font-medium","text-[#61646a]")
        //
        list.appendChild(newDiv)    
        
        //
        // list.appendChild(newDiv)
        let del=document.querySelectorAll(".del")
        newBtn=del[del.length-1]
        newBtn.addEventListener("click",(e)=>{
            e.target.parentNode.parentNode.remove()
            let list=document.querySelector("#list")
            console.log(list.childElementCount)
            if(list.childElementCount==1)
            {
                let manda=document.querySelector("#manda")
                manda.style.display="block"
            }
        })
        // console.log()
        
        let che=document.querySelectorAll(".che")
        newBtn3=che[che.length-1]
        newBtn3.addEventListener("click",(e)=>{
            let ch_val=e.target.checked
            let t_area=e.target.parentNode.querySelector("div")
            if(ch_val){
                t_area.classList.add("line-through")
                console.log(t_area)
            }
            else{
                t_area.classList.remove('line-through')
            }
            

            // t_area.classList.add("")
            
        })


        let edit=document.querySelectorAll(".edit")
        newBtn2=edit[edit.length-1]
        newBtn2.addEventListener("click",(e)=>{
            // let sib_div=e.target.parentNode.parentNode
            // console.log(sib_div)
            let pre=e.target.parentNode.parentNode
            pre_txt=e.target.parentNode.parentNode.querySelector(".ar").innerText
            // console.log(pre)
            let newDiv=document.createElement("div")
            newDiv.innerHTML=`
                <input type="text" value="${pre_txt}" name="" class="text-xl border-0  outline-0" id="">
                <button class="done px-3 py-1 bg-[#626ef0ff] rounded-sm font-medium text-white">Done</button>
            `
            // sib_div.insertAdjacentElement("afterend",newDiv)
            newDiv.classList.add("flex", "justify-between","border-0","outline-0","py-3","px-3","bg-white","border-b" ,"border-[#cacfd9]","font-semibold","text-[#61646a]")
            pre.replaceWith(newDiv)
            // console.log(pre)
            let done=document.querySelector(".done")
            done.addEventListener("click",(e)=>{
                let in_val=e.target.parentNode.querySelector("input").value
                // console.log(in_val)
                newDiv.replaceWith(pre)
                pre.querySelector(".ar").innerText=in_val
            })
        
        })
    }
},false)
// let sa=document.querySelector("#sa")
// console.log(sa.checked)
let sun=document.querySelector("#sun")
let moon=document.querySelector("#moon")
sun.style.display="none"
// console.log(document.querySelector("html"))
moon.addEventListener("click",()=>{
    moon.style.display="none"
    sun.style.display="inline"
    document.querySelector("html").setAttribute("class","dark text-[14.5px] md:text-[16px]")

})
sun.addEventListener("click",()=>{
    moon.style.display="inline"
    sun.style.display="none"
    document.querySelector("html").removeAttribute("class")
    document.querySelector("html").setAttribute("class"," text-[14.5px] md:text-[16px]")

})









