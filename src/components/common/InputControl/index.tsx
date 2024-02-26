import { InputHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import { FormUIInput } from '../FormUIInput'

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: any
  icon?: string
  control?: any
  label?: string
  fontSizeLabel?: string
  classWrapper?: string
  defaultValue?: any
  fixedHeight?: boolean
  customBorder?: string
  maxLength?: number
}

export function InputControl(props: InputControlProps) {
  const {
    name,
    icon,
    control,
    fixedHeight,
    defaultValue,
    customBorder,
    fontSizeLabel,
    classWrapper,
    onChange,
    onBlur,
    ...restProps
  } = props

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormUIInput
          fontSizeLabel={fontSizeLabel}
          classWrapper={classWrapper}
          error={error}
          icon={icon}
          fixedHeight={fixedHeight}
          customBorder={customBorder}
          {...field}
          {...restProps}
          onChange={e => {
            onChange?.(e)
            field.onChange(e)
          }}
          onBlur={e => {
            onBlur?.(e)
            field.onBlur()
          }}
        />
      )}
    />
  ) : (
    <FormUIInput
      name={name}
      icon={icon}
      classWrapper={classWrapper}
      fontSizeLabel={fontSizeLabel}
      defaultValue={defaultValue}
      {...restProps}
    />
  )
}

InputControl.defaultProps = {
  name: '',
  icon: '',
  control: false,
  label: '',
  fontSizeLabel: 'text-sm',
  classWrapper: 'mt-1',
  defaultValue: '',
  fixedHeight: true,
  customBorder: '',
  maxLength: '',
}
