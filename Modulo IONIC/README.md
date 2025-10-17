# Creación de un Proyecto en Ionic con Angular

Este documento describe el proceso completo para crear y configurar un proyecto en Ionic utilizando Angular. 
Incluye la instalación del entorno, creación del proyecto, explicación de estructura y ejecución inicial.

## Requisitos Previos

Antes de comenzar, nos aseguramos de tener instalado lo siguiente:
- Node.js (versión LTS)
- npm (instalado junto con Node.js)
- Ionic CLI

### Instalación del CLI de Ionic
```bash - Es mejor utilizar cmd que PowerShell
npm install -g @ionic/cli
```

Verifica la instalación:
```bash
ionic -v
```

## Creación del Proyecto

En la terminal, ejecutar el siguiente comando:
```bash
Opción1:
ionic start mobileDevelopment blank 
Seleccionar Angular

Opción2: 
ionic start mobileDevelopment blank --type=angular
```
**Explicación:**
- `mobileDevelopment`: nombre del proyecto
- `blank`: plantilla vacía
- `--type=angular`: especifica el framework Angular

## Estructura del Proyecto

```
mobileDevelopment/
 ├─ src/
 │   ├─ app/
 │   │   ├─ app.component.ts
 │   │   ├─ app.component.html
 │   │   ├─ app.module.ts
 │   │   └─ app-routing.module.ts
 │   ├─ assets/
 │   ├─ environments/
 │   ├─ theme/
 │   │   └─ variables.scss
 │   └─ index.html
 ├─ capacitor.config.ts
 ├─ angular.json
 ├─ package.json
 ├─ tsconfig.json
 └─ ionic.config.json
```

**Archivos principales:**
- `app.module.ts`: módulo raíz de la aplicación
- `app.component.ts`: componente principal
- `app-routing.module.ts`: configuración de rutas
- `variables.scss`: estilos globales
- `capacitor.config.ts`: configuración de Capacitor
- `package.json`: dependencias y scripts

## Instalación de Dependencias

Si el proyecto fue clonado o descargado, instala las dependencias con:
```bash
npm install
```

## Ejecución del Proyecto

Para ejecutar el servidor de desarrollo:
```bash
ionic serve
```
Esto abrirá la aplicación en [http://localhost:8100](http://localhost:8100).

## Agregar Plataforma Nativa

Para añadir Android o iOS al proyecto:
```bash
ionic capacitor add android
ionic build
ionic capacitor sync
ionic capacitor open android
```

## Creación de Páginas, Componentes y Servicios

Crear una página:
```bash
ionic g page pages/ejemplo
```

Crear un componente:
```bash
ionic g component components/mi-componente
```

Crear un servicio:
```bash
ionic g service services/api
```

## Conclusión

Ionic con Angular permite crear aplicaciones móviles híbridas de manera rápida y estructurada.
Su integración con Capacitor ofrece acceso a funciones nativas, y Angular proporciona organización modular y tipado fuerte.
