# webapps-votacon

Coleção de pequenos webapps estáticos, cada um hospedado como um site próprio via GitHub Pages.

## URLs

- Página inicial (índice dos apps): https://votacon.github.io/webapps-votacon/
- Cada app: `https://votacon.github.io/webapps-votacon/<pasta>/`

Exemplo: o app em `relogio/` fica em https://votacon.github.io/webapps-votacon/relogio/

## Estrutura

```
.
├── index.html      # página inicial que lista os apps
├── relogio/        # exemplo de app
│   └── index.html
└── ...
```

## Como adicionar um novo app

1. Crie uma pasta com nome curto e sem espaços (ex.: `calculadora/`).
2. Coloque um `index.html` dentro dela (mais CSS/JS/imagens se quiser — tudo estático, sem build).
3. Acrescente uma linha no array `APPS` dentro do `index.html` da raiz para ele aparecer na página inicial.
4. Faça commit e push. Em ~1 min o app está no ar na URL acima.

## Observações

- É tudo estático (HTML/CSS/JS). Não há passo de build.
- O arquivo `.nojekyll` desliga o processamento do Jekyll, servindo os arquivos como estão.
- Use sempre links **relativos** entre páginas (ex.: `../` para voltar à raiz), já que o site fica numa subpasta.
