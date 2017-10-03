import React from 'react'
import DayContainer from './DayContainer'
import { Grid } from 'semantic-ui-react'


const DaysContainer = ({periods, filterParm}) => {
  return(
    <Grid columns={7} divided id="days_container">
      <Grid.Row>
        {periods.map((period, index) => <DayContainer period={period} key={index} filterParm={filterParm}/>)}
      </Grid.Row>
    </Grid>
  )
}

export default DaysContainer
