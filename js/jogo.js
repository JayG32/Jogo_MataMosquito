var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')//Substitui o ? por um espaço vazio

if (nivel === 'normal') {
	//15000
	criaMoscaTempo = 1500
}else if (nivel === 'dificil') {
	//1000
	criaMoscaTempo = 1000
}else if (nivel === 'chucknorris') {
	//750
	criaMoscaTempo = 750
}



//Ajustando a largura e altura da página de forma dinâmica
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura,altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = "vitoria.html"
	}else{
		document.getElementById('cronometro').innerHTML = tempo	
	}
	
}, 1000)

function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		// console.log('Elemento selecionado foi: v' + vidas)
		if (vidas > 3) {
			window.location.href = "fim_de_jogo.html"
		}else{
			document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
			
			vidas++
		}
		
	}

	//Gerando coordenadas aleatórias e retirando casas decimais 
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Tratamento caso as coordenadas sejam menor que zero
	//Usando operador ternário
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//Criar o elemnto html
	var mosca = document.createElement('img')
	mosca.src = 'img/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosca)

}

//Altera o tamanho da imagem 
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)

	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}
}

//Altera o lado da imagem
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	console.log(classe)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'

	}
}

