

function search(f) {

        

        

                f.addEventListener('click', style(f));



        




}

function style(a){
        
        if(a.clicked === true){
                a.style.left = "20%";

        }
}
export { search };