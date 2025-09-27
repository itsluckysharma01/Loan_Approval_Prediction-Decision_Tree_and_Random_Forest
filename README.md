# 🏦 Loan Approval Prediction using Decision Trees and Random Forests

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-Latest-orange.svg)](https://scikit-learn.org/stable/)
[![Pandas](https://img.shields.io/badge/Pandas-Latest-green.svg)](https://pandas.pydata.org/)

## 📋 Project Overview

This project implements a machine learning solution for predicting loan approval status using both Decision Trees and Random Forest algorithms. The model helps in automating the loan approval process by analyzing various applicant features.

## ✨ Key Features

### 🎮 Interactive Web Application

- **Real-time Predictions**: Get instant loan approval predictions
- **Dual Model Analysis**: Compare Decision Tree vs Random Forest results
- **Smart Form Validation**: Real-time field validation and error handling
- **Responsive Design**: Works perfectly on all devices
- **Visual Feedback**: Loading animations, color-coded results, celebration effects

### 🎯 Machine Learning Features

- **Education Status**: Graduate vs Non-Graduate classification
- **Employment Status**: Self-employed vs Employed analysis
- **Financial Metrics**: Income, loan amount, credit score analysis
- **Risk Assessment**: Automated loan-to-income ratio calculations
- **Credit Analysis**: Credit score impact on approval probability
- **Multi-factor Analysis**: Comprehensive applicant profile evaluation

## 🚀 Quick Start

### 🎯 Interactive Web Demo (Recommended)

**One-Command Setup:**

```bash
git clone https://github.com/itsluckysharma01/Loan_Approval_Prediction-Decision_Tree_and_Random_Forest.git
cd Loan_Approval_Prediction-Decision_Tree_and_Random_Forest
pip install -r requirements.txt
python app.py
```

Then open `http://localhost:5000` and start predicting! 🎉

### Prerequisites

```bash
pip install flask pandas numpy scikit-learn matplotlib seaborn joblib
```

**Or install from requirements.txt:**

```bash
pip install -r requirements.txt
```

### 📊 Dataset

The dataset is sourced from a public repository and contains the following information:

- Applicant's education and employment details
- Financial information
- Credit scores
- Loan status (Approved/Not Approved)

### 💻 Usage

#### Option 1: Web Application (Recommended)

1. Clone the repository:

```bash
git clone https://github.com/itsluckysharma01/Loan_Approval_Prediction-Decision_Tree_and_Random_Forest.git
cd Loan_Approval_Prediction-Decision_Tree_and_Random_Forest
```

2. Run the Jupyter notebook first to train and save the models:

```bash
jupyter notebook Loan_Approval_Prediction-Decesion_Tree_and-Random_Forest.ipynb
```

3. Start the web application:

**Windows:**

```bash
run_app.bat
```

**Linux/Mac:**

```bash
chmod +x run_app.sh
./run_app.sh
```

4. Open your browser and go to: `http://localhost:5000`

### 🎮 Interactive Demo Usage

1. **Fill the Form**: Complete all required fields in the loan application form

   - Education Status: Select Graduate or Not Graduate
   - Self Employment: Choose Yes or No
   - Number of Dependents: Enter 0-10
   - Applicant Income: Enter your monthly income
   - Co-applicant Income: Enter co-applicant's monthly income (0 if none)
   - Loan Amount: Enter requested loan amount
   - Loan Term: Enter loan duration in months
   - Credit Score: Enter credit score (300-850)

2. **Get Predictions**: Click the "Predict Loan Approval" button

   - Watch the loading animation
   - View results from both models simultaneously
   - See confidence scores for each prediction

3. **Interactive Features**:
   - Form data persists after prediction
   - Real-time validation feedback
   - Smooth scrolling to results
   - Celebration effects for approvals

#### Option 2: Jupyter Notebook

```bash
jupyter notebook Loan_Approval_Prediction-Decesion_Tree_and-Random_Forest.ipynb
```

3. Load the saved models:

```python
import joblib

# Load Decision Tree Model
dt_model = joblib.load('loan_approval_Decession_Tree_model.pkl')

# Load Random Forest Model
rf_model = joblib.load('loan_approval_Random_Forest_model.pkl')
```

### 🔍 Model Performance

Both models achieved impressive results:

- Decision Tree Accuracy: 100%
- Random Forest Accuracy: 100%

## 📈 Sample Predictions

### Web Interface Example

Try these sample inputs in the web interface:

**Example 1: High Approval Probability**

- Education: Graduate
- Self Employed: No
- Dependents: 1
- Applicant Income: $5,000
- Co-applicant Income: $2,000
- Loan Amount: $150,000
- Loan Term: 360 months
- Credit Score: 750

**Example 2: Low Approval Probability**

- Education: Not Graduate
- Self Employed: Yes
- Dependents: 3
- Applicant Income: $2,000
- Co-applicant Income: $0
- Loan Amount: $300,000
- Loan Term: 120 months
- Credit Score: 400

### Programmatic Usage

```python
# Sample input format for direct model usage
sample_input = [[0,0,1,5000,2000,360,750,150000,7000,0.047,107.14]]
dt_prediction = dt_model.predict(sample_input)
rf_prediction = rf_model.predict(sample_input)
# Returns 1 for Approved, 0 for Not Approved
```

## 🎬 Demo Features

### 🌟 Interactive Highlights

- **🔄 Real-time Processing**: See predictions update instantly
- **📊 Dual Model Comparison**: Decision Tree vs Random Forest side-by-side
- **🎯 Confidence Metrics**: Percentage confidence for each prediction
- **🎉 Success Celebrations**: Confetti animation for loan approvals
- **📱 Mobile Responsive**: Full functionality on all devices
- **🎨 Modern UI/UX**: Beautiful gradient design with smooth animations

## 🛠️ Project Structure

```
├── 📁 templates/
│   ├── index.html                    # Main web interface
│   └── about.html                    # About page
├── 📁 static/
│   ├── 📁 css/
│   │   └── style.css                 # Styling
│   └── 📁 js/
│       └── script.js                 # Frontend logic
├── app.py                            # Flask web application
├── requirements.txt                  # Python dependencies
├── run_app.bat                       # Windows startup script
├── run_app.sh                        # Linux/Mac startup script
├── Loan_Approval_Prediction-Decesion_Tree_and-Random_Forest.ipynb
├── loan_approval_Decession_Tree_model.pkl
├── loan_approval_Random_Forest_model.pkl
└── README.md
```

## 🌐 Interactive Web Interface Features

### 🎮 User Experience

- **Interactive Form**: User-friendly interface with real-time validation
- **Smart Form Handling**: Form data persists during predictions (no clearing on submit)
- **Real-time Predictions**: Instant results from both ML models simultaneously
- **Loading Animations**: Visual feedback with spinner during processing
- **Confidence Scores**: Shows prediction confidence percentages for both models
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded results (Green for Approved, Red for Rejected)
- **Celebration Effects**: Confetti animation when both models approve the loan
- **Model Comparison**: Side-by-side comparison of Decision Tree vs Random Forest predictions

### 🔧 Technical Features

- **Error Handling**: Comprehensive client and server-side error handling
- **Form Validation**: Real-time validation of all required fields
- **AJAX Integration**: Asynchronous requests without page refresh
- **Debug Console**: Detailed logging for troubleshooting
- **Cross-browser Compatibility**: Works on all modern browsers
- **Mobile-first Design**: Touch-friendly interface for mobile devices

### 🎯 Interactive Elements

- **Hover Effects**: Interactive buttons and form elements
- **Smooth Scrolling**: Automatic scroll to results section
- **Dynamic Content**: Results update without page reload
- **Visual Indicators**: Loading states and progress feedback

## � Troubleshooting

### Common Issues and Solutions

#### Prediction Button Not Working

- **Issue**: Button clears form instead of making predictions
- **Solution**: Ensure JavaScript is enabled and check browser console for errors
- **Fixed**: Latest version uses improved button handling with `type="button"` and direct function calls

#### Form Validation Errors

- **Issue**: "Please fill in required fields" message
- **Solution**: Ensure all fields have valid values:
  - Numbers should be positive
  - Select dropdowns should have selections
  - All required fields must be completed

#### Network Errors

- **Issue**: "Network error" message appears
- **Solution**:
  - Check if Flask server is running on port 5000
  - Verify models are loaded successfully (check console)
  - Ensure all dependencies are installed

#### Browser Compatibility

- **Recommended Browsers**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **JavaScript Required**: Modern ES6+ features used

### Debug Mode

Enable debug logging by opening browser console (F12) to see:

- Form data processing
- API request/response details
- Error messages and stack traces

## �📝 Model Features Explanation

1. **Education Status** (Encoded):

   - Represents applicant's education level
   - Encoded numerically for model processing
   - Graduate (0) vs Not Graduate (1)

2. **Self Employment** (Encoded):

   - Indicates if the applicant is self-employed
   - Binary encoding: No (0), Yes (1)

3. **Financial Metrics**:
   - **Applicant Income**: Primary applicant's monthly income
   - **Co-applicant Income**: Secondary applicant's income (if any)
   - **Total Income**: Calculated sum of both incomes
   - **Credit Score**: Credit worthiness score (300-850)
   - **Loan Amount**: Requested loan amount
   - **Loan Term**: Duration in months
   - **Income-to-Loan Ratio**: Calculated financial metric
   - **Credit-to-Income Ratio**: Risk assessment metric

## 🤝 Contributing

Feel free to contribute to this project:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📫 Contact

- Lucky Sharma
- GitHub: [@itsluckysharma01](https://github.com/itsluckysharma01)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

### 🌟 Star this repository if you find it helpful!
