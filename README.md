# Rocketseat_Semana_OmniStack10_devRadar
Aplicação desenvolvida durante a semana Omnistack 10.0

Nesta edição, o app desenvolvido foi um serviço para encontrar devs proximos de você. 

## Backend:
Foi todo desenvolvido em Node.js, usando o MongoDB para o armazenamento dos dados. 
Esse backend acessa api do Github para buscar os dados de um determinado usuário, e depois armazena apenas alguns dados selecionados no banco. 

## Frontend:
Foi desenvolvido usando o ReactJS. Através dele podemos cadastrar novos usuários, armazenando os dados usando o backend e também chamadas para exibir os novos usuários adicinados. Ele também pega as coordenadas do usuário que está se cadastrando através de uma função do próprio navegador e passa para o backend junto com o cadastro do usuário, esses dados serão utilizandos depois na aplicação mobile. 

## Ferramentas utilizadas:
- Insomnia = para testes do nosso backend;
- MongoDB Compass = para consultar os dados armazenados no banco. 
