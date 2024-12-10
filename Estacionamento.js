function Autenticar()
{
    document.getElementById("inicio").innerHTML= "<h2>Autenticação de usuario</h2> "
    
    let tela= document.createElement("FORM");
    tela.setAttribute("id","myForm");
    document.getElementById("inicio").appendChild(tela);
    
    let nome = document.createElement("INPUT");
    nome.setAttribute("type", "text");
    nome.setAttribute("id","nome");
    nome.setAttribute("class","Preenchimento")
    nome.setAttribute("placeholder","Insira seu nome aqui!");
    document.getElementById("myForm").appendChild(nome);
    
    let senha = document.createElement("INPUT");
    senha.setAttribute("type","password");
    senha.setAttribute("id","senha");
    senha.setAttribute("class","Preenchimento");
    senha.setAttribute("placeholder","Insira a senha aqui");
    document.getElementById("myForm").appendChild(senha);
  
    let entrar= document.createElement("INPUT");
    entrar.setAttribute("type", "submit");
    entrar.setAttribute("class", "Entrada");
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
        
        let janelaPri= document.createElement("DIV")
        janelaPri.setAttribute("id","corpot")
        document.body.appendChild(janelaPri)

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
        data.setAttribute("class","Preenchimento")
        data.setAttribute("id","data")
        data.setAttribute("name","data")
        data.setAttribute("type","date")
        document.getElementById("corpot").appendChild(data)

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
        Registrar.setAttribute("class","Entrada")
        document.getElementById("corpot").appendChild(Registrar)
    
                        
        let Excluir= document.createElement("BUTTON")
        Excluir.innerHTML="Excluir"
        Excluir.setAttribute("onclick","excluir()")
        Excluir.setAttribute("class","Entrada")
        document.getElementById("corpot").appendChild(Excluir)

        let tabela= document.createElement("TABLE")
        tabela.setAttribute("Border","1px")
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
function Registrar()
{    
    let data= document.getElementById("data").value
    let placa= document.getElementById("placa").value
    let modelo=document.getElementById("modelo").value
    let cor= document.getElementById("cor").value
    let entrada= parseInt(document.getElementById("hora").value)
    let saida= parseInt(document.getElementById("saida").value)
    let tarifav= document.getElementById("tarifa").value
    let tempo= saida-entrada

    let valor
    if(tempo==1)
    {
        valor= tarifav
    }
    else
    {
        valor= (tarifav/2.0)*tempo+(tarifav*1)
    }

    if(entrada=="" || cor=="" || modelo=="" || placa=="" || saida=="" || data=="")
    {
        alert("Insira os espaços vazios")
    }
    else if(saida<entrada || saida==entrada)
    {
        alert("O valor da saida deve ser maiorque o valor de entrada")
    }
    else
    {
    var tabela = document.getElementById("tabela");
    var row = tabela.insertRow(1);
    var celula0 = row.insertCell();
    var celula1 = row.insertCell();
    var celula2 = row.insertCell();
    var celula3 = row.insertCell();
    var celula4 = row.insertCell();
    var celula5 = row.insertCell();
    var celula6 = row.insertCell();
    var celula7 = row.insertCell();
    
    celula0.innerHTML = document.getElementById("data").value
    celula1.innerHTML = document.getElementById("placa").value
    celula2.innerHTML = document.getElementById("modelo").value
    celula3.innerHTML = document.getElementById("cor").value
    celula4.innerHTML = document.getElementById("hora").value
    celula5.innerHTML=  document.getElementById("saida").value
    celula6.innerHTML= tempo
    celula7.innerHTML = valor
    }
}
function excluir()
{
    if(tabela.rows.length > 1)
    {
        let linha= prompt("Qual linha deseja excluir?")
        let tabela= document.getElementById("tabela")
        if (linha==0)
        {
            alert("Essa linha não pode ser excluida.")
        }
        else 
        {
            tabela.deleteRow(linha)
        }
    }
    else
    {
        alert("Não existem linhas para remover!")
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
    nome.setAttribute("class","Preenchimento");
    nome.setAttribute("placeholder", "Insira o seu nome")
    document.getElementById("Funcionario").appendChild(nome)

    let entrarfu = document.createElement("INPUT")
    entrarfu.setAttribute("type","submit")
    entrarfu.setAttribute("class","Entrada")
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

        let janelaPri= document.createElement("DIV")
        janelaPri.setAttribute("id","corpot")
        document.body.appendChild(janelaPri)

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
        Registrar.setAttribute("class","Entrada")
        document.getElementById("corpot").appendChild(Registrar)

        let Excluir= document.createElement("BUTTON")
        Excluir.innerHTML="Excluir"
        Excluir.setAttribute("onclick","excluir()")
        Excluir.setAttribute("class","Entrada")
        document.getElementById("corpot").appendChild(Excluir)

        let tabela= document.createElement("TABLE")
        tabela.setAttribute("Border","1px")
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
