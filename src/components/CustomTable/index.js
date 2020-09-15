import React, { useState } from 'react'

import { arrayOf, bool, func, string } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import LoaderCircle from 'components/LoaderCircle'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import EnhancedTableHead from './EnhancedTableHead'
import DropdownActions from './DropdownAction'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  headingText: {
    lineHeight: '1.43',
    color: 'rgba(49, 53, 59, 0.68)',
    zIndex: 100,
    fontSize: '0.875rem',
    fontWeight: 700
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  }
}))

const CustomTable = ({
  dataTable,
  headCells,
  tableCellsKey,
  action,
  withToolbar,
  loading,
  actionText,
  actions,
  dropdown
}) => {
  const classes = useStyles()
  const [selected, setSelected] = useState([])
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('calories')
  const [dense, setDense] = useState(false)
  const [actionMenu, setActionMenu] = useState('Atur')
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {withToolbar && <EnhancedTableToolbar numSelected={selected.length} />}

        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={() => {}}
              onRequestSort={() => {}}
              rowCount={dataTable.length}
              headCells={headCells}
            />
            <TableBody>
              <>
                {loading && (
                  <div className={classes.loaderWrapper}>
                    <LoaderCircle />
                  </div>
                )}
                {dataTable.map((row, idx) => {
                  const labelId = `enhanced-table-checkbox-${idx}`
                  return (
                    <TableRow
                      hover
                      onClick={() => {}}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                      selected={false}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                        />
                      </TableCell>
                      {tableCellsKey.map(cellKey => (
                        <TableCell align="left" key={cellKey}>
                          {row[cellKey]}
                        </TableCell>
                      ))}
                      <TableCell>
                        {!dropdown ? (
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => action(row)}
                          >
                            {actionText}
                          </Button>
                        ) : (
                          <DropdownActions
                            items={actions}
                            selectedItem={row}
                            placeholder="Atur"
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

CustomTable.defaultProps = {
  actionText: '',
  loading: false,
  withToolbar: true,
  dropdown: false
}
CustomTable.propTypes = {
  actionText: string,
  dataTable: arrayOf({}).isRequired,
  dropdown: bool,
  headCells: arrayOf({}).isRequired,
  tableCellsKey: arrayOf({}).isRequired,
  action: func.isRequired,
  withToolbar: bool,
  loading: bool
}
export default CustomTable
