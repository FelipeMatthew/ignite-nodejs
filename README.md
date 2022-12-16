PS:
Installations

$ npm i -g @nestjs/cli
$ nest new project-name
$ npm i prisma -D
$ npm i @prisma/client
$ npm i class-validator class-transformer


git comands

1- git add
2- git commit 
3- git branch
4- git push

# Projeto: Microserviços de notificações

# Ignite lab usando NodeJS

## Documento usado para fazer anotações

# Aula 01

Arquitetura de serviços - 

Como vai hospedar nossa aplicação

Monolitica - Conexão unica, torna assim dependente muitos serviços 
e se caso um caia cai todo os outros serviços juntos, por isso atualmente esta em hype a estrutura de Microserviços


Microserviços - 

Dividido em varias Áreas, assim caso caia cai apenas um microserviço e nada em grande escala, idempendencia entre as aplicações

Usa um banco de dados a cada microserviço

Duplicidade de dados - é comum enviar uma msg para o setor que utiliza informação, serviço eletronico escuta essa msg e recebe as informações duplicadas

Comunicação async - Parte q envolve relações entra serviços


NestJs - 

É um framework opinando, ele vem com arquivo pre-definidos, biblioteca integrada, usada para aplicação full-stack, voltada para o server side

Ótima para velocidade e reduz tempo para pensar em soluções, Nest é intuitivo

Linguagem focado em Typescript, traz uma maior flexibilidade, decorators - acopla funções e classes de maneira mais facil 

## Criação do projeto

CLI - Interface de linha de comando 

INSTALLATION

$ npm i -g @nestjs/cli
$ nest new project-name

Running code 

$ npm run start:dev

Bootstrap - Cria a aplicação

Decorator - Aclopação de uma ação dentro de uma classe ou func, Se usa o @

Controller - lida com entrada de chamadas HTTP

dentro do controller o @get tem como parametro primário, a rota

@Get('hello')


## CONTROLLER

Recebe tambem parametros de rotas tanto o get quanto o controller

Assim se passado no controller ele só vai ler se a rota do get estiver dentro do controller

Ex: localhost:3000/controllerFelps/mainpage

@Controller('controllerFelps')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('mainpage')
  getHello(): string {
    return this.appService.getHello();
  }
}

Decorator do nest traz uma facilidade mas para entender é mais complicado


MODULE - Acopla varios modules e varios service, 

SERVICE - Classe genérica com funcionalidades que se utiliza para qualquer coisa

CONTROLLER - Define rotas na aplicação

## SERVICES


### Inversão de dependencia

Classe que recebe suas dependencias por parametros (constructor)

Ao inves de buscar funcionalidade em outro arquivo, ele envia a funcionalidade como um parametro e chama esse parametro dentro da funcionalidade

Otima para trabalhar com testes

### Injeção de dependencia

Forma de automação de dependencia executa quando passa no modulo, assim puxando arquivo INJECTABLE que vai injetar a instancia direta, enviando uma classe 

Injeção de uma classe dentro da outra, passando como parametro dentro do controller




Voce cria um service com uma classe abstract que se assemelha a interface, logo apos voce implemente esse abstract service dentro do seu service que deseja assim passando o valor dele

Abstract é apenas uma estrutura vazia 

Voce consegue importar um module dentro do outro

### Prisma 

Installation

$ npm i prisma -D

$npm i @prisma/client 
- Pacote usado para se conectar ao prisma

$ npx prisma init --datasource-provider SQLite 
- Vai instalar o sqlite

$ npx prisma migrate dev

$ npx prisma studio

Um campo pode ser nulo usando prisma, voce coloca ? apos o tipo de dados (String?)

@@index([])
Está referenciando o id, mesmo ele nao sendo uma chave estrangeira, pode ser uma referencia de outro serviço

Tomar cuidado para não chamar a entidade com mesmo nome, atenção com o nome para que fique de maneira mais clara

import { randomUUID } from 'node:crypto';
- vai retornar um valor aleatorio

Ao invés de passar req, res; Se passa um @Body body:any

Para validar json, caso ocorra algum erro

$ npm i class-validator class-transformer

