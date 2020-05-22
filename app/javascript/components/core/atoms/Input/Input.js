import React, { useEffect, useState, useRef } from 'react'
import InputStyled from '../../../styled/atoms/inputStyled'
import colorScheme from '../../../../misc/colorScheme'
import { connect } from 'react-redux'
import { additionalInputStyles } from '../../../../misc/additionalInputStyles'

const Input = ({
  type,
  text,
  placeholder,
  dispatch,
  callback,
  validate,
  errorDispatch,
  height,
  width,
  disabled,
  inputValue,
  ...props
}) => {
  const inputRef = useRef()
  const [typeOf] = useState(type)
  const [buttonText] = useState(text)
  const [textPlaceholder] = useState(placeholder)
  const [inputStyles, setInputStyles] = useState('')
  const [size] = useState({ height, width })
  const [shouldValidate, setShouldValidate] = useState(false)
  const [isDisabled, setIsDisabled] = useState(disabled)
  const [value, setValue] = useState(inputValue)

  useEffect(() => {
    setValue(inputValue)
  }, [inputValue])

  useEffect(() => {
    setIsDisabled(disabled)
  }, [disabled])

  /**
   * This useEffect is for style management
   */
  useEffect(() => {
    if (shouldValidate) {
      dispatch(errorDispatch())
      setInputStyles(`
        border: 5px solid ${ colorScheme.watermelon };
        box-sizing: border-box;
        padding: 10px;
      `)
    } else {
      switch(typeOf) {
        case 'button':
        case 'submit':
          setInputStyles(additionalInputStyles.buttonInputStyles(colorScheme))
          break
        case 'text':
        case 'password':
          setInputStyles(additionalInputStyles.textInputStyles(colorScheme))
          break
        case 'checkbox':
          setInputStyles(additionalInputStyles.checkboxInputStyles(colorScheme))
          break
        default:
          break
      }
    }
  }, [shouldValidate, typeOf, dispatch, errorDispatch])

  return (
    <InputStyled
      ref = { inputRef }
      autoComplete = 'off'
      type = { typeOf }
      disabled = { isDisabled }
      size = { size }
      value = { buttonText || value }
      placeholder = { textPlaceholder }
      inputStyles = { inputStyles }
      onChange = { e => dispatch(callback(e.target.value)) }
      onBlur = { () => setShouldValidate(validate) }
    />
  )
}

export default connect() (Input)
