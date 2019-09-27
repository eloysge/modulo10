#

# modulo10 - Projeto react-native GoBarber

#

# Criar projeto:

- react-native init <pasta-raiz-projeto>

# No vscode criar o editorconfig:

- alterar as duas ultimas linhas para 'true'
- adicionar linha: "end_of_line = lf"

# Instalar o eslint:

- yarn add eslint -D

# Configurar o eslint:

- yarn eslint --init
- -3 opção: "To check syntax, find problems, and enforce code styles"
- -1 opção: "JavaScript modules (import/export"
- -1 opção: "React"
- -use TypeScript: "No"
- -unselect "Browse" and "Node"
- -select: "use a popular style guid"
- -select: "Airbnb"
- -select: "JavaScript"
- -select: "Y" install with npm

# Após instalação, remover "packege-lock.json"

# (visto que istalou com "npm" e utilizamos "yarn")

# Execute:

- yarn (para atualizar os pacotes instalados pelo npm)

# Instalar extenções do eslint:

- yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

# Ajustar configurações do .eslintrc.js

# Instalação do babel-plugin-root-import

- yarn add babel-plugin-root-import -D
- yarn add eslint-import-resolver-babel-plugin-root-import -D
