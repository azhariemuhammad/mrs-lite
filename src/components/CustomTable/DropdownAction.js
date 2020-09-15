import React, { useState } from 'react'
import { string, arrayOf, shape, number, func } from 'prop-types'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { useStyles } from './styles'

const DropdownActions = ({ items, placeholder, selectedItem }) => {
  const classes = useStyles()
  const [open, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  const handleClickAway = () => {
    setIsOpen(false)
  }

  const handleItemClick = onAction => {
    handleClick()
    return onAction(selectedItem)
  }
  return (
    <div>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div className={classes.root}>
          <button type="button" onClick={handleClick} className={classes.chip}>
            {placeholder}
          </button>
          <>
            {open ? (
              <div className={classes.dropdown}>
                {items.length >= 1 ? (
                  <div className={classes.dropdownItemWrapper}>
                    {items.map(opt => {
                      return (
                        <option
                          value={opt.id}
                          key={opt.id}
                          onClick={() => handleItemClick(opt.onActionClick)}
                          className={classes.dropdownItem}
                        >
                          {opt.text}
                        </option>
                      )
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : null}
          </>
        </div>
      </ClickAwayListener>
    </div>
  )
}

DropdownActions.defaultProps = {
  placeholder: '',
  selectedItem: {}
}

DropdownActions.propTypes = {
  placeholder: string,
  items: arrayOf(shape({ id: number, text: string, onActionClick: func }))
    .isRequired,
  selectedItem: shape({})
}

export default DropdownActions
