(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ST88:function(n,t,o){"use strict";o.r(t),o.d(t,"startFocusVisible",(function(){return s}));var e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];function s(n){var t=[],o=!0;function s(n){t.forEach((function(n){return n.classList.remove("ion-focused")})),n.forEach((function(n){return n.classList.add("ion-focused")})),t=n}n.addEventListener("keydown",(function(n){(o=e.includes(n.key))||s([])}));var i=function(){o=!1,s([])};n.addEventListener("focusin",(function(n){o&&n.composedPath&&s(n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")})))})),n.addEventListener("focusout",(function(){n.activeElement===n.body&&s([])})),n.addEventListener("touchstart",i),n.addEventListener("mousedown",i)}}}]);