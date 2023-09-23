// Define a function called compactObject that takes an object 'obj' as input.
var compactObject = function(obj) {
    // Check if 'obj' is null; if so, return null.
    if(obj === null) {
        return null;
    }
    // Check if 'obj' is an array; if so, filter out falsy values and recursively call compactObject on each element.
    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }
    // Check if 'obj' is not an object (e.g., a primitive value like a number or string); if so, return 'obj' as is.
    if (typeof obj !== "object") {
        return obj;
    }

    // Create a new object to store the compacted properties.
    const compacted = {};
    // Iterate through all the properties (keys) of the input object.
    for (const key in obj) {
        // Recursively call compactObject on the property's value.
        let value = compactObject(obj[key]);
        // Check if the value is truthy (not null, undefined, or false) before adding it to the compacted object.
        if (Boolean(value)) {
            compacted[key] = value;
        }
    }
    // Return the compacted object.
    return compacted;
};
