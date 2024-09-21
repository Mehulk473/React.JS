import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';

export default function Accordian1() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div style={{ width: "98%", margin: "10px", padding: "10px", borderRadius:"1.25rem"}}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }} // Faster transition
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography><p className='p'>Why is CARS24 the best place to sell my car online?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Not only do we offer a great price on each car we buy with Instant Payment, we ensure the entire car selling experience is hassle-free. The entire process can be<br /> completed online, even the physical inspection of the car is done at your home as per the date and time decided by you. We also offer full after sales support to ensure you have,<br /> zero liability until the RC transfer is complete.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography><p className='p'>Can I sell a car that has an ongoing loan on it?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can. Based on the valuation of your car, CARS24 will handle the loan closures on your behalf, and will transfer the remaining balance to your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography><p className='p'>Is the car owner required to be present at the time of car pick up & inspection?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No. Anyone can be present during the inspection with the required documents and the car keys. The owner only needs to be present to sign documents at the time of sale.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography><p className='p'>Do I need to be present at the RTO for RC transfer?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We take care of all documentation, including the free RC transfer. In case there is any mismatch in RC like signature mismatch, you may need to be present at the RTO.<br />Some States also require the previous owner to be present at the RTO in order to register the car with the new owner, also known as 'Party Peshi'. A CARS24 representative<br /> will be present with you throughout the process.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography><p className='p'>How long does the RC transfer take?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The timeline of the RC transfer might vary depending on the availability of the prospective buyer and the RTO requirements. However, you don’t need to worry about it at all!<br /> All our customers are covered under the CARS24 Seller Protection Policy, which means until the RC transfer of your car is complete, we take full responsibility for the safety<br /> of your vehicle. Once the ownership has been transferred, we will send you an email with the proof of RC transfer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <Typography><p className='p'>Does CARS24 buy commercial cars?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unfortunately, we currently do not deal in commercial vehicles.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography><p className='p'>Will CARS24 handle/take care of the paperwork?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes! From the initial documentation to the free RC transfer, we will take care of everything.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
          TransitionProps={{ timeout: theme.transitions.duration.shorter }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <Typography><p className='p'>How long does it take during car inspection?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The inspection usually takes 30-45 mins. During this time our car expert will check your car across 140 parameters, including bodywork, wheels and tyres, interiors,<br /> electricals etc. They will also take a short test drive of the vehicle to assess its running condition.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}