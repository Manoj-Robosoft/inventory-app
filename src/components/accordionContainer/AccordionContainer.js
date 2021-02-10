import React from "react";
import { connect } from "react-redux";
import "./AccordionContainer.css";

import Accordion from "../accordion/Accordion";
import AccordionRow from "../accordionRow/AccordionRow";

const AccordionContainer = (props) => {
  const { categories, subCategories } = props;

  const itemsJsx = (items = [], subCategoryId) =>
    items.map((item, index) => (
      <AccordionRow key={index} {...item} subCategoryId={subCategoryId} />
    ));

  const subCategoriesJsx = (category) => {
    const { subCategoryIds } = category;
    if (subCategoryIds && subCategoryIds.length > 0) {
      const jsx = category.subCategoryIds.map((subCategoryId) => {
        // Find the data for sub category
        const subCategory = subCategories.find(
          (subCategory) => subCategory.id === subCategoryId
        );

        const { id, title = "", items = [] } = subCategory;

        return (
          <Accordion
            key={id}
            title={title}
            subAccordion
            availability={items.length > 0}
          >
            {itemsJsx(items, id)}
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
      {categories.map((category, index) => {
        return (
          <Accordion
            key={category.id}
            {...category}
            availability={category.isAvailable}
            activeAccordion={index === 0}
          >
            {subCategoriesJsx(category)}
          </Accordion>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    subCategories: state.subCategories,
  };
};

export default connect(mapStateToProps)(AccordionContainer);
