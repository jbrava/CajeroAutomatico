///////////////////////////////////////////////////////////////////////////////////////////
//ARRAY
///////////////////////////////////////////////////////////////////////////////////////////
let usersDB=
[
    {
        user:'jess',
        pass:'abc',
        nombre:'Jessica',
        saldo:200
    },
    {
        user:'gera',
        pass:'gera',
        nombre:'Gerardo',
        saldo:290
    },
    {
        user:'maui',
        pass:'abcx',
        nombre:'Maui',
        saldo:67
    }
]

///////////////////////////////////////////////////////////////////////////////////////////
//VARIABLES
///////////////////////////////////////////////////////////////////////////////////////////
const Ingresar=document.getElementById('Ingresar');
const Saludo=document.getElementById('Saludo');
const Consultar=document.getElementById('Consultar');
const Depositar=document.getElementById('Depositar');
const Retirar=document.getElementById('Retirar');
const Cerrar=document.getElementById('Cerrar');
const regresar=document.getElementById('Regresar');
const test=document.getElementById('test');

let bienvenide=document.getElementById('Saludo');
///////////////////////////////////////////////////////////////////////////////////////////
//FUNCIONES
///////////////////////////////////////////////////////////////////////////////////////////

function validarUsuario(user,password)
{
    for(let i=0;i<usersDB.length;i++)
    {        
        if(user.toLowerCase()==usersDB[i].user && password==usersDB[i].pass)
        {
            localStorage.setItem("log",i);
            window.location="main.html";
            i=usersDB.length;
        }
        else if(i==(usersDB.length)-1)
        {
            //document.getElementById('errorDatos').className="error";
            window.alert("Usuario o contraseña incorrectos");
            document.getElementById('Usuario').value='';
            document.getElementById('Contraseña').value ='';
        }
    }
 
}

function Retiro(a,b)
{
    if(a-b>usersDB[1].saldo)
    {
        window.alert("El monto a retirar no puede ser mayor que el Saldo Actual");
        document.getElementById('l2').textContent='$'+usersDB[logi].saldo;
    }
    else if(a-b<10)
    {
        window.alert("El nuevo saldo no puede ser menor a $10");
        document.getElementById('l2').textContent='$'+usersDB[logi].saldo;
    }
    else
    {
        window.alert("Se retiro con exito: $"+ b);
        document.getElementById('l2').textContent='$'+(a-b);
        usersDB[logi].saldo=(a-b);
    }
}

function Deposito(a,b)
{
    if((a+b)>990)
    {
        window.alert("El nuevo saldo no puede ser mayor a $990");
        document.getElementById('l2').textContent='$'+usersDB[logi].saldo;
    }
    else
    {
        window.alert("Se deposito con exito: $"+ b);
        document.getElementById('l2').textContent='$'+(a+b);
        usersDB[logi].saldo=(a+b);
        
    }  
}

///////////////////////////////////////////////////////////////////////////////////////////
//EVENTOS VENTANA 1
///////////////////////////////////////////////////////////////////////////////////////////
//VENTANA 1_ValidarUusuario
if(Ingresar != null){  
    Ingresar.addEventListener('click',(evento)=>{
        evento.preventDefault();

        const user= document.getElementById('Usuario').value;
        const password= document.getElementById('Contraseña').value;

        validarUsuario(user,password);

    });
}   
///////////////////////////////////////////////////////////////////////////////////////////
//EVENTOS VENTANA 2
///////////////////////////////////////////////////////////////////////////////////////////
//VENTANA 2_ONLOAD
const logi=localStorage.getItem("log");

if(bienvenide!=null)
{
    bienvenide.textContent="Hola, "+usersDB[logi].nombre;
}


//VENTANA 2_CONSULTAR
if(Consultar != null){   
    Consultar.addEventListener('click',(evento)=>{
        evento.preventDefault();

        document.getElementById('l2').textContent='$'+usersDB[logi].saldo;
        //window.location="Consultar.html";

    });
}


//VENTANA 2_DEPOSITAR
if(Depositar != null){   
        Depositar.addEventListener('click',(evento)=>{
            evento.preventDefault();
            
            const valor=document.getElementById('Valor').value;
            if(valor)
            {
                Deposito(usersDB[logi].saldo,parseInt(valor));
            }
            else
            {
                window.alert("Porfavor introduzca una cantidad");
            }
            
            document.getElementById('Valor').value='';
            
        });
}

//VENTANA 2_RETIRAR
if(Retirar != null){   
            Retirar.addEventListener('click',(evento)=>{
                evento.preventDefault();
                
                const valor=document.getElementById('Valor').value;
                if(valor)
                {
                    Retiro(usersDB[logi].saldo,parseInt(valor));
                }
                else
                {
                    window.alert("Porfavor introduzca una cantidad");
                }
                document.getElementById('Valor').value='';
                
            });
}           

//VENTANA 2_CERRAR
if(Cerrar != null){   
    Cerrar.addEventListener('click',(evento)=>{
        evento.preventDefault();
        
        window.alert("QUE TENGA UN BUEN DIA");
        window.location="lOGGIN.html";
    });
}     

//VENTANA 2_TEST
if(test != null){   
    test.addEventListener('click',(evento)=>{
        evento.preventDefault();
        
        window.location="Depositar.html";
    });
}    



