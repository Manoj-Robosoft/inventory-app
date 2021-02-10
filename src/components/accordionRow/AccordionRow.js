import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../../store/actions/actions";
import "./AccordionRow.css";
import editIcon from "./edit.svg";

const AccordionRow = (props) => {
  const {
    name,
    color,
    options,
    sku_id,
    quantity: initialQuantity,
    subCategoryId,
  } = props;
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [quantityCheckbox, setQuantityCheckbox] = useState(
    initialQuantity.toLowerCase() === "unlimited"
  );
  const [quantityError, setQuantityError] = useState("");

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setQuantityCheckbox(false);
    setQuantityError("");
  };

  const checkNumber = (e) => {
    const charCode = e.charCode;
    const isNumber = charCode >= 48 && charCode <= 57;

    if (!isNumber) {
      e.preventDefault();
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;

    setQuantityCheckbox(checked);

    if (checked) {
      setQuantity("");
      setQuantityError("");
    }
  };

  const handleSaveClick = () => {
    if (quantity || quantityCheckbox) {
      if (quantityCheckbox) {
        setQuantity("Unlimited");
        // Dispatch an action to update store
        dispatch(
          updateItemQuantity({
            itemId: sku_id,
            subCategoryId,
            quantity: "Unlimited",
          })
        );
      } else {
        // Dispatch an action to update store
        dispatch(
          updateItemQuantity({
            itemId: sku_id,
            subCategoryId,
            quantity,
          })
        );
      }
      setEdit(false);
      setQuantityError("");
    } else {
      setQuantityError(
        "Please enter either the valid quantity or select unlimited"
      );
    }
  };

  const quantityEditJsx = (
    <div className="quantity__edit-container">
      <div className="quantity-text-input">
        <input
          type="text"
          value={quantity.toLowerCase() === "unlimited" ? "" : quantity}
          onKeyPress={checkNumber}
          onChange={handleQuantityChange}
          placeholder="Enter Value"
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={quantityCheckbox}
          onChange={handleCheckboxChange}
        />
        <span className="editText">Unlimited</span>
      </div>
    </div>
  );

  const saveButton = (
    <div>
      <button className="accordion__save-btn" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );

  return (
    <div className="accordion__items-container">
      <ul className="accordion__row">
        <li className="accordion__row-item">{name}</li>
        <li className="accordion__row-item">{color}</li>
        <li className="accordion__row-item">{options}</li>
        <li className="accordion__row-item skuId">{sku_id}</li>
        <li className="accordion__row-item quantity">
          {edit ? quantityEditJsx : quantity}
          {quantityError && (
            <span className="quantity-error">{quantityError}</span>
          )}
        </li>
        <li className="accordion__row-item edit">
          {edit ? (
            saveButton
          ) : (
            <img src={editIcon} alt="edit" onClick={handleEditClick} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default AccordionRow;
