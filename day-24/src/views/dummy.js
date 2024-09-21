import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DisabledAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography ><p className='p'> Why is CARS24 the best place to sell my car online? </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Not only do we offer a great price on each car we buy with Instant Payment, we ensure the entire car selling exeprience is a hassle-free. The entire process can be <br/> completed online, even the physical inspection of car is done at your home as per the date and time decided by you. We also offer full after sales support to ensure you have <br/> zero liability until the RC transfer is complete.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography ><p className='p'> Can I sell a car that has an ongoing loan on it?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes you can. Based on the valuation of your car, CARS24 will handle the loan closures on your behalf, and will transfer the remaining balance to your account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><p className='p'> Is the car owner required to be present at the time of car pick up & inspection?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No. Anyone can be present during the inspection with the required documents and the car keys. The owner only needs to be present to sign documents at the time of sale.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <p className='p'> Do I need to be present at the RTO for RC transfer?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We take care of all documentation, including the free RC transfer. In case there is any mismatch in RC like signature mismatch, you may need to be present at the RTO. <br/> Some States also require the previous owner to be present at the RTO in order to register the car with the new owner, also known as 'Party Peshi'. A CARS24 representative <br/> will be present with you throughout the process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <p className='p'> How long does the RC transfer take? </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The timeline of the RC transfer might vary depending on the availability of the prospective buyer and the RTO requirements. However, you don’t need to worry about it at all! <br/> All our customers are covered under the CARS24 Seller Protection Policy, which means until the RC transfer of your car is complete, we take full responsibility for the safety  <br/> of your vehicle. Once the ownership has been transferred, we will send you an email with the proof of RC transfer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <p className='p'> Does CARS24 buy commercial cars ? </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Unfortunately, we currently do not deal in commercial vehicles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <p className='p'> Will CARS24 handle/take care of the paperwork? </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! From the initial documentation to the free RC transfer, we will take care of everything.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <p className='p'> How long does it take during car inspection? </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The inspection usually takes 30-45 mins. During this time our car expert will check your car across 140 parameters, including bodywork, wheels and tyres, interiors, <br/> electricals etc. They will also take a short test drive of the vehicle to assess its running condition.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
