import React, { useState, useEffect } from "react";
import conversionTypes from "../constants/conversionTypes";
import { convert } from "../utils/conversionUtils";
import "../App.css";

const UnitConverter = () => {
    const availableTabs = Object.keys(conversionTypes);
    const [activeTab, setActiveTab] = useState(availableTabs[0]);
    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [fromValue, setFromValue] = useState("1");
    const [toValue, setToValue] = useState("");

    useEffect(() => {
        if (!conversionTypes[activeTab]) {
            setActiveTab(availableTabs[0]);
            return;
        }

        const units = Object.keys(conversionTypes[activeTab].units);

        if (units.length >= 2) {
            setFromUnit(units[0]);
            setToUnit(units[1]);
        } else if (units.length === 1) {
            setFromUnit(units[0]);
            setToUnit(units[0]);
        } else {
            setFromUnit("");
            setToUnit("");
        }

        setFromValue("1");
        setToValue("");
    }, [activeTab, availableTabs]);

    useEffect(() => {
        if (fromValue !== "" && fromUnit && toUnit && activeTab) {
            const result = convert(parseFloat(fromValue), fromUnit, toUnit, activeTab);
            setToValue(result);
        }
    }, [fromValue, fromUnit, toUnit, activeTab]);

    const handleFromValueChange = (e) => setFromValue(e.target.value);
    const handleFromUnitChange = (e) => setFromUnit(e.target.value);
    const handleToUnitChange = (e) => setToUnit(e.target.value);

    return (
        <div className="unit-converter">
            <h1 className="title">Unit Converter</h1>

            <div className="tabs">
                {availableTabs.map((type) => (
                    <button
                        key={type}
                        className={`tab ${activeTab === type ? "active" : ""}`}
                        onClick={() => setActiveTab(type)}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {conversionTypes[activeTab] && (
                <div className="converter">
                    <div className="input-group">
                        <input
                            type="number"
                            value={fromValue}
                            onChange={handleFromValueChange}
                        />
                        <select value={fromUnit} onChange={handleFromUnitChange}>
                            {Object.entries(conversionTypes[activeTab].units).map(([unit, data]) => (
                                <option key={unit} value={unit}>
                                    {data.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="equals">=</div>

                    <div className="input-group">
                        <input
                            type="text"
                            value={toValue}
                            disabled
                        />
                        <select value={toUnit} onChange={handleToUnitChange}>
                            {Object.entries(conversionTypes[activeTab].units).map(([unit, data]) => (
                                <option key={unit} value={unit}>
                                    {data.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnitConverter;
