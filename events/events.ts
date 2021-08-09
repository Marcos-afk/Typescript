
class clickHandler {
        constructor(){
            let main = document.getElementById('conteudo');
            let click = document.getElementById('click');
            let click2 = document.getElementById('click2');

            if(main !== null && click !== null && click2 !== null){
                main.addEventListener('click', clickHandler.alertMain);
                click.addEventListener('click', clickHandler.alertBtn);
                click2.addEventListener('click', clickHandler.alertBtn2);
            }

        }
        
        static alertMain() : void {
            alert('clicked over main');
        }
        static alertBtn(event : any) : void {
            alert('clicked over button');
            event.stopPropagation();
        }
        static alertBtn2(event : any) : void {
            alert('clicked over button 2');
            event.stopPropagation();
        }
}

const ClickHandler = new clickHandler();





