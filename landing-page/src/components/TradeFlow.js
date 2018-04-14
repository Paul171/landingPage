import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import Buy1 from '../public/Buy_1.png';
const TradeFlow = (props) => {

  return (
    <div className="trade-flow">
      <Typography variant="headline" align="center" gutterBottom>
        How to trade flow
      </Typography>
      <GridList cellHeight={200} spacing={1} className="grid-list">
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step1" />
          <GridListTileBar
            title="Step1"
            titlePosition="bottom"            
          />
        </GridListTile>
      </GridList> 
      <GridList cellHeight={200} spacing={1} className="grid-list">
        <GridListTile cols={1} rows={1}>
          
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step2" />
          <GridListTileBar
            title="Step2"
            titlePosition="bottom"            
          />
        </GridListTile>
      </GridList> 
      <GridList cellHeight={200} spacing={1} className="grid-list">
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step3" />
          <GridListTileBar
            title="Step3"
            titlePosition="bottom"            
          />
        </GridListTile>
      </GridList>
      <GridList cellHeight={200} spacing={1} className="grid-list">
        <GridListTile cols={1} rows={1}>
          
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step4" />
          <GridListTileBar
            title="Step4"
            titlePosition="bottom"            
          />
        </GridListTile>
      </GridList>
      <GridList cellHeight={200} spacing={1} className="grid-list">
        <GridListTile cols={1} rows={1}>
          <img src={Buy1} alt="step5" />
          <GridListTileBar
            title="Step5"
            titlePosition="bottom"            
          />
        </GridListTile>
      </GridList>  
    </div>
  )
};

export default TradeFlow;

