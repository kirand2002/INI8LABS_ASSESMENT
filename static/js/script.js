
const API_URL = "http://127.0.0.1:8000/api/registrations/";

// Load users on page load
window.onload = function () {
  loadUsers();
};

// Load and display all users
async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    const tableBody = document.querySelector("#userTable tbody");
    tableBody.innerHTML = "";

    users.forEach(function (user) {
      const row = document.createElement("tr");

      row.innerHTML =
        "<td>" + user.name + "</td>" +
        "<td>" + user.email + "</td>" +
        "<td>" + user.date_of_birth + "</td>" +
        "<td>" + (user.phone || "-") + "</td>" +
        "<td>" + formatDate(user.created_at) + "</td>" +
        "<td class='actions'>" +
          "<button class='edit' onclick=\"editUser(" + user.id + ",'" + user.name + "','" + user.email + "','" + user.date_of_birth + "','" + (user.phone || "") + "')\">Edit</button> " +
          "<button class='delete' onclick=\"deleteUser(" + user.id + ")\">Delete</button>" +
        "</td>";

      tableBody.appendChild(row);
    });
  } catch (error) {
    alert("Failed to load users: " + error.message);
  }
}

// Form submit - Create or Update
document.getElementById("registrationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;

  const userData = {
    name: name,
    email: email,
    date_of_birth: dob,
    phone: phone
  };

  const url = userId ? `${API_URL}${userId}/` : API_URL;
  const method = userId ? "PUT" : "POST";

  try {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(JSON.stringify(err));
    }

    alert("User saved successfully!");
    clearForm();
    await loadUsers();
  } catch (error) {
    alert("Error saving user: " + error.message);
  }
});

// Fill form for editing
function editUser(id, name, email, dob, phone) {
  document.getElementById("userId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("dob").value = dob;
  document.getElementById("phone").value = phone || "";
}

// Delete a user
async function deleteUser(id) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    const response = await fetch(`${API_URL}${id}/`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete user.");
    }
    await loadUsers();
  } catch (error) {
    alert("Error deleting user: " + error.message);
  }
}

// Format created_at datetime
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString(); // e.g., "4/9/2025, 5:23:12 PM"
}

// Clear form
function clearForm() {
  document.getElementById("registrationForm").reset();
  document.getElementById("userId").value = "";
}
