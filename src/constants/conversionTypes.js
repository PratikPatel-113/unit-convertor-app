const conversionTypes = {
    length: {
        units: {
            meter: { label: "Meter", factor: 1 },
            kilometer: { label: "Kilometer", factor: 1000 },
            centimeter: { label: "Centimeter", factor: 0.01 },
            millimeter: { label: "Millimeter", factor: 0.001 },
            mile: { label: "Mile", factor: 1609.34 },
            yard: { label: "Yard", factor: 0.9144 },
            foot: { label: "Foot", factor: 0.3048 },
            inch: { label: "Inch", factor: 0.0254 },
        },
    },
    weight: {
        units: {
            kilogram: { label: "Kilogram", factor: 1 },
            gram: { label: "Gram", factor: 0.001 },
            milligram: { label: "Milligram", factor: 0.000001 },
            pound: { label: "Pound", factor: 0.453592 },
            ounce: { label: "Ounce", factor: 0.0283495 },
        },
    },
    volume: {
        units: {
            liter: { label: "Liter", factor: 1 },
            milliliter: { label: "Milliliter", factor: 0.001 },
            gallon: { label: "Gallon", factor: 3.78541 },
            quart: { label: "Quart", factor: 0.946353 },
            pint: { label: "Pint", factor: 0.473176 },
            cup: { label: "Cup", factor: 0.24 },
            fluid_ounce: { label: "Fluid Ounce", factor: 0.0295735 },
        },
    },
    temperature: {
        units: {
            celsius: { label: "Celsius" },
            fahrenheit: { label: "Fahrenheit" },
            kelvin: { label: "Kelvin" },
        },
    },
};

export default conversionTypes;
