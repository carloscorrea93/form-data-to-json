const formDataToJson = (formData) => {
    let object = {};
    try {
        formData.forEach((value, key) => {
                let pattern = /.*\[\]/g/**/;
                let isArrayValue = pattern.test(key);
                key = isArrayValue ? key.slice(0, -2) : key;
                value = isArrayValue ? [value] : value;
                object[key] = value
            }
        );
    } catch (e) {
        console.error(e);
    }
    return JSON.stringify(object);
};
export default formDataToJson;
