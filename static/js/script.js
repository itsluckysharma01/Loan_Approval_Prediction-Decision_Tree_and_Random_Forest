// Global function to handle prediction
async function handlePrediction() {
  console.log("handlePrediction called");

  const form = document.getElementById("loanForm");
  const resultsContainer = document.getElementById("resultsContainer");
  const loadingOverlay = document.getElementById("loadingOverlay");

  if (!form || !resultsContainer || !loadingOverlay) {
    console.error("Required elements not found!");
    return;
  }

  // Show loading overlay
  loadingOverlay.style.display = "flex";

  // Get form data
  const formData = new FormData(form);
  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log("Form data:", data);

  // Validate required fields
  const requiredFields = [
    "education",
    "self_employed",
    "dependents",
    "applicant_income",
    "coapplicant_income",
    "loan_amount",
    "loan_term",
    "credit_score",
  ];
  for (let field of requiredFields) {
    if (!data[field] || data[field] === "") {
      loadingOverlay.style.display = "none";
      alert(`Please fill in the ${field.replace("_", " ")} field.`);
      return;
    }
  }

  // Calculate additional features
  const applicantIncome = parseFloat(data.applicant_income);
  const coapplicantIncome = parseFloat(data.coapplicant_income);
  const loanAmount = parseFloat(data.loan_amount);

  if (
    isNaN(applicantIncome) ||
    isNaN(coapplicantIncome) ||
    isNaN(loanAmount) ||
    loanAmount === 0
  ) {
    loadingOverlay.style.display = "none";
    alert(
      "Please ensure all income and loan amount fields contain valid numbers."
    );
    return;
  }

  data.total_income = applicantIncome + coapplicantIncome;
  data.income_loan_ratio = data.total_income / loanAmount;
  data.credit_income_ratio =
    (parseFloat(data.credit_score) / data.total_income) * 1000000;

  console.log("Processed data:", data);

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    loadingOverlay.style.display = "none";

    if (result.success) {
      displayResults(result);
    } else {
      console.error("Prediction error:", result.error);
      alert("Prediction error: " + result.error);
    }
  } catch (error) {
    loadingOverlay.style.display = "none";
    console.error("Network error:", error);
    alert("Network error: " + error.message);
  }
}

function displayResults(result) {
  const dtResult = document.getElementById("dtResult");
  const dtConfidence = document.getElementById("dtConfidence");
  const rfResult = document.getElementById("rfResult");
  const rfConfidence = document.getElementById("rfConfidence");
  const resultsContainer = document.getElementById("resultsContainer");

  dtResult.textContent = result.decision_tree.prediction;
  dtResult.className =
    "prediction-result " +
    (result.decision_tree.prediction === "Approved" ? "approved" : "rejected");
  dtConfidence.textContent = `Confidence: ${result.decision_tree.confidence}%`;

  rfResult.textContent = result.random_forest.prediction;
  rfResult.className =
    "prediction-result " +
    (result.random_forest.prediction === "Approved" ? "approved" : "rejected");
  rfConfidence.textContent = `Confidence: ${result.random_forest.confidence}%`;

  resultsContainer.style.display = "block";
  resultsContainer.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});
