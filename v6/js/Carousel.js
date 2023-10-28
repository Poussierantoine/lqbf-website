import CarouselTouchPlugin from "./CarouselTouchPlugin.js";

export default class Carousel {
  /**
   * @callback MoveCallback
   * @param {number} index
   */


  /**
   * @typedef {Object} CarouselOptions
   * @description Options du carousel
   * @property {number} [slidesToScroll = 1] Nombre d'éléments à faire défiler
   * @property {number} [slidesVisible = 1] Nombre d'éléments visible dans un slide
   * @property {string} [carouselBackgroundColor = "white"] couleur de fond du carousel.
   * @property {boolean} [navigation = true]  crée des boutons de navigations à droite et a gauche du  carousel
   * @property {string} [leftIcon = undefined]  path vers l'icone de la flèche de gauche
   * @property {string} [rightIcon = undefined]  path vers l'icone de la flèche de droite
   * @property {boolean} [loop = false]  Doit-on boucler en fin de carousel
   * @property {boolean} [pagination = false]  donne une pagination en dessous du carousel sous forme de points
   * @property {boolean} [infinite = false]  le carousel defile à la fois vers la gauche et la droite au lieu de sauter quand la liste est finie
   * @property {boolean} [mobileTouch = false] active la possibilité de drag pour deplacer les slides du carousel
   */

  /**
   * @property {CarouselOptions} options
   * @description les options du carousel
   */
  options;

  /**
   * @property {HTMLElement} element
   * @description le carousel
   */
  element;
  
  /**
   * @property {HTMLElement} container
   * @description le container des éléments du carousel
   */
  container;

  /**
   * @property {HTMLElement} nextButton
   * @description le bouton de navigation vers la droite
   */
  nextButton;

  /**
   * @property {HTMLElement} prevButton
   * @description le bouton de navigation vers la gauche
   */
  prevButton;

  /**
   * @property {HTMLElement[]} items
   * @description les éléments du carousel
   */
  items;

  /**
   * @property {number} currentItem
   * @description l'index de l'élément courant
   */
  currentItem;

  /**
   * @property {number} nbItems
   * @description le nombre d'éléments du carousel
   */
  nbItems;

  /**
   * @property {number} offset
   * @description le nombre d'éléments dupliqués à gauche du carousel dans le cas de this.options.infinite = true
   */
  offset;


  /**
   * @property {MoveCallback[]} moveCallbacks
   * @description les callbacks appelés lors d'un déplacement du carousel
   */
  moveCallbacks;

  /**
   * @property {boolean} isMobile
   * @description le carousel est-il en mode mobile
   */
  isMobile;

  /**
   * @property {HTMLElement} pagination
   * @description la pagination du carousel
   */
  pagination;


