import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Resouces</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fuel price
            <br/>
            Blog
            <br/>
            Future of Mobility Report
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
