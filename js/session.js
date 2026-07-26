function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("savedUsername");

  // Hard redirect (cannot be cached)
  window.location.replace("../Admin_log.html");
}
