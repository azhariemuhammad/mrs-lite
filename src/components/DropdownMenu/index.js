import React from 'react'
import { string, arrayOf, shape, number } from 'prop-types'

import { useStyles } from './styles'

const DropdownMenu = React.forwardRef(
  ({ item, placeholder, name, fieldName }, ref = undefined) => {
    const classes = useStyles()
    return (
      <div className={classes.flex}>
        <div className={classes.leftSide}>{fieldName}</div>
        <select
          name={name}
          className={classes.select}
          defaultValue=""
          ref={ref}
          style={{ width: '100%' }}
        >
          <>
            <option value="" disabled selected className={classes.placeholder}>
              {placeholder}
            </option>
            <>
              {item.length >= 1 ? (
                <>
                  {item.map(opt => {
                    return (
                      <option value={opt.id} key={opt.id}>
                        {opt.text}
                      </option>
                    )
                  })}
                </>
              ) : (
                ''
              )}
            </>
          </>
        </select>
      </div>
    )
  }
)
DropdownMenu.defaultProps = {
  fieldName: '',
  name: '',
  placeholder: ''
}

DropdownMenu.propTypes = {
  fieldName: string,
  name: string,
  placeholder: string,
  item: arrayOf(shape({ id: number, text: string })).isRequired
}

export default DropdownMenu
