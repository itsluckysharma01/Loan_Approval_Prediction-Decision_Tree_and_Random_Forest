document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loanForm');
    const resultsContainer = document.getElementById('resultsContainer');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading overlay
        loadingOverlay.style.display = 'flex';
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        
        // Convert form data to object
        for (let [key, value] = formData.entries()) {
            data[key] = value;
        }
        
        // Calculate additional features
        const applicantIncome = parseFloat(data.applicant_income);
        const coapplicantIncome = parseFloat(data.coapplicant_income);
        const loanAmount = parseFloat(data.loan_amount);
        
        data.total_income = applicantIncome + coapplicantIncome;
        data.income_loan_ratio = data.total_income / loanAmount;
        data.credit_income_ratio = parseFloat(data.credit_score) / data.total_income * 1000000; // Adjust scale
        
        console.log('Form data being sent:', data); // Debug log
        
        try {
            // Send prediction request
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            // Hide loading overlay
            loadingOverlay.style.display = 'none';
            
            if (result.success) {
                displayResults(result);
            } else {
                console.error('Prediction error:', result.error);
                showError(result.error);
            }
            
        } catch (error) {
            // Hide loading overlay
            loadingOverlay.style.display = 'none';
            console.error('Network error:', error);
            showError('Network error: ' + error.message);
        }
    });

    // Display results function
    function displayResults(result) {
        const dtResult = document.getElementById('dtResult');
        const dtConfidence = document.getElementById('dtConfidence');
        const rfResult = document.getElementById('rfResult');
        const rfConfidence = document.getElementById('rfConfidence');

        // Decision Tree Results
        dtResult.textContent = result.decision_tree.prediction;
        dtResult.className = 'prediction-result ' + 
            (result.decision_tree.prediction === 'Approved' ? 'approved' : 'rejected');
        dtConfidence.textContent = `Confidence: ${result.decision_tree.confidence}%`;

        // Random Forest Results
        rfResult.textContent = result.random_forest.prediction;
        rfResult.className = 'prediction-result ' + 
            (result.random_forest.prediction === 'Approved' ? 'approved' : 'rejected');
        rfConfidence.textContent = `Confidence: ${result.random_forest.confidence}%`;

        // Show results container
        resultsContainer.style.display = 'block';
        resultsContainer.scrollIntoView({ behavior: 'smooth' });

        // Add celebration effect if both models approve
        if (result.decision_tree.prediction === 'Approved' && 
            result.random_forest.prediction === 'Approved') {
            createCelebration();
        }
    }

    // Show error function
    function showError(message) {
        console.error('Error:', message);
        
        // Create a more user-friendly error display
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4757;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-family: 'Poppins', sans-serif;
            max-width: 400px;
        `;
        errorDiv.innerHTML = `
            <strong>Error:</strong> ${message}
            <br><small>Check the console for more details</small>
        `;
        
        document.body.appendChild(errorDiv);
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Create celebration effect
    function createCelebration() {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    }

    // Create confetti particle
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1001';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotateX(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotateX(360deg)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }

    // Get random color for confetti
    function getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Input validation and formatting
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Remove any non-numeric characters except decimal point
            this.value = this.value.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = this.value.split('.');
            if (parts.length > 2) {
                this.value = parts[0] + '.' + parts.slice(1).join('');
            }
        });

        // Format numbers with commas for better readability
        input.addEventListener('blur', function() {
            if (this.value && !isNaN(this.value)) {
                const value = parseFloat(this.value);
                if (this.step === '1000' || this.step === '10000') {
                    // Don't format these as they might be large numbers
                    this.value = value.toString();
                }
            }
        });
    });

    // Add hover effects to form elements
    const formElements = document.querySelectorAll('input, select');
    formElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to predict button
    const predictBtn = document.querySelector('.predict-btn');
    predictBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});