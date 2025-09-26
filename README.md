# 🏦 Loan Approval Prediction using Decision Trees and Random Forests

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-Latest-orange.svg)](https://scikit-learn.org/stable/)
[![Pandas](https://img.shields.io/badge/Pandas-Latest-green.svg)](https://pandas.pydata.org/)

## 📋 Project Overview

This project implements a machine learning solution for predicting loan approval status using both Decision Trees and Random Forest algorithms. The model helps in automating the loan approval process by analyzing various applicant features.

## 🎯 Features Used for Prediction

- Education Status
- Self Employment Status
- Income Details
- Credit Score
- Loan Amount
- Various Financial Metrics

## 🚀 Quick Start

### Prerequisites

```bash
pip install pandas numpy scikit-learn matplotlib seaborn joblib
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

## 📈 Sample Prediction

```python
# Sample input format
sample_input = [[2,0,0,9600000,29900000,12,778,2400000,17600000,22700000,8000000]]
prediction = model.predict(sample_input)
# Returns 1 for Approved, 0 for Not Approved
```

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

## 🌐 Web Interface Features

- **Interactive Form**: User-friendly interface for entering loan application details
- **Real-time Predictions**: Instant results from both ML models
- **Confidence Scores**: Shows prediction confidence percentages
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded results and animations
- **Model Comparison**: Side-by-side comparison of Decision Tree vs Random Forest

## 📝 Model Features Explanation

1. **Education Status** (Encoded):

   - Represents applicant's education level
   - Encoded numerically for model processing

2. **Self Employment** (Encoded):

   - Indicates if the applicant is self-employed
   - Binary encoding (0/1)

3. **Financial Metrics**:
   - Income details
   - Credit score
   - Loan amount requested
   - Various other financial indicators

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
