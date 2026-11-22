# Start Chat Contact

Este projeto simula a interação inicial de um usuário com o **Amazon Connect** usando a API `StartChatContact` da AWS.

Ao executar a aplicação, uma nova solicitação de chat é enviada ao Amazon Connect a cada cinco segundos.

## Pré-requisitos

- Node.js e npm instalados;
- Uma instância do Amazon Connect configurada;
- Um `ContactFlowId` válido;
- Um `InstanceId` válido;
- Credenciais AWS configuradas no ambiente ou em um perfil local.

As credenciais não devem ser gravadas no código-fonte. A aplicação utiliza a cadeia padrão de credenciais da AWS, que pode ser configurada, por exemplo, com:

```bash
aws configure
```

## Instalação e execução

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd start_chat_contact
```

Instale as dependências:

```bash
npm install
```

Compile o TypeScript:

```bash
npm run build
```

Execute o código compilado:

```bash
npm run dev
```

O comando `npm run dev` executa `dist/start_chat_connect_api.js`.

## Configuração da requisição

Os valores usados na solicitação estão definidos em `src/start_chat_connect_api.ts`, incluindo:

- `ContactFlowId`: fluxo de contato que será usado;
- `InstanceId`: instância do Amazon Connect;
- `InitialMessage.Content`: mensagem inicial do usuário;
- `ParticipantDetails.DisplayName`: nome exibido para o participante;
- região AWS utilizada pelo cliente.

Atualize esses valores conforme o ambiente do Amazon Connect antes de executar o projeto.

## Modelo de requisição

O tipo da requisição está em [`src/models/startChatConnectRequest.ts`](src/models/startChatConnectRequest.ts). Ele descreve a estrutura enviada para o Amazon Connect:

- tipos de conexão;
- identificador do fluxo de contato;
- comportamento quando o cliente encerra a sessão;
- mensagem inicial;
- identificador da instância;
- dados do participante.

Esse modelo pode ser personalizado de acordo com o que precisar ser feito. Ao adicionar ou alterar propriedades, verifique se elas são compatíveis com o contrato da API `StartChatContact` e ajuste a construção de `chatRequest` em `src/start_chat_connect_api.ts`.

## Scripts disponíveis

| Comando         | Descrição                                    |
| --------------- | -------------------------------------------- |
| `npm run build` | Compila os arquivos TypeScript para `dist/`. |
| `npm run dev`   | Executa o arquivo JavaScript compilado.      |

## Hook de commit

O projeto usa um hook de commit versionado em `.githooks/commit-msg`. Ele impede commits cuja mensagem esteja vazia ou contenha apenas espaços.

O hook é habilitado automaticamente ao instalar as dependências:

```bash
npm install
```

Para ativar o hook manualmente em um clone existente:

```bash
npm run prepare
```

## Segurança

Não versionar chaves AWS, tokens de conexão ou respostas contendo credenciais. Prefira perfis AWS, variáveis de ambiente ou mecanismos de credenciais temporárias.
