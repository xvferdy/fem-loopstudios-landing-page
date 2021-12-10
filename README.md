# Loopstudios landing page

> 🔖 This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

## 🌈 ✨ 🎉 Have Fun Building! 🚀 🎊 🎈
> 🖥️ **Welcome** <br>
> Thanks for checking out this front-end coding challenge.
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.
***To do this challenge, you need a good understanding of HTML and CSS and a basic understanding of JavaScript.*** Press <kbd>Enter</kbd> 🚀 to start the game!!

## 📍Table of Contents
- [Brief](#brief)
	- [The challenge](#the-challenge)
	- [Links](#links)
- [My process](#my-process)
	- [Built with](#built-with)
	- [What I learned](#what-i-learned-)
	- [Difficult Things](#difficult-things-)
- [Author](#author)

## Brief
This challenge is perfect if you're looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills!

Your challenge is to build out this **landing page** and get it looking as close to the design as possible. This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. But you could also choose to do this without JS! You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go 👍

**Preview** :eyeglasses:

![Design preview for the Loopstudios landing page coding challenge](./src/assets/design/desktop-preview.jpg)

### The challenge 
Users should be able to:
  
| Challenge | Newbie | Junior | Intermediate | Advanced |
| --- | :---: | :---: | :---: | :---: |
| View the optimal layout for the site depending on their device's screen size | ⭕ |  |  |  |
| See hover states for all interactive elements on the page |  | ⭕ |  |  |

[![🐬 Junior Difficulty List](https://img.shields.io/badge/Difficulty-Junior-3F54A3?style=for-the-badge&logo=frontendmentor "Junior Difficulty")](https://www.frontendmentor.io/challenges?difficulties=2)

### Links
- Solution URL: https://www.frontendmentor.io/solutions/femloopstudioslandingpage-qMxCsZkVQ
- Live Site URL: https://loopstudios-landing-page-xvferdy.netlify.app/

## My process
> ⌛ I challenge my self to finish this for **~3 days** <br>
> ▐ <br>
> 🧑‍💻 Struggling <br>
> ▐ <br>
> 🗓️ Ended up in **6 days**

### Built with
- [React](https://reactjs.org/ "React js")

### What I learned 🥳
Learn new HTML tag `<picture>` and it can contains one or more `<source>` elements. This tag can help us determine what `<img>` will show on our current screen size

###### src/components/Card.js
```javascript
<picture>
  <source media="(max-width: 999px)" srcSet={mobileImg} />
  <img src={desktopImg} alt="" />
</picture>
```

### Difficult Things 😵‍💫
Things were difficult for me and I finally gave up
- [ ] Layouting
	- [ ] Hero image
	- [ ] Transparent `nav`
	- [ ] Wacky `flex`
- [ ] Try to add some animation
- [ ] HTML accessibility
- [ ] CSS code for `@media` all over the place

## Author
| [<img src="https://avatars.githubusercontent.com/u/47988956?v=4" alt="xvferdy" width="100px"/><br><sub><samp>Berlianto</samp></sub>](https://github.com/xvferdy)  |
|:---:|

<h3 align="right">
      <a href="#loopstudios-landing-page">To Top ⤴️</a>
</h3>
