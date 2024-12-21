export const sortedByField = (array, field, order = 'asc') => {
    const sortedArray = array.toSorted((a, b) => {
       return a[field].toLowerCase().localeCompare(b[field], undefined, { sensitivity: 'base'})
    });
    return order === 'desc' ? sortedArray.toReversed() : sortedArray;
};



export const sortedByNumber = (array, field, order = 'asc') => {
    const sortedArray = array.toSorted((a, b) => a[field] - b[field]);
    return order === 'desc' ? sortedArray.toReversed() : sortedArray;
};


//note to self - localCompare() options - undefined or local, sensitivity:base - ignores accents and case
//.toSorted and tpReversed - older browsers might not support!







