function copyCode() {
  const code = document.getElementById("refCode").innerText;
  navigator.clipboard.writeText(code);
  alert("Referral code copied: " + code);
}

function copyLink() {
  const link = document.getElementById("refLink").innerText;
  navigator.clipboard.writeText(link);
  alert("Referral link copied: " + link);
}