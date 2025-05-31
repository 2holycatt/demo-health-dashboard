// main.js - Health Dashboard Logic (Refactored)

// --- Login Logic ---
function validateLoginInput(username, password) {
    return {
        username: !!username,
        password: !!password
    };
}

function checkLogin(username, password) {
    return username === 'Demo' && password === 'dome';
}

function handleLoginSubmit(e) {
    e.preventDefault();
    hideLoginErrors();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const valid = validateLoginInput(username, password);
    let hasError = false;
    if (!valid.username) {
        document.getElementById('usernameError').classList.remove('hidden');
        hasError = true;
    }
    if (!valid.password) {
        document.getElementById('passwordError').classList.remove('hidden');
        hasError = true;
    }
    if (hasError) return;
    if (checkLogin(username, password)) {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('healthSection').classList.remove('hidden');
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
}

function hideLoginErrors() {
    document.getElementById('usernameError').classList.add('hidden');
    document.getElementById('passwordError').classList.add('hidden');
    document.getElementById('loginError').classList.add('hidden');
}

// --- Health Calculation Functions ---
function calculateBMI(weight, heightCm) {
    const heightM = heightCm / 100;
    return weight / (heightM * heightM);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
}

function getBMIAdvice(bmi) {
    if (bmi < 18.5) return 'Eat nutritious food, increase calorie intake, and exercise regularly to build muscle mass.';
    if (bmi < 24.9) return 'Maintain your healthy lifestyle with balanced diet and regular exercise!';
    if (bmi < 29.9) return 'Consider reducing sugary and fatty foods, and increase physical activity.';
    return 'Consult a healthcare professional for advice. Focus on a healthy diet and regular exercise.';
}

function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function calculateCalories(bmr) {
    return Math.round(bmr * 1.55); // moderate activity
}

function calculateWaterIntake(weight) {
    return (weight * 0.03).toFixed(2);
}

function calculateProteinIntake(weight) {
    return Math.round(weight * 1.2);
}

function calculateBodyFat(bmi, age, gender) {
    if (gender === 'male') {
        return (1.20 * bmi + 0.23 * age - 16.2).toFixed(1);
    } else {
        return (1.20 * bmi + 0.23 * age - 5.4).toFixed(1);
    }
}

function handleHealthFormSubmit(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    if (height > 0 && weight > 0 && age > 0) {
        const bmi = calculateBMI(weight, height);
        const bmiCategory = getBMICategory(bmi);
        const advice = getBMIAdvice(bmi);
        const bmr = calculateBMR(weight, height, age, gender);
        const calories = calculateCalories(bmr);
        const water = calculateWaterIntake(weight);
        const protein = calculateProteinIntake(weight);
        const bodyFat = calculateBodyFat(bmi, age, gender);
        // Show dashboard
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);
        document.getElementById('bmiCategory').textContent = bmiCategory;
        document.getElementById('caloriesValue').textContent = calories;
        document.getElementById('waterValue').textContent = water;
        document.getElementById('proteinValue').textContent = protein;
        document.getElementById('bmrValue').textContent = Math.round(bmr);
        document.getElementById('bodyFatValue').textContent = bodyFat + '%';
        document.getElementById('healthAdvice').textContent = advice;
        document.getElementById('dashboard').classList.remove('hidden');
    } else {
        document.getElementById('dashboard').classList.add('hidden');
        document.getElementById('healthAdvice').textContent = 'Please enter valid information.';
    }
}

// --- Event Listeners ---
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
        const healthForm = document.getElementById('healthForm');
        if (healthForm) healthForm.addEventListener('submit', handleHealthFormSubmit);
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateBMI,
        getBMICategory,
        getBMIAdvice,
        calculateBMR,
        calculateCalories,
        calculateWaterIntake,
        calculateProteinIntake,
        calculateBodyFat
    };
}
