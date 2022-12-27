

Filter={

    q:{evet:()=>{

        localStorage.setItem("cevap"+question,"true");
    },

    hayır:()=>{
        localStorage.setItem("cevap"+question,"false");
    }
    },

    status:{
        arr:[],
    },
       
    result:()=>{
       for (let i = 1; i <= 5; i++) {
         
         var cev=localStorage.getItem("cevap"+i)
         Filter.status.arr.push(cev)
         
       }
      
        Filter.puan();
        
    },

    puan:()=>{
        var puan=0;
        Filter.status.arr.filter(x=>{
            if (x=="true"){
                puan+=20;
            }
        })
        document.querySelector(".puanDiv").innerHTML=puan;
        
        }
    }


    

      
    

    




