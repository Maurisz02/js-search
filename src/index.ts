import 'bootstrap';


let lista = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Ólcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ];

  document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('kereso')?.addEventListener('input',()=>{

        let szoveg = (document.getElementById('kereso') as HTMLInputElement);

        let talalat = document.getElementById('talalat');

        if(szoveg.value.length >= 3){
            
            for(let l of lista){

                if(l.nev.includes(szoveg.value)){


                    let div = document.createElement("div");
                    div.classList.add("col-md-4");
                    

                    let card = document.createElement("div");
                    card.classList.add("card");

                      

                    let cardBody = document.createElement("div");
                    cardBody.classList.add("card-body");
                    cardBody.innerHTML = l.nev;

                     div.insertAdjacentElement("afterbegin",card);
                     card.insertAdjacentElement("afterbegin",cardBody);
                     talalat?.appendChild(div);


                    //talalat?.appendChild(div.appendChild(card.appendChild(cardBody)));
                    //talalat?.appendChild(div);
                    //talalat?.appendChild(card);
                    //talalat?.appendChild(cardBody);
                    
                }

            }

        }
        

    });

  });
  