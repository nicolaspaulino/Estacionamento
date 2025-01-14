function Autenticar()
{
    document.getElementById("inicio").innerHTML= "<h2>Autenticação de usuario</h2> "
    
    let tela= document.createElement("FORM");
    tela.setAttribute("id","myForm");
    document.getElementById("inicio").appendChild(tela);
    
    let nome = document.createElement("INPUT");
    nome.setAttribute("type", "text");
    nome.setAttribute("id", "nome");
    nome.setAttribute("class", "form-control my-2");
    nome.setAttribute("placeholder", "Insira seu nome aqui!");
    document.getElementById("myForm").appendChild(nome);
    
    let senha = document.createElement("INPUT");
    senha.setAttribute("type", "password");
    senha.setAttribute("id", "senha");
    senha.setAttribute("class", "form-control my-2");
    senha.setAttribute("placeholder", "Insira a senha aqui");
    document.getElementById("myForm").appendChild(senha);
  
    let entrar = document.createElement("INPUT");
    entrar.setAttribute("type", "submit");
    entrar.setAttribute("class", "btn btn-success mt-3");
    entrar.setAttribute("value", "Entrar");
    entrar.setAttribute("onclick", "entrar()");
    document.getElementById("myForm").appendChild(entrar);
}

function entrar()
{
    let password= document.getElementById("senha").value;
    let name= document.getElementById("nome").value;
    if(name=="")
    {
        alert("Insira um nome!")
        Autenticar()
    }
    else if(password!= 123)
    {
        alert("senha incorreta! Tente novamente!")
        Autenticar()
    }
    else
    {
        document.body.innerHTML=""
        let Boasvindas= document.createElement("H1");
        Boasvindas.innerHTML="Seja bem-vinda(o), " + name + "."
        document.body.appendChild(Boasvindas)
        
        let janelaPri = document.createElement("DIV");
        janelaPri.setAttribute("id", "corpot");
        janelaPri.setAttribute("class", "container mt-5");
        document.body.appendChild(janelaPri);

        let tarifa= document.createElement("INPUT")
        tarifa.setAttribute("id", "tarifa")
        tarifa.setAttribute("name", " tarifa")
        tarifa.setAttribute("class","Preenchimento")
        tarifa.setAttribute("value", "20")
        
        let LabelTarifa= document.createElement("LABEL")
        LabelTarifa.setAttribute("for","tarifa")
        LabelTarifa.innerHTML="Tarifa: "
        document.getElementById("corpot").appendChild(LabelTarifa)
        document.getElementById("corpot").appendChild(tarifa)

        let dataT= document.createElement("LABEL")
        dataT.setAttribute("for","data")
        dataT.innerHTML="Data atual: "
        document.getElementById("corpot").appendChild(dataT)

        let data= document.createElement("INPUT")
        data.setAttribute("class","Preenchimento()")
        data.setAttribute("id","data")
        data.setAttribute("name","data")
        data.setAttribute("type","date")
        document.getElementById("corpot").appendChild(data)

        let selec= document.createElement("LABEL")
        selec.setAttribute("for","selecao")
        selec.innerHTML="Convenios: "
        document.getElementById("corpot").appendChild(selec)

        let selecao= document.createElement("SELECT")
        selecao.setAttribute("id","selecao")
        selecao.setAttribute("name","selecao")
        document.getElementById("corpot").appendChild(selecao)

        let opcaoDefault = document.createElement("OPTION");
        opcaoDefault.setAttribute("value", "0");
        opcaoDefault.setAttribute("selected", true);
        opcaoDefault.textContent = "Sem convênio";
        selecao.appendChild(opcaoDefault);
        loadConv()

        let Entrada= document.createElement("H1")
        Entrada.innerHTML= "Entrada de novos veiculos: "
        document.getElementById("corpot").appendChild(Entrada)

        let horalabel= document.createElement("LABEL")
        horalabel.setAttribute("for","horario")
        horalabel.innerHTML= " Hora da entrada: "
        document.getElementById("corpot").appendChild(horalabel)

        let Horainicial= document.createElement("INPUT")
        Horainicial.setAttribute("type","number")
        Horainicial.setAttribute("id","hora")
        Horainicial.setAttribute("name", "horario")
        Horainicial.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Horainicial)

        let Saidalabel= document.createElement("LABEL")
        Saidalabel.setAttribute("for","Placa")
        Saidalabel.innerHTML= " Hora saida:"
        document.getElementById("corpot").appendChild(Saidalabel)

        let saida2= document.createElement("INPUT")
        saida2.setAttribute("type","number")
        saida2.setAttribute("id","saida")
        saida2.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(saida2)

        let Placalabel= document.createElement("LABEL")
        Placalabel.setAttribute("for","Placa")
        Placalabel.innerHTML= "<br>" + "Placa:"
        document.getElementById("corpot").appendChild(Placalabel)

        let Placa= document.createElement("INPUT")
        Placa.setAttribute("type","text")
        Placa.setAttribute("name", "Placa")
        Placa.setAttribute("id","placa")
        Placa.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Placa)
        
        let Modelolabel= document.createElement("LABEL")
        Modelolabel.setAttribute("for","modelo")
        Modelolabel.innerHTML= "Modelo/marca: "
        document.getElementById("corpot").appendChild(Modelolabel)

        let Modelo= document.createElement("INPUT")
        Modelo.setAttribute("type","text")
        Modelo.setAttribute("id","modelo")
        Modelo.setAttribute("name", "modelo")
        Modelo.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Modelo)
     
        let Corlabel= document.createElement("LABEL")
        Corlabel.setAttribute("for","cor")
        Corlabel.innerHTML= "<br>" + " Cor: "
        document.getElementById("corpot").appendChild(Corlabel)

        let Cor= document.createElement("INPUT")
        Cor.setAttribute("type","text")
        Cor.setAttribute("id","cor")
        Cor.setAttribute("name", "cor")
        Cor.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Cor)

        let Registrar= document.createElement("BUTTON")
        Registrar.innerHTML="Registrar"
        Registrar.setAttribute("onclick","Registrar()")
        Registrar.setAttribute("class","btn btn-success mt-3")
        document.getElementById("corpot").appendChild(Registrar)
    
        let tabela= document.createElement("TABLE")
        tabela.setAttribute("class", "table table-striped table-hover mt-4");
        tabela.setAttribute("id","tabela")
        document.getElementById("corpot").appendChild(tabela)

        let Cabeçalho= document.createElement("THEAD")
        Cabeçalho.setAttribute("id","cabeça")
        document.getElementById("tabela").appendChild(Cabeçalho)

        let Tabelabody= document.createElement("TBODY")
        Tabelabody.setAttribute("id","corpoTable")
        document.getElementById("tabela").appendChild(Tabelabody)

        let Linhacabe= document.createElement("TR")
        Linhacabe.setAttribute("id","TR")
        document.getElementById("cabeça").appendChild(Linhacabe)
        
        let Coluna0=document.createElement("TH")
        Coluna0.innerHTML= "Data"
        document.getElementById("TR").appendChild(Coluna0)
        let Coluna1=document.createElement("TH")
        Coluna1.innerHTML= "Placa"
        document.getElementById("TR").appendChild(Coluna1)
        let Coluna2=document.createElement("TH")
        Coluna2.innerHTML="Modelo/marca"
        document.getElementById("TR").appendChild(Coluna2)
        let Coluna3=document.createElement("TH")
        Coluna3.innerHTML= "Cor"
        document.getElementById("TR").appendChild(Coluna3)
        let Coluna4=document.createElement("TH")
        Coluna4.innerHTML="Entrada"
        document.getElementById("TR").appendChild(Coluna4)
        let Coluna5=document.createElement("TH")
        Coluna5.innerHTML="Saída"
        document.getElementById("TR").appendChild(Coluna5)
        let Coluna6=document.createElement("TH")
        Coluna6.innerHTML="Tempo"
        document.getElementById("TR").appendChild(Coluna6)
        let Coluna7=document.createElement("TH")
        Coluna7.innerHTML="Valor"
        document.getElementById("TR").appendChild(Coluna7)
    }
}
let tickets = [];

