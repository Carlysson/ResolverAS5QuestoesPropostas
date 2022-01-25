                        // Questão1 //
        
                        function nome (){
                            var nome = document.getElementById("inp1").value;
                            window.alert("O nome completo é: " +nome);}
                                     
                                        // Questão2 //
                
                                        function quantletras (){
                    var texto = "Nome " + '"' + document.getElementById("inp2").value + '"' + "," + " tem: ";
                    var nome = document.getElementById("inp2").value;
                    window.alert(texto = texto + nome.length + " caracteres");
                }
                
                                        // Questão3 //
                
                            function acende (){
                    document.querySelector('#img1').src="https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
                  }
                  
                  function apaga (){
                    document.querySelector('#img1').src="https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
                  }
                
                                       // Questão 4 //
                
                            function SomenteNumero(e){
                            var tecla=(window.event)?event.keyCode:e.which;   
                            if((tecla>47 && tecla<58)) return true;
                            else{
                            if (tecla==8 || tecla==0) return true;
                            else  return false;
                    }
                }
                
                            function enter(){
                
                            let minimo = document.getElementById('minimo');
                            let maximo = document.getElementById('maximo');
                            if(Number(minimo.value) == 0){
                                alert("Você não inseriu o número minimo");}
                            if(Number(maximo.value) == 0){
                                alert("Você não inseriu o número máximo")}
                            
                            if(Number(minimo.value) < Number(maximo.value)){
                
                            let quantMult = 0;
                            for(i = minimo.value; i < Number(maximo.value); i ++){
                            if ((i % 2 == 0)&&(i % 3 == 0)){
                                quantMult++;	
                            }
                        }
                        alert("A quantidade de números multiplos de 2 e de 3 é: "+quantMult);	
                    }else{
                        alert("O numero minimo eh maior que o maximo");
                    }
                }
                
                
                                       // Questão 5 //
                            
                            function SomenteNumero(e){
                            var tecla=(window.event)?event.keyCode:e.which;   
                            if((tecla>47 && tecla<58)) return true;
                            else{
                            if (tecla==8 || tecla==0) return true;
                            else  return false;
                            }
                            }
                
                            function fatorial(n) {
                            var fatorial = document.getElementById("inp4").value;
                            for(var i = 1; i < document.getElementById("inp4").value; i++){
                                fatorial = fatorial * i;
                            }
                            window.alert(document.getElementById("inp4").value +"! = " + fatorial + ";");    
                            }