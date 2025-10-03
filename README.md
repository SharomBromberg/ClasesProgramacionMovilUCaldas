"# ProgramacionMovilUCaldas" 
**1. Instalación y configuración**

# Verificar versión (si no está, instala desde git-scm.com)
    git --version

# Identidad global
    git config --global user.name "Tu Nombre"
    git config --global user.email "tuemail@ejemplo.com"

# Calidad de vida (no lo usamos por ahora)

    git config --global init.defaultBranch main
    git config --global core.editor "code --wait"   # si usas VS Code
    
# En Windows para saltarte problemas de saltos de línea:
    git config --global core.autocrlf true

**2. Crear un repositorio nuevo (proyecto propio)**

    cd ruta/de/tu/proyecto
    git init
    echo "# Mi proyecto" > README.md
    git status
    git add .
    git commit -m "chore: inicializa proyecto"

**O clonar uno existente (proyecto de un tercero o de tu organización)**

    git clone <URL-del-repo>
    cd nombre-del-repo
    git status

**3. Conectarse con un remoto (GitHub/GitLab/Bitbucket)**

# Crear el repo vacío en la plataforma.
# Conectarlo y subir main por primera vez:

    git remote add origin <URL-del-repo>
    git push -u origin main


# El -u deja “main” rastreando a “origin/main” para que después baste con git push y git pull.

**4. Flujo diario básico (trabajo en tu máquina)**

# trae cambios antes de empezar:
    git pull   

# ... haz cambios en tus archivos ...
    git status          # qué cambió
    git add .           # prepara cambios
    git commit -m "feat: agrega formulario de contacto"
    git push            # sube tus commits al remoto

**5. Ramas (branches) para trabajar por feature**

# Crea y cambia a una rama nueva
    git switch -c feat/contacto

# Trabaja, commitea y sube la rama
    git add .
    git commit -m "feat: UI del formulario"
    git push -u origin feat/contacto


## Cuando termines, abre un Pull Request (PR/MR) en la plataforma para revisión.
## Para integrar localmente sin PR:

    git switch main
    git pull
    git merge feat/contacto
    git push


**6. Actualiza tu rama con lo último de main**

## Dos opciones, elige una (tu equipo suele definir esto):
## Merge (más simple, historial con merges):

    git switch feat/contacto
    git fetch origin
    git merge origin/main

## Rebase (historial lineal):

    git switch feat/contacto
    git fetch origin
    git rebase origin/main
    
# Si hay conflictos, resuélvelos y:
    git add <archivo/archivos>
    git rebase --continue

**7. Resolver conflictos (general)**

    Git marcará los archivos en conflicto con <<<<<<<, =======, >>>>>>>.
    Edita el archivo, deja la versión correcta.

# Marca resuelto:

    git add <archivo>
    git commit           # si estabas en merge

# o git rebase --continue si estabas en rebase

"# ClasesProgramacionMovilUCaldas" 
