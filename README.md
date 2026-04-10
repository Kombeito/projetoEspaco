# Espaço Gamer - Site estático para GitHub Pages

Estrutura criada para funcionar como site institucional + catálogo + blog estático.

## Estrutura de pastas

```text
espaco-gamer-site/
├── index.html
├── sobre.html
├── produtos.html
├── blog.html
├── contato.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
└── blog/
    ├── post-1.html
    └── post-2.html
```

## O que precisa trocar antes de publicar

1. Trocar todos os links `5500000000000` pelo número real do WhatsApp no formato internacional.
   - Exemplo Brasil: `5511999999999`
2. Trocar o e-mail `contato@espacogamerpp.com.br` pelo e-mail real.
3. Editar os textos da marca, produtos e posts.
4. Substituir placeholders por imagens reais, se quiser.

## Como subir no GitHub Pages

1. Criar um repositório no GitHub.
2. Enviar todos os arquivos para o repositório.
3. Ir em **Settings > Pages**.
4. Em **Build and deployment**, escolher:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
5. Salvar.
6. Depois configurar o domínio personalizado no GitHub Pages.

## Observação

Este projeto é estático. Ele funciona muito bem para:
- páginas institucionais
- catálogo com botão de WhatsApp
- blog estático
- links, navegação e interações básicas em JavaScript

