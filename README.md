# Rocketseat_Semana_OmniStack10_devRadar
Aplicação desenvolvida durante a semana Omnistack 10.0

Nesta edição, o app desenvolvido foi um serviço para encontrar devs proximos de você. 

## Backend:
Foi todo desenvolvido em Node.js, usando o MongoDB para o armazenamento dos dados. 
Esse backend acessa api do Github para buscar os dados de um determinado usuário, e depois armazena apenas alguns dados selecionados no banco. 

## Frontend:
Foi desenvolvido usando o ReactJS. Através dele podemos cadastrar novos usuários, armazenando os dados usando o backend e também chamadas para exibir os novos usuários adicinados. Ele também pega as coordenadas do usuário que está se cadastrando através de uma função do próprio navegador e passa para o backend junto com o cadastro do usuário, esses dados serão utilizandos depois na aplicação mobile. 

<p align="center">
  <img width=800 src="https://user-images.githubusercontent.com/54601930/72559539-c7ab8780-3883-11ea-9e1b-21c9f720c86f.gif" />
</p>

## Mobile:
Na versão mobile foi utilizado o React-Native para desenvolver a aplicação de localização dos devs cadastrados. Fazendo uma chamada no backend para coletar as coordenadas de cada dev e exibindo ele no mapa na posição correspondente. 
<p align="center"> 
  <img width=200 src="https://user-images.githubusercontent.com/54601930/72625677-fbd88400-3927-11ea-9033-f19892e4e86d.png" />
  <img width=200 src="https://user-images.githubusercontent.com/54601930/72625671-fb3fed80-3927-11ea-86b1-52bd3b477050.png" />
  <img width=200 src="https://user-images.githubusercontent.com/54601930/72625669-fb3fed80-3927-11ea-927b-01cca6d090d7.png" />
</p>

Quando tocamos no avatar de um dev, é exibido algumas informações básicas do perfil dele. Ao tocar na descrição, o app redireciona para uma outra tela carregando o perfil completo do dev no GitHub. 
<p align="center">
  <img width=200 src="https://user-images.githubusercontent.com/54601930/72625675-fb3fed80-3927-11ea-8830-07e5e58160ba.png" />
  <img width=200 src="https://user-images.githubusercontent.com/54601930/72625670-fb3fed80-3927-11ea-8813-4295b9efebcd.png" />
</p>



## Ferramentas utilizadas:
- Insomnia = para testes do nosso backend;
- MongoDB Compass = para consultar os dados armazenados no banco. 
