# 🛒 E-commerce Product Page

Este projeto é uma implementação de uma página de produto para e-commerce, desenvolvida com React, TypeScript, Vite e Tailwind CSS. O objetivo é demonstrar habilidades em front-end, incluindo persistência de dados, integração com APIs externas, etc.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [API ViaCEP](https://viacep.com.br/)

## 📦 Funcionalidades

- **Galeria de Imagens**: Exibição de uma imagem principal do produto e miniaturas abaixo. Ao clicar em uma miniatura, a imagem principal é atualizada.
- **Detalhes do Produto**: Exibição dinâmica do título e preço do produto.
- **Seletores de Variantes**: Seleção de tamanho e cor do produto, gerados dinamicamente a partir de arrays ou objetos.
- **Verificação de CEP**: Campo para inserção de CEP, que consulta a API ViaCEP e exibe o endereço completo se o CEP for válido.
- **Persistência de Estado**: As ações do usuário são salvas e mantidas por 15 minutos, mesmo após a atualização da página.

## 📸 Inspiração

A interface foi inspirada em páginas de produtos de grandes e-commerces como o site da Adidas, priorizando soluções práticas e flexíveis para futuras alterações.

## 🧪 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/RobertMatos/ecommerce-test.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ecommerce-test
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:

   ```
   http://localhost:5173
   ```

## 📬 Demo

- Link do projeto publicado na Vercel: [https://ecommerce-test.vercel.app](https://ecommerce-test.vercel.app)

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
