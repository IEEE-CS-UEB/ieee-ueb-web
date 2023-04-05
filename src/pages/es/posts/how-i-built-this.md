---
img: https://images.unsplash.com/photo-1601212085833-34bad8c2d778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
title: Construye un Blog con CMS (Como este) súper rápido
author: Juan Castillo
description: Te cuento cómo construimos el blog en el que lees este artículo sin un peso y en dos semanas
society: Computer
type: Blog
publishDate: 16 May 2022
layout: '../../../layouts/Post.astro'
# authorURL:
---
# Antecedentes

El equipo de desarrollo que había estado desarrollando la página previo a mi llegada ya había avanzado bastante en la construcción de una aplicación utilizando la pila MERN (MongoDB, Express, React y Node.js). El producto que teníamos estaba bien. Personalmente no estaba satisfecho con la UI que se había construido utilizando `create-react-app` (Que llamaremos CRA el resto del artículo pa' ser breves). Tenía varios pequeños defectos visuales y estaba hecho con Material Design, el sistema de diseño de Google que se ha convertido en mi archienemigo.

Inicialmente quería dejar todo como estaba y alterar el código fuente que ya estaba lo menos posible, respetar el trabajo del equipo anterior y centrarme en cambiar únicamente lo que hiciera falta para sacar este producto en el menor tiempo posible. Sin embargo, cuando la instancia de MongoDB que teníamos en Heroku dejó de existir debido al [fin del tier gratis de Heroku](https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos), tomé esto como una señal y una oportunidad. Fue ahí cuando decidí darle al desarrollo de la página un curso diferente.

# El plan

Habiéndome retado a mí mismo y sacando de quién sabe donde la determinación para crear el sitio web desde cero, divisé unas muy simples pautas para asegurarme de que este desarrollo fuera rápido, mantenible y, sobre todo, divertido.

## Yo me encargaré del CSS

Material Design y Bootstrap son, sin duda alguna, una herramienta que multiplica la productividad de un desarrollador a la décima potencia. Sin embargo, como diseñador UI/UX web, que ama los sitios web con personalidad y cuyo pinterest está lleno de diseños de interfaz hermosos, aborrezco estas dos librerías. Aunque suene feo decirlo (O más bien, escribirlo), para mí Material y Bootstrap son un cáncer que se ha apoderado de la web moderna.

Por un lado, he visto miles de sitios web que hacen cosas simples como convertir archivos de audio, comprimir archivos o descargar vídeos de YouTube haciendo uso de los componentes de Material Design de forma inconsistente. Siempre se sienten como un mini speedrun hecho para ganarse unas lucas extra. Aún si Material es más prevalente en el espacio de las aplicaciones de Android, por alguna razón es increíblemente prevalente en la web (Probablemente por la popularidad de Angular, que provee componentes de Material funcionales). Por otro lado, los sitios de Bootstrap son el lado opuesto. Un sitio hecho en Bootstrap se ve, se huele, se siente. Es casi imposible ignorar la presencia de Bootstrap en un sitio. La distribución de los elementos, las imágenes con texto (Cards), los formularios, las animaciones de los botones, los íconos... Todo ese diseño genérico grita "Boostrap" de una forma innegable y clara; y quienes desarrollan los sitios web con esta librería nunca se esfuerzan en disimular que están usando la librería.

Para acombatir esto, elegí crear e imponer mi propia hoja de estilos en este proyecto, dejando así al equipo de desarrollo sin opción de optar por Material, Bootstrap o cualquier otra opción que se vea genérica y le quita personalidad a los sitios web. Crear un sitio web uniforme y que se apegara a la imagen de la universidad sin que la UI se sintiera como una improvisación juntada con cinta adhesiva en un par de días es muy fácil, pues ya tenemos de referente al aula virtual, una aplicación con un muy bonito aspecto de UI y con una UX decente. Si les interesa saber más sobre Flora.css, la hoja de estilos que construí, pueden leer [la documentación](https://cfuen-dev.notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a).