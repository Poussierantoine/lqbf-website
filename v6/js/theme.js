

const colorToLight = function () {
  const main = document.querySelector('main');
  main.classList.remove('dark');
  main.classList.add('light');
}

const colorToDark = function () {
  const main = document.querySelector('main');
  main.classList.remove('light');
  main.classList.add('dark');
}

const switchToLight = function (toLightAbortController) {
  toLightAbortController.abort();
  colorToLight();
  const toDarkAbortController = new AbortController();
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.addEventListener('click', () => {
    switchToDark(toDarkAbortController);
  }, { signal: toDarkAbortController.signal })
}

const switchToDark = function (toDarkAbortController) {
  toDarkAbortController.abort();
  colorToDark();
  const toLightAbortController = new AbortController();
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.addEventListener('click', () => {
    switchToLight(toLightAbortController);
  }, { signal: toLightAbortController.signal })
}


export default function initThemeToggle(){
  const body = document.querySelector('body');
  const themeToggle = document.querySelector('#theme-toggle');

  const abortController = new AbortController();
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      switchToLight(abortController);
    } else {
      switchToDark(abortController);
    }
  })
}

