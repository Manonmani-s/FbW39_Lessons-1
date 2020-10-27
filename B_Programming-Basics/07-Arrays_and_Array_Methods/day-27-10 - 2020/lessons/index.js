/*------ array.filter()-----*/
/**
 * The filter() method creates a new array with all elements that pass the filter implemented by the provided function.
 */

function mask(element) {
    if (element != 'COVID-19') {
        return element;
    }
}

function legalMask(element) {
    if (element != 'Marijuana') {
        return element;
    }
}


const airContent = ['O2', 'CO2', 'COVID-19', 'Marijuana', 'dust', 'smoke'];

const healthyAir = airContent.filter(mask);

console.log(healthyAir);
console.log(airContent);


// define a filter to return a legalAir which dosen't include marijuana


const legalAir = airContent.filter(function (item) {
    if (item != 'Marijuana') {
        return item;
    }
});
console.log(legalAir);
