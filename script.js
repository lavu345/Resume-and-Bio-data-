document.getElementById("generatePdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Fetch data from form fields
  const b_name = document.getElementById("b_name").value;
  const b_dob = document.getElementById("b_dob").value;
  const b_email = document.getElementById("b_email").value;
  const b_phone = document.getElementById("b_phone").value;
  const b_address = document.getElementById("b_address").value;
  const b_interests = document.getElementById("b_interests").value;
  const b_hobbies = document.getElementById("b_hobbies").value;

  const r_education = document.getElementById("r_education").value;
  const r_experience = document.getElementById("r_experience").value;
  const r_skills = document.getElementById("r_skills").value;

  // Header Section
  doc.setFillColor(41, 128, 185);
  doc.rect(0, 0, 210, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text("Resume & Bio-data", 105, 25, null, null, "center");

  // Bio-data Section
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Bio-data", 105, 50, null, null, "center");

  let currentY = 60;
  const bioDataFields = [
    { label: "Name", value: b_name },
    { label: "Date of Birth", value: b_dob },
    { label: "Email", value: b_email },
    { label: "Phone", value: b_phone },
    { label: "Address", value: b_address },
    { label: "Interests", value: b_interests },
    { label: "Hobbies", value: b_hobbies },
  ];

  bioDataFields.forEach((field) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`• ${field.label}: ${field.value}`, 10, currentY); // Correct bullet syntax
    currentY += 10; // Adjust spacing
  });

  // Resume Section
  currentY += 10; // Small spacing before the next section
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Resume", 105, currentY, null, null, "center");

  currentY += 10;
  const resumeFields = [
    { label: "Education", value: r_education },
    { label: "Experience", value: r_experience },
    { label: "Skills", value: r_skills },
  ];

  resumeFields.forEach((field) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`• ${field.label}: ${field.value}`, 10, currentY); // Correct bullet syntax
    currentY += 10; // Adjust spacing
  });

  // Save the PDF
  doc.save("Resume_and_BioData.pdf");
});
