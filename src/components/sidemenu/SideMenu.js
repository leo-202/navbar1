import React from "react";
import { Accordion, AccordionSection } from "./../accordion/Accordion";
import Carrousel from "./../carrousel/Carrousel";
import { StyledSideMenu } from "./style";

const sideCategories = [
  {
    id: 1,
    name: "Kittens",
    subcategories: [
      {
        id: 1,
        name: "Dry food",
        url: " "
      },
      {
        id: 2,
        name: "Wet food",
        url: " "
      },
      {
        id: 3,
        name: "Toys",
        url: " "
      }
    ]
  },
  {
    id: 2,
    name: "Adult kitties",
    subcategories: [
      {
        id: 1,
        name: "Dry food",
        url: " "
      },
      {
        id: 2,
        name: "Wet food",
        url: " "
      },
      {
        id: 3,
        name: "Toys",
        url: " "
      }
    ]
  },
  {
    id: 3,
    name: "Indoor kitties",
    subcategories: [
      {
        id: 1,
        name: "Diet food",
        url: " "
      },
      {
        id: 2,
        name: "Dry food",
        url: " "
      },
      {
        id: 3,
        name: "Wet food",
        url: " "
      },
      {
        id: 4,
        name: "Toys",
        url: " "
      }
    ]
  },
  {
    id: 4,
    name: "Sterilized",
    subcategories: [
      {
        id: 1,
        name: "Diet food",
        url: " "
      }
    ]
  }
];

const SideMenu = (props) => {
  return (
    <StyledSideMenu open={props.open} onClick={props.onClick}>
      <Carrousel />
      <AccordionSection>
        {sideCategories.map((sideCategory) => (
          <Accordion
            accordionTitle={sideCategory.name}
            subcategories={sideCategory.subcategories}
          />
        ))}
      </AccordionSection>
    </StyledSideMenu>
  );
};

export default SideMenu;
