import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

const DayContainer = ({period, filterParm}) => {

  let icon = "icons/" + period.icon

  return(
    <Grid.Column>
    <Card >
    <Image src={icon} id="weather_icon"/>
    <Card.Content>
      <Card.Header>
        {Date(period.validTime).slice(0, 15)}
      </Card.Header>

      {/* I know this is not pretty, the best soltion for changing the period would be at the top level*/}
      <Card.Description>
        High: {filterParm === "F" && period.maxTempF}
        {filterParm === "C" && period.maxTempC}
      </Card.Description>
      <Card.Description>
        Low: {filterParm === "F" && period.minTempF}
        {filterParm === "C" && period.minTempC}
      </Card.Description>
    </Card.Content>

  </Card>
    </Grid.Column>
  )
}
export default DayContainer
