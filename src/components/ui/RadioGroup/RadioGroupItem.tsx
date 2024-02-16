import React from 'react'

interface InputOptionItem {
  label: string
  value: string
}
interface RadioGroupProps extends React.InputHTMLAttributes<HTMLElement> {
  errors?: any
  item: InputOptionItem
}

export function RadioGroupItem(props: RadioGroupProps) {
  const { item, name, className, value, ...rest } = props

  const resolveClass = () => {
    const classList = [
      `peer relative appearance-none w-4 h-4 border rounded-full border-blue-gray-200 cursor-pointer`,
      `!focus:outline-none !focus:shadow-none focus:ring-0 focus:border-transparent`,
      `before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4`,
      `before:opacity-0 hover:before:opacity-10 _before:transition-opacity text-blue-500`,
      `checked:border-blue-500 checked:before:bg-blue-500`,
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
      <div key={`${item.label}_${item.value}`} className="flex items-center">
        <label className="relative flex cursor-pointer items-center text-sm font-medium text-gray-900 dark:text-gray-300">
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
    </>
  )
}