  /**
   * crée une div avec la classe carousel__container et place les éléments du carousel dans cette div et place la div dans le carousel passé en paramètre
   * place un event listener sur la fenetre pour gérer le resize et un event sur les fleches du clavier pour gérer le défilement du carousel
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Object} [options.slidesToScroll = 1] Nombre d'éléments à faire défiler
   * @param {Object} [options.slidesVisible = 1] Nombre d'éléments visible dans un slide
   * @param {Object} [options.carouselBackgroundColor = "white"] couleur de fond du carousel.
   * @param {Object} [options.navigation = true]  crée des boutons de navigations à droite et a gauche du  carousel
   * @param {Object} [options.leftIcon = undefined]  path vers l'icone de la flèche de gauche
   * @param {Object} [options.rightIcon = undefined]  path vers l'icone de la flèche de droite
   * @param {Object} [options.loop = false]  Doit-on boucler en fin de carousel
   * @param {Object} [options.pagination = false]  donne une pagination en dessous du carousel sous forme de points
   * @param {Object} [options.infinite = false]  le carousel defile à la fois vers la gauche et la droite au lieu de sauter quand la liste est finie
   * @param {Object} [options.mobileTouch = false] active la possibilité de drag pour deplacer les slides du carousel
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
        carouselBackgroundColor: "white",
        navigation: true,
        loop: false,
        pagination: true,
        infinite: false,
        mobileTouch: false,
      },
      options
    );
    let children = [].slice.call(element.children);
    this.isMobile = false;
    this.currentItem = 0;
    this.offset = 0;
    this.moveCallbacks = [];
    this.nbItems = children.length;

    // Modification du DOM
    this.container = this.createDivWithClass("carousel__container");
    this.element.setAttribute("tabindex", "0");
    this.element.appendChild(this.container);
    this.items = children.map((child) => {
      child.style.maxWidth = "100%";
      child.style.maxHeight = "100%";
      const item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      return item;
    });
    if (this.options.infinite === true) {
      this.offset = this.options.slidesVisible * 2 - 1;
      this.items = [
        ...this.items
          .slice(this.items.length - this.offset)
          .map((item) => item.cloneNode(true)),
        ...this.items,
        ...this.items.slice(0, this.offset).map((item) => item.cloneNode(true)),
      ];
      this.gotoItem(this.offset, false);
    }
    this.items.forEach((item) => this.container.appendChild(item));
    this.setStyle();
    if (this.options.navigation === true) {
      this.createNavigation();
    }
    if (this.options.pagination === true) {
      this.createPagination();
    }

    // Evenements
    this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
    this.element.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight" || e.key === "Right") {
        this.next();
      } else if (e.key === "ArrowLeft" || e.key === "Left") {
        this.prev();
      }
    });
    if (this.options.infinite === true) {
      this.container.addEventListener("transitionend", () =>
        this.resetInfinite()
      );
    }
    if (this.options.mobileTouch === true) {
      new CarouselTouchPlugin(this);
    }
  }

  /**
   * @param {string} className
   * @returns {HTMLElement}
   */
  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  /**
   * gere la taille des éléments du carousel en fonction du nombre d'éléments visible et du nombre d'éléments à faire défiler
   */
  setStyle() {
    // container
    this.element.style.position = "relative";
    const containerStyle = this.container.style;
    let ratio = this.items.length / this.options.slidesVisible;
    containerStyle.width = ratio * 100 + "%";
    containerStyle.backgroundColor = this.options.carouselBackgroundColor;
    containerStyle.height = "100%";
    containerStyle.display = "flex";
    containerStyle.flexDirection = "row";
    containerStyle.justifyContent = "center";
    containerStyle.alignItems = "center";
    containerStyle.position = "relative";
    if (!this.options.infinite){
      containerStyle.transform = "translate(0, 0)";
    }

    //items
    this.items.forEach((item) => {
      const itemStyle = item.style;
      itemStyle.width = 100 / this.options.slidesVisible / ratio + "%";
      itemStyle.height = "100%";
      itemStyle.padding = "10px";
      itemStyle.display = "flex";
      itemStyle.justifyContent = "center";
      itemStyle.alignItems = "center";
    });
  }

  enableTransition() {
    this.container.style.transition = "transform 0.5s ease-in-out";
  }

  disableTransition() {
    this.container.style.transition = "none";
  }

