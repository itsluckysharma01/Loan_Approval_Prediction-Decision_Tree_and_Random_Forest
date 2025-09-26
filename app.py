from flask import Flask, request, render_template, jsonify
import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
import os

app = Flask(__name__)

# Load the trained models
try:
    dt_model = joblib.load('loan_approval_Decession_Tree_model.pkl')
    rf_model = joblib.load('loan_approval_Random_Forest_model.pkl')
    print("Models loaded successfully!")
except Exception as e:
    print(f"Error loading models: {e}")
    dt_model = None
    rf_model = None

# Initialize label encoders (these should match the ones used during training)
le_education = LabelEncoder()
le_self_employed = LabelEncoder()
le_loan_status = LabelEncoder()

# Fit the label encoders with the expected values
le_education.fit(['Graduate', 'Not Graduate'])
le_self_employed.fit(['Yes', 'No'])
le_loan_status.fit(['Approved', 'Rejected'])

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data
        data = request.get_json()
        print("Received data:", data)  # Debug print
        
        # Extract features from the form
        features = [
            int(data['education']),  # 0 for Graduate, 1 for Not Graduate
            int(data['self_employed']),  # 0 for No, 1 for Yes
            int(data['dependents']),
            float(data['applicant_income']),
            float(data['coapplicant_income']),
            float(data['loan_term']),
            float(data['credit_score']),
            float(data['loan_amount']),
            float(data['total_income']),
            float(data['income_loan_ratio']),
            float(data['credit_income_ratio'])
        ]
        
        print("Processed features:", features)  # Debug print
        
        # Convert to numpy array and reshape
        features_array = np.array(features).reshape(1, -1)
        
        # Make predictions using both models
        dt_prediction = dt_model.predict(features_array)[0] if dt_model else None
        rf_prediction = rf_model.predict(features_array)[0] if rf_model else None
        
        # Get prediction probabilities
        dt_proba = dt_model.predict_proba(features_array)[0] if dt_model else None
        rf_proba = rf_model.predict_proba(features_array)[0] if rf_model else None
        
        # Convert predictions to readable format
        dt_result = "Approved" if dt_prediction == 1 else "Rejected"
        rf_result = "Approved" if rf_prediction == 1 else "Rejected"
        
        # Calculate confidence scores
        dt_confidence = max(dt_proba) * 100 if dt_proba is not None else 0
        rf_confidence = max(rf_proba) * 100 if rf_proba is not None else 0
        
        return jsonify({
            'success': True,
            'decision_tree': {
                'prediction': dt_result,
                'confidence': round(dt_confidence, 2)
            },
            'random_forest': {
                'prediction': rf_result,
                'confidence': round(rf_confidence, 2)
            }
        })
        
    except Exception as e:
        print(f"Error in prediction: {str(e)}")  # Debug print
        import traceback
        traceback.print_exc()  # Print full traceback
        return jsonify({
            'success': False,
            'error': str(e)
        })

@app.route('/test')
def test():
    return jsonify({'status': 'Flask app is working!', 'models_loaded': dt_model is not None and rf_model is not None})

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)