function Registrar() {    
    let dataStr = document.getElementById("data").value
    let placa = document.getElementById("placa").value
    let modelo = document.getElementById("modelo").value
    let cor = document.getElementById("cor").value
    let entrada = parseInt(document.getElementById("hora").value)
    let saida = parseInt(document.getElementById("saida").value)
    let tarifav = parseFloat(document.getElementById("tarifa").value)
    let desconto = parseFloat(document.getElementById("selecao").value)

    if (!dataStr) {
        alert("Insira a data!");
        
    }
    else if (entrada == "" || cor == "" || modelo == "" || placa == "" || saida == "") {
        alert("Insira os espaços vazios");
        
    }
    else if (saida <= entrada) {
        alert("A hora de saída deve ser maior que a de entrada!");
    }
    else
    {
    let partesData = dataStr.split("-");
    let data = new Date(partesData[0], partesData[1] - 1, partesData[2]);

    let tempo = saida - entrada;

    let valor;
    if (tempo == 1) {
        valor = tarifav;
    } else {
        valor = (tarifav / 2.0) * (tempo - 1) + (tarifav * 1);
    }
    valorfinal= valor - valor*(desconto/100.0)

    let ticket = {
        data: data.toLocaleDateString("pt-BR"),
        placa,
        modelo,
        cor,
        entrada: entrada + ":00",
        saida: saida + ":00",
        tempo: tempo + " hora(s)",
        valor: "R$ " + valorfinal.toFixed(2)
    };

    tickets.push(ticket);
    atualizarTabela();
    }
}