  /**
   * créee les flèches de navigation et place un callback dans $this.moveCallbacks pour gérer l'affichage des flèches
   */
  createNavigation() {
    const navigationButtonStyle = function (button) {
      const buttonStyle = button.style;
      buttonStyle.position = "absolute";
      buttonStyle.top = "50%";
      buttonStyle.width = "50px";
      buttonStyle.height = "50px";
      buttonStyle.backgroundColor = "white";
      buttonStyle.borderRadius = "50%";
      buttonStyle.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      buttonStyle.cursor = "pointer";
      buttonStyle.display = "flex";
      buttonStyle.justifyContent = "center";
      buttonStyle.alignItems = "center";
    };
    this.nextButton = this.createDivWithClass("carousel__next");
    this.prevButton = this.createDivWithClass("carousel__prev");
    navigationButtonStyle(this.nextButton);
    navigationButtonStyle(this.prevButton);
    if(this.options.infinite !== true){
      this.prevButton.style.visibility = "hidden";
    }
    this.prevButton.style.left = "0";
    this.nextButton.style.right = "0";
    if (
      this.options.leftIcon !== undefined &&
      this.options.rightIcon !== undefined
    ) {
      this.nextButton.innerHTML = `<img src="${this.options.rightIcon}" alt="next">`;
      this.prevButton.innerHTML = `<img src="${this.options.leftIcon}" alt="prev">`;
    }
    this.element.appendChild(this.nextButton);
    this.element.appendChild(this.prevButton);
    const nextFunction = this.next.bind(this);
    const prevFunction = this.prev.bind(this);
    this.nextButton.addEventListener("click", nextFunction);
    this.prevButton.addEventListener("click", prevFunction);
    if (this.options.loop === true) {
      return;
    }
    this.onMove((index) => {
      if (index === 0) {
        this.prevButton.classList.add("carousel__prev--hidden");
      } else {
        this.prevButton.classList.remove("carousel__prev--hidden");
      }
      if (
        this.items[this.currentItem + this.options.slidesVisible] === undefined
      ) {
        this.nextButton.classList.add("carousel__next--hidden");
      } else {
        this.nextButton.classList.remove("carousel__next--hidden");
      }
    });
  }

  /**
   * crée une pagination sous forme de points en bas du carousel et stock dans this.pagination
   */
  createPagination() {
    this.pagination = this.createDivWithClass("carousel__pagination");
    const paginationStyle = this.pagination.style;
    paginationStyle.position = "absolute";
    paginationStyle.bottom = "0";
    paginationStyle.left = "50%";
    paginationStyle.transform = "translateX(-50%)";
    /* paginationStyle.display = "block"; */
    paginationStyle.display = "flex";
    paginationStyle.flexDirection = "row";
    paginationStyle.flexWrap = "wrap";
    paginationStyle.justifyContent = "center";
    paginationStyle.width = "80%";
    let buttons = [];
    this.element.appendChild(this.pagination);
    for (
      let i = this.offset;
      i < this.nbItems + this.offset;
      i = i + this.options.slidesToScroll
    ) {
      let button = this.createDivWithClass("carousel__pagination__button");
      const buttonStyle = button.style;
      /* buttonStyle.float = "left" */
      buttonStyle.width = "10px";
      buttonStyle.height = "10px";
      buttonStyle.borderRadius = "50%";
      buttonStyle.border = "black 1px solid";
      buttonStyle.margin = "5px";
      buttonStyle.cursor = "pointer";
      buttonStyle.backgroundColor = "white";
      buttonStyle.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
      buttonStyle.transition = "transform 0.3s ease-in-out";
      button.addEventListener(
        "mousehover",
        () => (buttonStyle.transform = "transform scale(1.4)")
      );
      button.addEventListener("click", () => this.gotoItem(i));
      this.onMove((index) => {
        const activeButton =
          buttons[
            Math.floor((index - this.offset) / this.options.slidesToScroll)
          ];
        if (activeButton) {
          const lastActiveButton = buttons.find((button) =>
            button.classList.contains("carousel__pagination__button--active")
          );
          if (lastActiveButton) {
            lastActiveButton.classList.remove(
              "carousel__pagination__button--active"
            );
            lastActiveButton.style.transform = "scale(1)";
          }
          activeButton.classList.add("carousel__pagination__button--active");
          activeButton.style.transform = "scale(1.4)";
        }
      });
      this.pagination.appendChild(button);
      buttons.push(button);
    }
  }

  /**
   * @param {MoveCallback} cb
   */
  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  /**
   * déplace le carousel vers les élément suivant
   */
  next() {
    this.gotoItem(this.currentItem + this.options.slidesToScroll);
  }

