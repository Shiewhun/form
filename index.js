// Create the form dynamically using JavaScript
document.body.innerHTML = `
  <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
    <div id="form-container" style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); width: 400px;">
      <h2 style="text-align: center; margin-bottom: 20px;">Partner Criteria Form</h2>
      <form id="criteriaForm">
        <label>Is your age between 38-44?</label>
        <select id="ageRange" required style="width: 100%; padding: 10px; margin-bottom: 15px;">
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Are you a Christian in mind, soul, and body?</label>
        <select id="christian" required style="width: 100%; padding: 10px; margin-bottom: 15px;">
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Are you ready for a serious relationship?</label>
        <select id="seriousRelationship" required style="width: 100%; padding: 10px; margin-bottom: 15px;">
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Are you caring, loving, and generous?</label>
        <select id="caregiver" required style="width: 100%; padding: 10px; margin-bottom: 15px;">
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Do you not smoke or drink?</label>
        <select id="nonSmoker" required style="width: 100%; padding: 10px; margin-bottom: 15px;">
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit" style="width: 100%; padding: 12px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">Submit</button>
      </form>
    </div>

    <!-- Modal for thank you message -->
    <div id="thankYouModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); align-items: center; justify-content: center;">
      <div style="background-color: #fff; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
        <h3 style="color: #4CAF50;">Thank You for Submitting!</h3>
        <p>We'll get back to you shortly.</p>
        <button onclick="closeModal()" style="background-color: #4CAF50; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; margin-top: 20px;">Close</button>
      </div>
    </div>
  </div>
`;

// JavaScript to handle form submission and display the pop-up
document.getElementById('criteriaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show the modal
  document.getElementById('thankYouModal').style.display = 'flex';

  // Reset the form after submission
  e.target.reset();
});

// Function to close the modal
function closeModal() {
  document.getElementById('thankYouModal').style.display = 'none';
}
