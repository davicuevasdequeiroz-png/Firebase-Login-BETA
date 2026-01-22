# PT/BR

Este projeto serve como uma estrutura base (boilerplate) para sistemas internos que necessitam de autenticação. Ele já vem configurado com **Next.js** e **Firebase Authentication**, pronto para ser adaptado conforme as regras de negócio da empresa.

## 🛠 Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/)
* **Autenticação:** [Firebase Auth](https://firebase.google.com/)

## 📂 Estrutura Principal

O fluxo de autenticação está concentrado nestes três arquivos principais:

1.  **`login.jsx`**: Componente responsável pela interface de entrada e lógica de conexão com o Firebase.
2.  **`logout.jsx`**: Componente funcional para encerrar a sessão do usuário de forma segura.
3.  **`page.jsx`**: A página principal (entry point). Aqui você deve definir a lógica de redirecionamento (se o usuário não estiver logado) ou renderizar o conteúdo protegido.

## 🚀 Como Configurar e Rodar

### 1. Clonar e Instalar
Faça o clone do repositório e instale as dependências:

```bash
npm install
# ou
yarn install
```

Para que a conexão com o Firebase funcione, você precisa criar um arquivo chamado .env na raiz do projeto.

Copie as chaves do seu projeto no Console do Firebase e preencha conforme o modelo abaixo. O arquivo firebaseConfig.js já está preparado para ler estas variáveis:


Snippet de código .env
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
```
# 🎨 Como Adaptar
Este projeto foi desenhado para ser **flexível**. Para utilizá-lo em seu departamento:

Edite o page.jsx para ajustar o nome e desing para melhor identidade visual da sua empresa.

No login.jsx, **substitua** o **`provider.setCustomParameters`** juntamente com **`if`** para que o email coorporativo de sua empresa funcione e seja o unico aceito em seu login.
