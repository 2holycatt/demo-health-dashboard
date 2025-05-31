// main.test.js - Unit tests for health calculation functions
const {
    calculateBMI,
    getBMICategory,
    getBMIAdvice,
    calculateBMR,
    calculateCalories,
    calculateWaterIntake,
    calculateProteinIntake,
    calculateBodyFat
} = require('./main');

describe('Health Calculation Functions', () => {
    test('calculateBMI returns correct BMI', () => {
        expect(calculateBMI(70, 170)).toBeCloseTo(24.22, 2);
        expect(calculateBMI(50, 160)).toBeCloseTo(19.53, 2);
        expect(calculateBMI(90, 180)).toBeCloseTo(27.78, 2);
    });

    test('getBMICategory returns correct category', () => {
        expect(getBMICategory(17)).toBe('Underweight');
        expect(getBMICategory(22)).toBe('Normal weight');
        expect(getBMICategory(27)).toBe('Overweight');
        expect(getBMICategory(32)).toBe('Obesity');
    });

    test('getBMIAdvice returns correct advice', () => {
        expect(getBMIAdvice(17)).toMatch(/nutritious/);
        expect(getBMIAdvice(22)).toMatch(/Maintain/);
        expect(getBMIAdvice(27)).toMatch(/sugary/);
        expect(getBMIAdvice(32)).toMatch(/professional/);
    });

    test('calculateBMR returns correct BMR for male', () => {
        expect(Math.round(calculateBMR(70, 170, 25, 'male'))).toBe(1643);
    });
    test('calculateBMR returns correct BMR for female', () => {
        expect(Math.round(calculateBMR(70, 170, 25, 'female'))).toBe(1477);
    });

    test('calculateCalories returns correct calories', () => {
        expect(calculateCalories(1500)).toBe(2325);
    });

    test('calculateWaterIntake returns correct liters', () => {
        expect(calculateWaterIntake(70)).toBe('2.10');
        expect(calculateWaterIntake(50)).toBe('1.50');
    });

    test('calculateProteinIntake returns correct grams', () => {
        expect(calculateProteinIntake(70)).toBe(84);
        expect(calculateProteinIntake(50)).toBe(60);
    });

    test('calculateBodyFat returns correct % for male', () => {
        expect(calculateBodyFat(24.22, 25, 'male')).toBe('18.6');
    });
    test('calculateBodyFat returns correct % for female', () => {
        expect(calculateBodyFat(24.22, 25, 'female')).toBe('29.4');
    });
});
