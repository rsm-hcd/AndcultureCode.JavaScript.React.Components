// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Automatically binds all of an object's functions to itself
 * @param obj Object for which to bind
 */
const _bindAll = (obj: any) => {
    for (const key of Object.getOwnPropertyNames(obj.constructor.prototype)) {
        const val = obj[key];

        if (key !== "constructor" && typeof val === "function") {
            obj[key] = val.bind(obj);
        }
    }

    return obj;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const CoreUtils = {
    bindAll: _bindAll,
};

export { CoreUtils };

// #endregion Exports
