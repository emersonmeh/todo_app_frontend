# todo_app


< -- CURSO REACT + REDUX -- >

# ----------------------------------------------------------------------------------------------- #

AMBIENTE:
	NodeJS
	
	NPM (Gerenciado de pacotes que vem junto com o Node)
		- $comando:  npm i (dentro da pasta do projeto instala as dependências)
		- $comando: npm run dev / npm run production (inicia o ambiente do projeto desejado)
		
	Mongodb Local - Data directory C:\data\db\ (exije diretório criado)
		- $comando : momgod (inicia o banco de dados)
		
# ----------------------------------------------------------------------------------------------- #		
Pacote para auxiliar na criação de um projeto REACT
	
		$ no terminal - npm i -g create-react-app
		
		- após criado o pacote, é necessário criar o projeto utilizando o pacote pacote
		$ create-react-app "Nome do projeto"
		
		- após criado o projeto, alguns comandos básicos para iniciar:
		$yarn start
		$npm start (comando utilizado no curso)
			Starts the development server.
		$yarn build
			Bundles the app into static files for production.
		$yarn test
			Starts the test runner.
		$yarn eject
			Removes this tool and copies build dependencies, configuration files
			and scripts into the app directory. If you do this, you can’t go back!
			
		-REMOVER PAST SRC INTEIRA E RECRIAR COM A SEGUINTE ESTRUTURA:
			- src
				- index.js (arquivo que é a porta de entrada da aplicação REACT

# ----------------------------------------------------------------------------------------------- #	
JSX - Permite utilizar sintaxe semelhante ao HTML dentro do contexto JavaScript. Tudo que é
	escrito dentro do contexto é convertido em JavaScript.
	
		Para utilizar o JSX é necessário importar o react para o contexto que esta trabalhando:
		[] import React from 'react'
		
# ----------------------------------------------------------------------------------------------- #
COMPONENTES:
	Um pedaço da aplicação, que contém html, css, comportamentos(JS) ... não tendo a necessidade
	de ter contexto diferente para cada tipo de técnologia.
	A aplicação é montada como uma árvore de componentes, os componentes são ligados um ao
	outro na montagem da aplicação.
	 		
# ----------------------------------------------------------------------------------------------- #
EXPORT / IMPORT
	Caso somente um elemento seja exportado, é possível passar o elemento como default, ou
	caso exista mais de um elemento, um elemento pode ser passado como default e os demais
	elementos são exportados sem a palavra chave default e são passado dentro de chaves {}.
		[] export default CompA
		[] export {CompB, CompC}
		
	Ao importar os elementos, caso o elemento default seja importado, é possivel associar 
	um nome qualquer diretamente no import. Quando for importar os elementos que não
	são default e quiser atribuir um novo nome no import, é necessário utilizar a palavra
	chave AS para atribuição de nome.
		[] import A from './path_arquivo'
		[] import {CompB, CompC as C} from './path_arquivo'

# ----------------------------------------------------------------------------------------------- #
TRABALHANDO COM CLASSES
	É necessádio o import do componente Component.
		[] import React, {Component} from 'react'
	
	Toda classe criada deve extender (herdar) o component Component.
		[] class Contador extends Component 
	
	Obrigatoriamente deve-se ter a o método render() quando se trabalha com classes.
		[] render() 
			{
			}

# ----------------------------------------------------------------------------------------------- #
PROPS
	TODAS as propriedades passadas via props são somente leitura(read-only)
	
	Para que o estado de uma propriedade seja alterado, é necessário utilizar o método
	STATE.

# ----------------------------------------------------------------------------------------------- #
PROJETO CACULADORA
	[] create-react-app calculadora (no diretório desejado, digitar o comando passando o nome
			projeto que deseja criar.
			
# ----------------------------------------------------------------------------------------------- #
PROJETO TODO-LIST - BACKEND

	Em projetos de backend é necessário utilizar o --save na instalação das dependências
	devido ao servidor do Node ser dependente das bibliotecas e precisar delas para execução
	do projeto.
	Quando o projeto é de frontend o Webpack encapsula tudo e o projeto é facilmente portado
	para um servidor web como apache/NGIX/IIS sem a necessidade da instalação das dependências.
		
	[] npm init -y (cria o arquivo package.json dentro do diretorio do projeto)
	[]  npm i --save -E body-parser@1.15.2 (-E para instalar a versão exata) - o body-parse
	transforma objetos(parametros) JSON e outros em Javascript.  
	[]  npm i --save -E express@4.14.0 (framework web para backend)
	[]  npm i --save -E mongoose@4.7.0 (biblioteca que acessa banco de dados MongoDB)
	[]  npm i --save -E node-restful@0.2.5 (simplifica construção da API)
	[]  npm i --save -E pm2@2.1.5 (launcher responsável por iniciar a app em PROD)
	[]  npm i --save-dev -E nodemon@1.11.0 (launcher simplificado para uso no ambiente de DEV)
	
- Quando um projeto é baixado do Git, as dependências não virão junto, porém, tendo o arquivo
package.json já configurado, basta digitar o comando [] npm i para que todas as dependências
configuradas no arquivo sejam baixadas e instaladas no projeto.

DENTRO DO DIRETORIO DO BACKEND
		[] npm run dev - para rodar em modo dev(nodemon)
		[] npm run production - para rodar em modo production(PM2)
		
PADRÃO NodeJS
	Para importar um modulo: [] require('mongoose') - para bibliotecas dentro de node_modules
							 [] require('./config/database') - para modulos pertecem ao projeto
	Para exportar o modulo: [] module.exports = mongoose.connect('mongodb://localhost/todo')
	
CORS 
	Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um 
	mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um 
	aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos 
	selecionados de um servidor em uma origem distinta.	

# ----------------------------------------------------------------------------------------------- #
PROJETO TODO-LIST - FRONTEND

	[] npm init -y - Cria package.json
	[] npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 (encapsula o projeto - faz o build)
	[] npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0
				babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 
				babel-preset-react@6.22.0
		(converte código escrito em JSX para código interpretado pelos navegadores)
	
	[] npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0
		(processamento de css, carregamento de imagens e fontes)

	[] npm i --save-dev bootstrap@3.3.7 font-awesome@4.7.0 (templates e fontes)
	[] npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 axios@0.15.3 
		(React e Axios(responsável pelas chamadas http(promises based) aos serviços do backend ))
		
	




# ----------------------------------------------------------------------------------------------- #
REDUX

	Framework independente do React, utilizado para gerenciamento de estados.
	
	[] npm i --save-dev react-redux@5.02 redux@3.6.0
	
	Reducers - Funções que alteram o estado.
	
	import {combineReducers, createStore} from 'redux'
		Métodos do Redux que criam o objeto Store que contem o estado e 
		juntam todos os pedaços de estados criados em um objeto único.
	
	import {Provider} from 'react-redux'
		Componente que pega o estado e passa para os componentes internos.
		
	*DECORATOR: exporta um componente efetuando mapeamento de suas propriedades e
		seu estado global, agora gerenciado pelo redux.
		[] export default connect(mapStateToProps)(Field)
				mapStateToProps - mapeamento utilizando redux
				Field - componente react












































