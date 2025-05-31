# Healthy Life | BMI & Health Dashboard

A modern, professional health dashboard web app for calculating BMI and other key health metrics. Built with HTML, TailwindCSS, and JavaScript.

## Features
- **Login system** (Demo/dome)
- **BMI calculation** and category
- **Recommended daily calories** (BMR-based)
- **Recommended water intake**
- **Recommended protein intake**
- **BMR (Basal Metabolic Rate)**
- **Estimated Body Fat %**
- Modern, minimal, healthcare-inspired UI
- Unit tested health calculation functions (Jest)

## Getting Started

### 1. Clone or Download
```
git clone <repo-url>
cd GitHubCopilotTest
```

### 2. Run Locally
Just open `index.html` in your browser. No build step required.

### 3. Run Unit Tests
Requires Node.js and npm.

Install dependencies (if not done):
```
npm install
```

Run tests:
```
npm test
```

## Project Structure
```
index.html        # Main web app UI
main.js           # All logic and calculation functions
main.test.js      # Jest unit tests for all health functions
package.json      # Project metadata and test scripts
```

## Health Calculation Formulas
- **BMI:** `weight / (height_m^2)`
- **BMR:** Mifflin-St Jeor Equation
- **Calories:** `BMR * 1.55` (moderate activity)
- **Water Intake:** `weight * 0.03` (liters)
- **Protein Intake:** `weight * 1.2` (grams)
- **Body Fat %:** (BMI-based estimate)

## License
MIT
