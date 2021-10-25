function Calcular(){
    		//Declarar variables
    		var PE, VE, MA, ME, JU, SA, NE, PL, UR;
    		//Recuperar los valores
            PE=parseInt(document.getElementById("Pes").value);
    		VE=parseInt(document.getElementById("Ven").value);
    		MA=parseInt(document.getElementById("Mar").value);
            ME=parseInt(document.getElementById("Mer").value);
            JU=parseInt(document.getElementById("Jup").value);
            SA=parseInt(document.getElementById("Sat").value);
            NE=parseInt(document.getElementById("Nep").value);
            PL=parseInt(document.getElementById("Plu").value);
            UR=parseInt(document.getElementById("Ura").value);
    		//Realizar la operación
    		VE=(PE*8.87)/9.8;
            MA=(PE*3.71)/9.8;
            ME=(PE*2.78)/9.8;
            JU=(PE*22.8)/9.8;
            SA=(PE*8.96)/9.8;
            NE=(PE*11)/9.8;
            PL=(PE*0.4)/9.8;
            UR=(PE*7.77)/9.8;
    		//Mostrar el resultado
    		document.getElementById("Ven").value=VE;
            document.getElementById("Mar").value=MA;
            document.getElementById("Mer").value=ME;
            document.getElementById("Jup").value=JU;
            document.getElementById("Sat").value=SA;
            document.getElementById("Nep").value=NE;
            document.getElementById("Plu").value=PL;
            document.getElementById("Ura").value=UR;
    	}
    	function Nuevo(){
            document.getElementById("Pes").value="";
    		document.getElementById("Ven").value="";
    		document.getElementById("Mar").value="";
    		document.getElementById("Mer").value="";
            document.getElementById("Jup").value="";
            document.getElementById("Sat").value="";
            document.getElementById("Nep").value="";
            document.getElementById("Plu").value="";
            document.getElementById("Ura").value="";
    	}
        function Regresar(){
            window.location.href("file:///D:/5%20Semestre/Login/LoginMiguel.html");
        }