const marked = require('marked');
const renderer = new marked.Renderer();
const tokenizer = new marked.Tokenizer();


const heading = function (text, level, raw, slugger) {
  const id = slugger.slug('heading');
  return `
            <h${level} id="${id}">
              <a class="post-anchor" data-id="${id}" data-text="${text}" data-level="${level}" href="#${id}">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAyNjYwNDk0MjU5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjIwLjU5IDY0TDM3NS42NiAzMDguOTNsMTAxLjgyIDEwMS44MyA2Ny44OC02Ny44OS0zMy45NC0zMy45NCAxMDkuMTctMTA5LjE3IDIwMy42NSAyMDMuNjUtMTA5LjE3IDEwOS4xNy0zMy45NC0zMy45NC02Ny44OSA2Ny44OCAxMDEuODMgMTAxLjgyTDk2MCA0MDMuNDF6TTQ3OC42NCA2ODEuMTNsMzMuOTQgMzMuOTQtMTA5LjE3IDEwOS4xNy0yMDMuNjUtMjAzLjY1IDEwOS4xNy0xMDkuMTcgMzMuOTQgMzMuOTQgNjcuODktNjcuODgtMTAxLjgzLTEwMS44Mkw2NCA2MjAuNTkgNDAzLjQxIDk2MGwyNDQuOTMtMjQ0LjkzLTEwMS44Mi0xMDEuODN6IiBwLWlkPSIyMjQ3IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PHBhdGggZD0iTTM0Mi43MSA2MTMuNGwyNzEuMTAzLTI3MS4xMDIgNjcuODgxIDY3Ljg4MS0yNzEuMTAyIDI3MS4xMDN6IiBwLWlkPSIyMjQ4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"/>  
              </a>
              ${text}
            </h${level}>`;
}

const image = function (href, title, text) {
  return `<p v-viewer><img id="POST_IMG" src="${href}" alt="${text}" title="${title}" style="cursor: zoom-in"></p>`;
}

const link = function (href, title, text) {
  return `<a href="${href}" target="_blank" title="${text}">${text}</a>`
}

const paragraph = function (text = '') {
  let re = /\{% (\w*?) (\w*?) %\}(<br>)?(.*?)(<br>)?\{%(.*?)%\}/gis;
  if (re.test(text)) {
    let newStr = text.replace(re, function (match, p1, p2, p3, p4, p5, p6) {
      // console.log(match, '\n', p1, '\n', p2, '\n', p3, '\n', p4, '---')
      return `<div class="post_${p1} post_${p2}">${p4}</div>`;
    });
    return newStr;
  }
  return text;
}

Object.assign(renderer, {
  heading,
  image,
  link,
  paragraph
});

export {
  renderer,
  tokenizer
}