function atualizarTabela() {
    let corpoTabela = document.getElementById("corpoTable");
    corpoTabela.innerHTML = "";

    tickets.forEach((ticket, index) => {
        let row = corpoTabela.insertRow();
        let celula0 = row.insertCell();
        let celula1 = row.insertCell();
        let celula2 = row.insertCell();
        let celula3 = row.insertCell();
        let celula4 = row.insertCell();
        let celula5 = row.insertCell();
        let celula6 = row.insertCell();
        let celula7 = row.insertCell();
        let celula8 = row.insertCell(); 

        celula0.innerHTML = ticket.data
        celula1.innerHTML = ticket.placa
        celula2.innerHTML = ticket.modelo
        celula3.innerHTML = ticket.cor
        celula4.innerHTML = ticket.entrada
        celula5.innerHTML = ticket.saida
        celula6.innerHTML = ticket.tempo
        celula7.innerHTML = ticket.valor

        let excluirBtn = document.createElement("button");
        excluirBtn.innerText = "Excluir";
        excluirBtn.onclick = () => excluir(index);
        celula8.appendChild(excluirBtn); 
    });
}

function excluir(index) {
    if (index >= 0 && index < tickets.length) {
        tickets.splice(index, 1);
        atualizarTabela();
    } else {
        alert("Índice inválido!");
    }
}

