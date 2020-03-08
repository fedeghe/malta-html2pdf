---
[![npm version](https://badge.fury.io/js/malta-html2pdf.svg)](http://badge.fury.io/js/malta-html2pdf)
[![npm downloads](https://img.shields.io/npm/dt/malta-html2pdf.svg)](https://npmjs.org/package/malta-html2pdf)
[![npm downloads](https://img.shields.io/npm/dm/malta-html2pdf.svg)](https://npmjs.org/package/malta-html2pdf)  
---  

This plugin can be started on: **.html**

**It needs to be installed globally**

`> npm i -g malta-html2pdf`  

Obtain a pdf file from an html; all options from html-pdf can be used

```
> malta app/views/index.html public -plugins=malta-html2pdf
```
or in the .json file :
```
{
    ...,
    "app/views/index.html" : "public -plugins=malta-html2pdf[border:0]",
    ...
}
```
