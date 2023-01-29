declare namespace UI {
  interface ModuleBase {
    id: string
    style?: Partial<CSSStyleDeclaration>
  }

  interface FullWidthHeaderModule extends ModuleBase {
    type: 'full-width-header'
    title?: string
    subTitle?: string
    button1?: Button
    button2?: Button
    body?: string
  }

  interface FullWidthImageModule extends ModuleBase {
    type: 'full-width-image'
    src?: string
  }

  interface FullWidthCarouselModule extends ModuleBase, Carousel {
    type: 'full-width-carousel'
  }

  type FullWidthModule =
    | FullWidthHeaderModule
    | FullWidthImageModule
    | FullWidthCarouselModule

  type Module =
    | FullWidthModule
}
