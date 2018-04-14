import React from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Buy1 from '../public/Buy_1.png';
const TradingPlatform = () => {
  return (
    <div className="trade-platform">
       <Typography variant="headline" align="center" gutterBottom>
        Trading Platform
      </Typography>
      <GridList cellHeight={200} spacing={1}  cols={2} rows={2} className="grid-list">
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step1" />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <Typography variant="title" align="center" gutterBottom>
              Elite Trading Platform
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
              Description
          </Typography>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles()(TradingPlatform);