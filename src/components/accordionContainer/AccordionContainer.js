import React from "react";
import { data } from "../../data";
import "./AccordionContainer.css";

import Accordion from "../accordion/Accordion";

import AccordionRow from "../accordionRow/AccordionRow";

const AccordionContainer = () => {
  const itemsJsx = (items = []) =>
    items.map((item, index) => <AccordionRow key={index} {...item} />);

  const subCategoriesJsx = (category) => {
    const { subCategoryIds } = category;
    if (subCategoryIds && subCategoryIds.length > 0) {
      const jsx = category.subCategoryIds.map((subCategoryId) => {
        // Find the data for sub category
        const subCategory = data.subCategories.find(
          (subCategory) => subCategory.id === subCategoryId
        );

        const { id, title = "", items = [] } = subCategory;

        return (
          <Accordion key={id} title={title} subAccordion availability={items.length > 0}>
            {itemsJsx(items)}
          </Accordion>
        );
      });

      return jsx;
    } else {
      return null;
    }
  };

  return (
    <div>
      {data.categories.map((category) => {
        return (
          <Accordion key={category.id} {...category} availability={category.isAvailable}>
            {subCategoriesJsx(category)}
          </Accordion>
        );
      })}

    </div>
  );
};

export default AccordionContainer;
