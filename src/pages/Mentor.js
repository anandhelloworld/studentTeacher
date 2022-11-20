import React from 'react'
import {UncontrolledAccordion,AccordionItem,AccordionHeader,AccordionBody} from "reactstrap"
export default function Mentor() {
  return (
    <UncontrolledAccordion defaultOpen="1" className="container">
      <h3>List of all mentors and with list of students theuy are teaching</h3> 
  <AccordionItem>
    <AccordionHeader targetId="1">
     Teacher anand
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <h4>list of students</h4>
      <ul>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
      </ul>
    </AccordionBody>
  </AccordionItem>

  <AccordionItem>
    <AccordionHeader targetId="2">
     Teacher anand
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <h4>list of students</h4>
      <ul>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
        <li>student 1</li>
      </ul>
    </AccordionBody>
    
  </AccordionItem>
  <AccordionItem></AccordionItem>
  
 
</UncontrolledAccordion>
  )
}
