---
title: SCSS模块化引入
---
1. `npm i sass --save-dev`
2. 将SCSS文件命名为xxx.module.scss
3. 导入SCSS  `import style from './xxx.scss'`
4. 组件中将className设置为`className={style.xxx}`

```react
import React from 'react';
import style from './about.module.scss';
function About() {
  return <div className={style.about}>about</div>;
}

export default About;
```

