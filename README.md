# simple progress bar plugin using javascript

## Installation

Install using NPM

```sh
npm i progress-bar-plugin-using-javascript
```


## Use
Include the plugin styles:

```sh
  <link
      rel="stylesheet"
      href="../node_modules/progress-bar-plugin-using-javascript/src/style.css"
    />
```

Add the plugin to the page:

```sh

    <script src="../node_modules/progress-bar-plugin-using-javascript/src/index.js"></script>
```
In HTML:

set the progress bar 
```sh
<div id="progress-bar"></div>
```
pass the progress value , Add `progressValue(progress-value)` function with needed value to the body tag
```sh
<body onload="progressValue(100)">
```

