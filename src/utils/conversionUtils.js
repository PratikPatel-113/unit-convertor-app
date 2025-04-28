import conversionTypes from "../constants/conversionTypes";

export const convert = (value, from, to, type) => {
    if (!from || !to || !conversionTypes[type]) return 0;

    if (type === "temperature") {
        let celsius;
        if (from === "celsius") {
            celsius = value;
        } else if (from === "fahrenheit") {
            celsius = (value - 32) * (5 / 9);
        } else if (from === "kelvin") {
            celsius = value - 273.15;
        }

        if (to === "celsius") return celsius;
        if (to === "fahrenheit") return celsius * (9 / 5) + 32;
        if (to === "kelvin") return celsius + 273.15;
        return 0;
    }

    const fromFactor = conversionTypes[type]?.units[from]?.factor;
    const toFactor = conversionTypes[type]?.units[to]?.factor;

    if (fromFactor === undefined || toFactor === undefined) return 0;

    return (value * fromFactor) / toFactor;
};
