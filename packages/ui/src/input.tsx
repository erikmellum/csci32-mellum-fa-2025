import React, { forwardRef } from 'react'
import { getInputSizeStyles, Size } from './size'
import { getVariantBorderStyles, getVariantInputTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonInputStyles } from './tokens'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: Variant
  size?: Size
  setValue?: (newValue: any) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = Variant.PRIMARY, size = Size.MEDIUM, setValue, onChange, className, ...props }, ref) => {
    const sizeCssClasses = getInputSizeStyles(size)
    const variantOutlineCssClasses = getVariantOutlineStyles(variant)
    const variantBorderCssClasses = getVariantBorderStyles(variant)
    const variantInputTextCssClasses = getVariantInputTextStyles(variant)
    const commonCssClasses = getCommonInputStyles()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setValue) setValue(e.target.value)
      if (onChange) onChange(e)
    }

    return (
      <input
        {...props}
        ref={ref}
        onChange={handleChange}
        className={`${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses} ${className ?? ''}`}
      />
    )
  },
)
