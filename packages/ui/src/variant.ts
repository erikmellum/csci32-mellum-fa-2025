export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  DELETE,
  ALERT,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800'
    case Variant.SECONDARY:
      return 'bg-violet-600 hover:bg-violet-700 active:bg-violet-800'
    case Variant.TERTIARY:
      return 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800'
    case Variant.DELETE:
      return 'bg-red-600 hover:bg-red-700 active:bg-red-800'
    case Variant.ALERT:
      return 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800'
  }
}

export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-emerald-600'
    case Variant.SECONDARY:
      return 'outline-violet-600'
    case Variant.TERTIARY:
      return 'outline-pink-600'
    case Variant.DELETE:
      return 'outline-red-600'
    case Variant.ALERT:
      return 'outline-amber-600'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-emerald-600'
    case Variant.SECONDARY:
      return 'border-2 border-violet-600'
    case Variant.TERTIARY:
      return 'border-2 border-pink-600'
    case Variant.DELETE:
      return 'border-2 border-red-600'
    case Variant.ALERT:
      return 'border-2 border-amber-600'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
    case Variant.DELETE:
      return 'text-black'
    case Variant.ALERT:
      return 'text-black'
  }
}

export function getVariantButtonTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-white'
    case Variant.SECONDARY:
      return 'text-white'
    case Variant.TERTIARY:
      return 'text-white'
    case Variant.DELETE:
      return 'text-white'
    case Variant.ALERT:
      return 'text-white'
  }
}
