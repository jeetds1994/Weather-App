import React from 'react'
import { Menu } from 'semantic-ui-react'

const FilterBy = ({filterParm, changeFilterType}) =>{
  return(
    <Menu>
          <Menu.Item
            name='Fahrenheit'
            active={filterParm === 'F'}
            onClick={changeFilterType}
          />
          <Menu.Item
            name='Celsius'
            active={filterParm === 'C'}
            onClick={changeFilterType}
          />
        </Menu>
  )
}

export default FilterBy
