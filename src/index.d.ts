declare type JsonType = null | string | number | boolean | JsonType [] | { [key: string]: JsonType }

declare namespace UI {

  interface ModalStyle {
    width?: number
    height?: number
    top?: number
    left?: number
    transition?: string
  }

  interface PageConfig {
    id: string
    sections: Section[]
  }

  interface SectionBase {
    id: string
  }

  interface FullWidthSection extends SectionBase {
    type: 'full-width'
    module: FullWidthModule
  }

  interface RegularSection extends SectionBase {
    type: 'regular'
    columns: Column[]
  }

  type Section = FullWidthSection | RegularSection

  type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

  interface Column {
    width: ColumnWidth
    rows: Row[]
  }

  interface Row {
    modules: Module[]
  }

  type FullWidthModuleType = 'full-width-header'

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

  type FullWidthModule = FullWidthHeaderModule

  type Module = FullWidthModule

  interface Button {
    text: string
    link?: string
  }
}