function Funcionario()
{
    document.getElementById("inicio").innerHTML= "<h2>Registro:</h2>"
    
    let Funcioform= document.createElement("FORM")
    Funcioform.setAttribute("id","Funcionario")
    document.getElementById("inicio").appendChild(Funcioform);

    let nome= document.createElement("INPUT")
    nome.setAttribute("name","nome")
    nome.setAttribute("type", "text")
    nome.setAttribute("id","nomef")
    nome.setAttribute("class","form-control my-2");
    nome.setAttribute("placeholder", "Insira o seu nome aqui!")
    document.getElementById("Funcionario").appendChild(nome)

    let entrarfu = document.createElement("INPUT")
    entrarfu.setAttribute("type","submit")
    entrarfu.setAttribute("class","btn btn-success mt-3")
    entrarfu.setAttribute("onclick","entrarfu()")
    document.getElementById("Funcionario").appendChild(entrarfu)

}
function entrarfu()
{
    
    let valorTarifa =  20.0
    let name =  document.getElementById("nomef").value
    if(name=="")
    {
        alert("Insira um nome!")
        Funcionario()
    }
    else
    {   
        document.body.innerHTML=""
        let Boasvindas= document.createElement("H1");
        Boasvindas.innerHTML="Seja bem-vinda(o), " + name + "."
        document.body.appendChild(Boasvindas)

        let janelaPri = document.createElement("DIV");
        janelaPri.setAttribute("id", "corpot");
        janelaPri.setAttribute("class", "container mt-5");
        document.body.appendChild(janelaPri);

        let tarifalabel = document.createElement("LABEL")
        tarifalabel.setAttribute("for","name")
        tarifalabel.innerHTML="<h4>"+"Tarifa:"+"</h4>"
        document.getElementById("corpot").appendChild(tarifalabel)

        let tarifa= document.createElement("INPUT")
        tarifa.setAttribute("onchange","mudar()")
        tarifa.setAttribute("disabled","")
        tarifa.setAttribute("id","tarifa")
        tarifa.setAttribute("name","tarifa")
        tarifa.setAttribute("value",valorTarifa)
        document.getElementById("corpot").appendChild(tarifa)

        let mudar=document.createElement("BUTTON")
        mudar.setAttribute("onclick","mudar()")
        mudar.innerHTML="mudar tarifa"
        document.getElementById("corpot").appendChild(mudar)

        let dataT= document.createElement("LABEL")
        dataT.setAttribute("for","data")
        dataT.innerHTML="<br>"+ "<br>"+ "Data atual: "
        document.getElementById("corpot").appendChild(dataT)

        let data= document.createElement("INPUT")
        data.setAttribute("class","Preenchimento")
        data.setAttribute("name","data")
        data.setAttribute("id","data")
        data.setAttribute("type","date")
        document.getElementById("corpot").appendChild(data)

        let selec= document.createElement("LABEL")
        selec.setAttribute("for","selecao")
        selec.innerHTML="Convenios: "
        document.getElementById("corpot").appendChild(selec)

        let selecao= document.createElement("SELECT")
        selecao.setAttribute("id","selecao")
        selecao.setAttribute("name","selecao")
        document.getElementById("corpot").appendChild(selecao)
        
        let opcaoDefault = document.createElement("OPTION");
        opcaoDefault.setAttribute("value", "0");
        opcaoDefault.setAttribute("selected", true);
        opcaoDefault.textContent = "Sem convênio";
        selecao.appendChild(opcaoDefault);
        loadConv()

        let Entrada= document.createElement("H1")
        Entrada.innerHTML= "Entrada de novos veiculos: "
        document.getElementById("corpot").appendChild(Entrada)

        let horalabel= document.createElement("LABEL")
        horalabel.setAttribute("for","horario")
        horalabel.innerHTML= " Hora da entrada: "
        document.getElementById("corpot").appendChild(horalabel)

        let Horainicial= document.createElement("INPUT")
        Horainicial.setAttribute("type","number")
        Horainicial.setAttribute("id","hora")
        Horainicial.setAttribute("name", "horario")
        Horainicial.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Horainicial)

        let Saidalabel= document.createElement("LABEL")
        Saidalabel.setAttribute("for","Placa")
        Saidalabel.innerHTML= " Hora saida:"
        document.getElementById("corpot").appendChild(Saidalabel)

        let saida2= document.createElement("INPUT")
        saida2.setAttribute("type","number")
        saida2.setAttribute("id","saida")
        saida2.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(saida2)

        let Placalabel= document.createElement("LABEL")
        Placalabel.setAttribute("for","Placa")
        Placalabel.innerHTML= "<br>" + " Placa: "
        document.getElementById("corpot").appendChild(Placalabel)

        let Placa= document.createElement("INPUT")
        Placa.setAttribute("type","text")
        Placa.setAttribute("name", "Placa")
        Placa.setAttribute("id","placa")
        Placa.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Placa)

        let Modelolabel= document.createElement("LABEL")
        Modelolabel.setAttribute("for","modelo")
        Modelolabel.innerHTML= "<br>" + " Modelo/marca: "
        document.getElementById("corpot").appendChild(Modelolabel)
        

        let Modelo= document.createElement("INPUT")
        Modelo.setAttribute("type","text")
        Modelo.setAttribute("id","modelo")
        Modelo.setAttribute("name", "modelo")
        Modelo.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Modelo)
     
        let Corlabel= document.createElement("LABEL")
        Corlabel.setAttribute("for","cor")
        Corlabel.innerHTML= "<br>" + "Cor: "
        document.getElementById("corpot").appendChild(Corlabel)

        let Cor= document.createElement("INPUT")
        Cor.setAttribute("type","text")
        Cor.setAttribute("id","cor")
        Cor.setAttribute("name", "cor")
        Cor.setAttribute("class","Preenchimento")
        document.getElementById("corpot").appendChild(Cor)

        let Registrar= document.createElement("BUTTON")
        Registrar.innerHTML="Registrar"
        Registrar.setAttribute("onclick","Registrar()")
        Registrar.setAttribute("class","btn btn-success mt-3")
        document.getElementById("corpot").appendChild(Registrar)

        let tabela= document.createElement("TABLE")
        tabela.setAttribute("class", "table table-striped table-hover mt-4");
        tabela.setAttribute("id","tabela")
        document.getElementById("corpot").appendChild(tabela)

        let Cabeçalho= document.createElement("THEAD")
        Cabeçalho.setAttribute("id","cabeça")
        document.getElementById("tabela").appendChild(Cabeçalho)

        let Tabelabody= document.createElement("TBODY")
        Tabelabody.setAttribute("id","corpoTable")
        document.getElementById("tabela").appendChild(Tabelabody)

        let Linhacabe= document.createElement("TR")
        Linhacabe.setAttribute("id","TR")
        document.getElementById("cabeça").appendChild(Linhacabe)
        
        let Coluna0=document.createElement("TH")
        Coluna0.innerHTML= "Data"
        document.getElementById("TR").appendChild(Coluna0)
        let Coluna1=document.createElement("TH")
        Coluna1.innerHTML= "Placa"
        document.getElementById("TR").appendChild(Coluna1)
        let Coluna2=document.createElement("TH")
        Coluna2.innerHTML="Modelo/marca"
        document.getElementById("TR").appendChild(Coluna2)
        let Coluna3=document.createElement("TH")
        Coluna3.innerHTML= "Cor"
        document.getElementById("TR").appendChild(Coluna3)
        let Coluna4=document.createElement("TH")
        Coluna4.innerHTML="Entrada"
        document.getElementById("TR").appendChild(Coluna4)
        let Coluna5=document.createElement("TH")
        Coluna5.innerHTML="Saída"
        document.getElementById("TR").appendChild(Coluna5)
        let Coluna6=document.createElement("TH")
        Coluna6.innerHTML="Tempo"
        document.getElementById("TR").appendChild(Coluna6)
        let Coluna7=document.createElement("TH")
        Coluna7.innerHTML="Valor"
        document.getElementById("TR").appendChild(Coluna7)
    }
}
function mudar()
{
    let conf=  prompt("Você quer mudar o valor da tarifa? Insira a senha")

    if (conf!=123)
    {
        alert("Senha incorreta!")  
    }
    else
    {
        let valorTarifa= prompt("Digite o novo valor da tarifa")
        let tarifanova= document.createElement("P")
        tarifanova.innerHTML= "<h4>" + "Tarifa: "+ "</h4>" + valorTarifa +  " reais"
        
        if (valorTarifa=="")
        {
            alert("Insira um valor de tarifa!")
        }
        else
        {
            document.getElementById("tarifa").value=valorTarifa
        }
    }
}
function loadConv()
{   
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Estacionamento.xml", true);
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            carregarXML(this);
        }
    }

    xmlhttp.send();
}
function carregarXML(convenios)
{

   var i;
   var xmlDoc = convenios.responseXML;
   var convenioXML = xmlDoc.getElementsByTagName("CONVENIO");

 

   for (i = 0; i < convenioXML.length; i++)
   {    
       var nome = convenioXML[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue;
       var desconto = convenioXML[i].getElementsByTagName("DESCONTO")[0].childNodes[0].nodeValue;


       var opcao = document.createElement("OPTION");
       opcao.setAttribute("value", desconto);
       opcao.textContent = nome;
       document.getElementById("selecao").appendChild(opcao)
   }
   
}
