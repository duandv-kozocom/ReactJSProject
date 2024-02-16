import React from 'react'

export interface InputOptionItem {
  label: string
  value: string
}
interface RadioGroupProps extends React.InputHTMLAttributes<HTMLElement> {
  errors?: any
  items: InputOptionItem[]
}

export function RadioGroup(props: RadioGroupProps) {
  const { items, errors, name, className, value, ...rest } = props

  const resolveClass = () => {
    const classList = [
      'w-[13px] h-[13px] text-blue-600 bg-gray-100 border-gray-300',
      'dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600',
      className || '',
    ]
    return classList.join(' ')
  }

  const resolveProps = (item: InputOptionItem) => {
    const props = { ...rest }
    if (value !== undefined) {
      props.checked = item.value === value
    }
    return props
  }

  return (
    <>
      {items.map(item => (
        <div key={`${item.label}_${item.value}`} className="flex items-center">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center mr-2 cursor-pointer">
            <input
              type="radio"
              value={item.value}
              name={name}
              className={resolveClass()}
              {...resolveProps(item)}
            />
            <span className="ml-2">{item.label}</span>
          </label>
        </div>
      ))}
      {errors && errors[name as any] && <span className="error">{errors[name as any]}</span>}
    </>
  )
}
