const epleyFormula = (reps, weight) => {
    let result = weight * (1 + reps / 30);
    return Number(result.toFixed(1));
}

const brzyckiFormula = (reps, weight) => {
    let result = weight * (36 / (37 - reps));
    return Number(result.toFixed(1));
}

const calcOneRM = (reps, weight) => {
    if (reps > 1) {
        if (reps <= 8) {
            return brzyckiFormula(reps, weight);
        } else {
            return epleyFormula(reps, weight);
        }
    } else {
        return new Error('Provide more than 1 set!');
    }
}

module.exports = {
    calcOneRM,
};