  /**
   * déplace le carousel vers les élément précédent
   */
  prev() {
    this.gotoItem(this.currentItem - this.options.slidesToScroll);
  }


  translate (percent) {
    this.container.style.transform = 'translate(' + percent + '%, 0)';
  }

  /**
   * déplace le carousel vers l'élément ciblé
   * @param {Number} index
   * @param {boolean} [animation = true]
   */
  gotoItem(index, animation = true) {
    if(animation === true){
      this.enableTransition();
    }

    if(this.options.infinite){
      // utilisation de l'infini lors du depassement
      if (
        this.currentItem >=
          this.nbItems + this.offset - this.options.slidesVisible &&
        index === this.offset
      ) {
        index =
          this.currentItem + this.options.slidesVisible;
      } else if (
        this.currentItem === this.offset &&
        index === this.nbItems + this.offset - (this.options.slidesVisible - (this.nbItems % 2))
      ) {
        index =
          this.currentItem - this.options.slidesVisible;
      } 
    }else{
      if(index <= 0 ){
        this.prevButton.style.visibility = "hidden";
        this.nextButton.style.visibility = "visible";
      } else if (
        (this.nbItems % 2 === 0 && index >= this.nbItems - 2)
        || (this.nbItems % 2 === 1 && index >= this.nbItems - 1)
        ){
        this.nextButton.style.visibility = "hidden";
        this.prevButton.style.visibility = "visible";
        } else {
          this.prevButton.style.visibility = "visible";
          this.nextButton.style.visibility = "visible";
        }
    }

    //gestion du depassement
    if (index < this.offset) {
      if (this.options.loop) {
        index =
          this.items.length - (this.options.slidesVisible - (this.nbItems % 2));
      } else if (this.options.infinite) {
        index = index + (this.nbItems % 2);
      } else {
        return;
      }
    } else if (
      index >= this.nbItems + this.offset ||
      (this.items[this.currentItem + this.options.slidesVisible] ===
        undefined &&
        index > this.currentItem)
    ) {
      if (this.options.loop) {
        index = 0;
      } else if (this.options.infinite) {
        index = index - (this.nbItems % 2);
      } else {
        return;
      }
    }

    let translateX = (index * -100) / this.items.length;
    if (animation === false) {
      this.disableTransition();
    }
    this.translate(translateX);
    this.container.offsetHeight; // force repaint
    if (animation === false) {
      this.enableTransition();
    }
    this.currentItem = index;
    this.moveCallbacks.forEach((cb) => cb(index));
  }

  /**
   * remet le container à la bonne place pour impression de scroll infini
   */
  resetInfinite() {
    if (this.currentItem <= this.options.slidesToScroll) {
      this.gotoItem(
        this.currentItem + this.nbItems + (this.nbItems % 2),
        false
      );
    } else if (this.currentItem >= this.items.length - this.offset) {
      this.gotoItem(
        this.currentItem - this.nbItems - (this.nbItems % 2),
        false
      );
    }
  }

  /**
   * si la fenetre est resize, on recalcule le nombre d'éléments visible
   */
  onWindowResize() {
    let mobile = window.innerWidth < 800;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      this.setStyle();
      this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    }
    if (this.isMobile) {
      this.pagination.style.display = "none";
    } else {
      if (this.options.pagination === true){
        this.pagination.style.display = "flex";
      }
    }
  }

  /**
   * retourne le nombre d'éléments à faire défiler (=1 si mobile)
   */
  get slidesToScroll() {
    return this.isMobile ? 1 : this.options.slidesToScroll;
  }

  /**
   *  retourne le nombre de slide visible (=1 si mobile)
   */
  get slidesVisible() {
    return this.isMobile ? 1 : this.options.slidesVisible;
  }


  /**
   * @return {Number}
   */
  get containerWidth() {
    return this.container.offsetWidth;
  }

  /**
   * @return {Number}
   */
  get carouselWidth() {
    return this.element.offsetWidth;
  }
}
