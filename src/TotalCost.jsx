import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {

  const grandTotal =
    totalCosts.venue +
    totalCosts.av +
    totalCosts.meals;

  return (
    <div className="pricing-app">

      <div className="display_box">

        <div className="header">
          <h3>Total cost for the event</h3>
        </div>

        <h2
          id="pre_fee_cost_display"
          className="price"
        >
          ${grandTotal}
        </h2>

        <div>
          <p>Venue: ${totalCosts.venue}</p>
          <p>Add-ons: ${totalCosts.av}</p>
          <p>Meals: ${totalCosts.meals}</p>
        </div>

        <ItemsDisplay />

      </div>

    </div>
  );
};

export default TotalCost;
