---
society: Computer
img: https://images.unsplash.com/photo-1601212085833-34bad8c2d778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
layout: ../../../layouts/Post.astro
title: Build a CMS-Powered Blog in less than Two Weeks
type: Blog
author: Juan Castillo
description: Learn how we built the blog you're reading this article in with $0
  and a two-week deadline
publishDate: 16 May 2022
---
# Background

The development team that had been developing the page prior to my arrival had already made a lot of progress in building an application using the MERN stack (MongoDB, Express, React and Node.js). The product we had was fine. Personally I was not satisfied with the UI that had been built using 'create-react-app' (which we will call CRA' the rest of the article to be brief). It had several small visual defects and was made with Material Design, the Google design system that has become my archenemy.

Initially I wanted to leave everything as it was and alter the source code that was already there as little as possible, respect the work of the previous team and focus on changing only what was necessary to get this product out in the shortest possible time. However, when the MongoDB instance we had on Heroku ceased to exist due to the [end of the Heroku free tier](https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos ), I took this as a sign and an opportunity. That's when I decided to give the development of the page a different course.

# Plan

Having challenged myself and drawing from who knows where the determination to create the website from scratch, I outlined some very simple guidelines to make sure that this development was fast, maintainable and, above all, fun.

## I'll take care of the CSS

Material Design and Bootstrap are, without a doubt, a tool that multiplies the productivity of a developer to the tenth power. However, as a web UI/UX designer, who loves websites with personality and whose Pinterest is full of beautiful interface designs, I abhor these two bookstores. Although it sounds ugly to say it (or rather, to write it), for me Material and Bootstrap are a cancer that has taken over the Moderna web.

On the one hand, I've seen thousands of websites that do simple things like convert audio files, compress files or download YouTube videos making use of Material Design components inconsistently. They always feel like a mini speedrun made to earn a few extra lucas. Even if Material is more prevalent in the Android app space, for some reason it's incredibly prevalent on the web (probably because of the popularity of Angular, which provides functional Material components). On the other hand, Bootstrap sites are the opposite side. A site made in Bootstrap looks, smells, feels. It is almost impossible to ignore the presence of Bootstrap on a site. The layout of the elements, the images with text (Cards), the forms, the animations of the buttons, the icons... All that generic design screams "Boostrap" in an undeniable and clear way; and those who develop websites with this library never try to disguise that they are using the library.

To combat this, I chose to create and impose my own stylesheet on this project, thus leaving the development team with no option to opt for Material, Bootstrap or any other option that looks generic and takes away personality from websites. Creating a uniform website that sticks to the image of the university without the UI feeling like an improvisation put together with adhesive tape in a couple of days is very easy, because we already have a reference to the virtual classroom, an application with a very nice UI appearance and a decent UX. If you are interested to know more about Flora.css, the style sheet I built, you can read [the documentation](https://cfuen-dev .notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a).