### Features

- Boilerplate for Express + Vue.JS with Typescript 
- Built-in NodeJS, Python with Docker
- Single Page Application with VueJS
- CSS preprocessor made with Syntactically Awesome Style Sheets (SASS)
- The ImageAI Python library used for using simple, and a few lines of code.
- Compatible with all major browsers (IE8+)

# Object Recognition

![](https://i.ibb.co/P1RWJj9/Readme-Logos.png)

![](https://img.shields.io/github/stars/metehanakbaba/Object-Recognition) ![](https://img.shields.io/github/forks/metehanakbaba/Object-Recognition) ![](https://img.shields.io/github/tag/metehanakbaba/Object-Recognition) ![](https://img.shields.io/github/release/metehanakbaba/Object-Recognition) ![](https://img.shields.io/github/issues/metehanakbaba/Object-Recognition) ![](https://img.shields.io/bower/metehanakbaba/Object-Recognition)


## FlowChart

![](https://i.ibb.co/wpT4YbD/Screen-Shot-2021-02-06-at-00-10-29.png)

```flow
st=>start: Image upload
op=>operation: Image processing with TensorFlow
cond=>condition: Have any objects been found?
e=>end: To Object name list

st->op->cond
cond(yes)->e
cond(no)->op
```
