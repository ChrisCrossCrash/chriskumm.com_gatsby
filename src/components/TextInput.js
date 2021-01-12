import {useField} from 'formik'
import React from 'react'

const TextInput = ({label, variant, ...props}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  const invalid = meta.touched && meta.error

  let inputElement

  if (variant === 'input') {
    inputElement = (
      <input
        className={`block border border-gray-300 p-2 w-full my-0.5
        focus:outline-none focus:ring focus:ring-gray-300 rounded transition
        ${invalid && 'border-red-500 focus:ring focus:ring-red-300'}`}
        {...field}
        {...props}
      />
    )
  } else if (variant === 'textarea') {
    inputElement = (
      <textarea
        className={`block border border-gray-300 p-2 w-full my-0.5
        focus:outline-none focus:ring focus:ring-gray-300 rounded transition
        ${invalid && 'border-red-500 focus:ring focus:ring-red-300'}`}
        {...field}
        {...props}
      />
    )
  }

  return (
    <div className='mb-5'>
      <label
        className={`block mb-1 ${invalid && 'text-red-500'}`}
        htmlFor={props.id || props.name}
      >{label}</label>
      {inputElement}
      {invalid && (
        <div className='text-red-600 text-xs pl-2 absolute'>{meta.error}</div>
      )}
    </div>
  )
}

export default TextInput
