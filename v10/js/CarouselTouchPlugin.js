
export default class CarouselTouchPlugin {


  constructor(carousel) {
    carousel.container.addEventListener('dragstart', e => e.preventDefault()); // eviter de drag les images
    carousel.container.addEventListener('mousedown', this.startDrag.bind(this));
    carousel.container.addEventListener('touchstart', this.startDrag.bind(this), { passive: false });
    carousel.container.addEventListener('mousemove', this.drag.bind(this));
    carousel.container.addEventListener('touchmove', this.drag.bind(this), { passive: false, cancelable: true });
    carousel.container.addEventListener('mouseup', this.endDrag.bind(this));
    carousel.container.addEventListener('touchend', this.endDrag.bind(this));
    carousel.container.addEventListener('touchcancel', this.endDrag.bind(this)); // si le drag s'arrete sans que ca ait de lien avec le carousel
    this.carousel = carousel;
  }

  startDrag(e) {
    if (e.touches) {
      if (e.touches.length > 1) {
        return;
      } else {
        e = e.touches[0];
      }
    }
    this.origin = { x: e.screenX, y: e.screenY };
    this.width = this.carousel.containerWidth;
    this.carousel.disableTransition();
  }

  drag(e) {
    if (this.origin) {
      let point = e.touches ? e.touches[0] : e;
      let translate = { x: point.screenX - this.origin.x, y: point.screenY - this.origin.y };
      if (e.touches && Math.abs(translate.x) > Math.abs(translate.y)) {
        e.preventDefault();
        e.stopPropagation();
      } else if (e.touches) {
        return;
      }
      let baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
      this.lastTranslate = translate;
      this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
    }
  }

  endDrag(e) {
    this.carousel.enableTransition();
    if (this.origin && this.lastTranslate) {
      if (Math.abs(this.lastTranslate.x / this.carousel.carouselWidth) > 0.2) {
        if (this.lastTranslate.x < 0) {
          this.carousel.next();
        } else {
          this.carousel.prev();
        }
      } else {
        this.carousel.gotoItem(this.carousel.currentItem);
      }
    }
    this.origin = null;
    this.lastTranslate = null;
  }
}