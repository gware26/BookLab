
// Current language (default: English)
let currentLanguage = "en";

// ... your existing data ...

// Mock data for books
let books = [
  {
    id: 1,
    title: "Fikir Eske Mekabir",
    author: "Haddis Alemayehu",
    category: "Fiction",
    price: 350,
    stock: 45,
    status: "In Stock",
    language: "am",
    description: "A classic Amharic novel about love, tradition, and society.",
    cover: "https://via.placeholder.com/50x70/4a90e2/ffffff?text=FE",
  },
  {
    id: 2,
    title: "Yeዘርያስ ትዕዛዝ",
    author: "ሃዋሳ ገብረ መድህን",
    category: "Fiction",
    price: 280,
    stock: 32,
    status: "In Stock",
    language: "am",
    description: "Amharic fiction exploring Ethiopian traditions.",
    cover: "https://via.placeholder.com/50x70/2ecc71/ffffff?text=YZ",
  },
  {
    id: 3,
    title: "Introduction to Programming",
    author: "John Doe",
    category: "Technology",
    price: 550,
    stock: 15,
    status: "Low Stock",
    language: "en",
    description: "Learn programming basics with practical examples.",
    cover: "https://via.placeholder.com/50x70/e74c3c/ffffff?text=IT",
  },
  {
    id: 4,
    title: "Ethiopian History: A Comprehensive Guide",
    author: "Dr. Selamawi Alemu",
    category: "History",
    price: 420,
    stock: 0,
    status: "Out of Stock",
    language: "en",
    description: "Detailed history of Ethiopia from ancient to modern times.",
    cover: "https://via.placeholder.com/50x70/f39c12/ffffff?text=EH",
  },
  {
    id: 5,
    title: "ሰው እንደ ሰው",
    author: "ብርሃኑ ገብረ ክርስቶስ",
    category: "Non-Fiction",
    price: 320,
    stock: 28,
    status: "In Stock",
    language: "am",
    description: "Amharic non-fiction about human nature and society.",
    cover: "https://via.placeholder.com/50x70/9b59b6/ffffff?text=SE",
  },
];

// Mock data for orders
let orders = [
  {
    id: "ORD-1001",
    customer: "Abebe Kebede",
    books: ["Fikir Eske Mekabir", "Introduction to Programming"],
    amount: 900,
    status: "Delivered",
    date: "2023-10-15",
    customerEmail: "abebe@example.com",
  },
  {
    id: "ORD-1002",
    customer: "Selamawit Assefa",
    books: ["Yeዘርያስ ትዕዛዝ"],
    amount: 280,
    status: "Processing",
    date: "2023-10-18",
    customerEmail: "selam@example.com",
  },
  {
    id: "ORD-1003",
    customer: "Michael Johnson",
    books: [
      "Ethiopian History: A Comprehensive Guide",
      "Introduction to Programming",
    ],
    amount: 970,
    status: "Shipped",
    date: "2023-10-20",
    customerEmail: "michael@example.com",
  },
  {
    id: "ORD-1004",
    customer: "የሻም መኮንን",
    books: ["ሰው እንደ ሰው", "Yeዘርያስ ትዕዛዝ"],
    amount: 600,
    status: "Pending",
    date: "2023-10-22",
    customerEmail: "yesham@example.com",
  },
  {
    id: "ORD-1005",
    customer: "Tigist Worku",
    books: ["Fikir Eske Mekabir"],
    amount: 350,
    status: "Delivered",
    date: "2023-10-25",
    customerEmail: "tigist@example.com",
  },
];

// Mock data for users
let users = [
  {
    id: 1,
    name: "Abebe Kebede",
    email: "abebe@example.com",
    role: "Customer",
    joinDate: "2023-09-10",
    status: "Active",
    lastLogin: "2023-10-25",
    totalOrders: 5,
    totalSpent: 3200,
  },
  {
    id: 2,
    name: "Selamawit Assefa",
    email: "selam@example.com",
    role: "Customer",
    joinDate: "2023-09-15",
    status: "Active",
    lastLogin: "2023-10-24",
    totalOrders: 3,
    totalSpent: 1560,
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "Customer",
    joinDate: "2023-09-20",
    status: "Active",
    lastLogin: "2023-10-23",
    totalOrders: 2,
    totalSpent: 970,
  },
  {
    id: 4,
    name: "የሻም መኮንን",
    email: "yesham@example.com",
    role: "Customer",
    joinDate: "2023-10-01",
    status: "Active",
    lastLogin: "2023-10-22",
    totalOrders: 1,
    totalSpent: 600,
  },
  {
    id: 5,
    name: "Tigist Worku",
    email: "tigist@example.com",
    role: "Customer",
    joinDate: "2023-10-05",
    status: "Active",
    lastLogin: "2023-10-25",
    totalOrders: 1,
    totalSpent: 350,
  },
  {
    id: 6,
    name: "Admin User",
    email: "admin@ethiopianbooks.com",
    role: "Admin",
    joinDate: "2023-08-01",
    status: "Active",
    lastLogin: "2023-10-25",
    totalOrders: 0,
    totalSpent: 0,
  },
];

// Mock data for reviews
let reviews = [
  {
    id: 1,
    bookId: 1,
    bookTitle: "Fikir Eske Mekabir",
    userId: 1,
    userName: "Abebe Kebede",
    rating: 5,
    comment: "Excellent book! A classic that every Ethiopian should read.",
    date: "2023-10-10",
    status: "Approved",
  },
  {
    id: 2,
    bookId: 2,
    bookTitle: "Yeዘርያስ ትዕዛዝ",
    userId: 2,
    userName: "Selamawit Assefa",
    rating: 4,
    comment: "Very good book, but the ending was abrupt.",
    date: "2023-10-12",
    status: "Approved",
  },
  {
    id: 3,
    bookId: 3,
    bookTitle: "Introduction to Programming",
    userId: 3,
    userName: "Michael Johnson",
    rating: 5,
    comment: "Great for beginners. Clear explanations and examples.",
    date: "2023-10-15",
    status: "Pending",
  },
  {
    id: 4,
    bookId: 1,
    bookTitle: "Fikir Eske Mekabir",
    userId: 4,
    userName: "የሻም መኮንን",
    rating: 3,
    comment: "It was okay, but I expected more from such a famous book.",
    date: "2023-10-18",
    status: "Approved",
  },
  {
    id: 5,
    bookId: 5,
    bookTitle: "ሰው እንደ ሰው",
    userId: 5,
    userName: "Tigist Worku",
    rating: 4,
    comment: "A very insightful book about human nature.",
    date: "2023-10-20",
    status: "Pending",
  },
  {
    id: 6,
    bookId: 2,
    bookTitle: "Yeዘርያስ ትዕዛዝ",
    userId: 1,
    userName: "Abebe Kebede",
    rating: 2,
    comment: "Didn't like the writing style. Hard to follow.",
    date: "2023-10-22",
    status: "Rejected",
  },
];

// Language translations
const translations = {
  en: {
    // Dashboard
    dashboardTitle: "Dashboard Overview",
    dashboardDesc:
      "Welcome back! Here's what's happening with your bookstore today.",
    totalBooksLabel: "Total Books",
    totalOrdersLabel: "Total Orders",
    totalUsersLabel: "Registered Users",
    totalRevenueLabel: "Total Revenue",
    fromLastMonth: "from last month",
    fromLastWeek: "from last week",
    newToday: "new today",
    fromLastMonthRev: "from last month",
    recentOrdersTitle: "Recent Orders",
    viewAllOrders: "View All Orders",
    recentBooksTitle: "Recent Books Added",
    addNewBookBtn: "Add New Book",
    orderIdCol: "Order ID",
    customerCol: "Customer",
    booksCol: "Books",
    amountCol: "Amount",
    statusCol: "Status",
    dateCol: "Date",
    actionsCol: "Actions",
    idCol: "ID",
    titleCol: "Title",
    authorCol: "Author",
    priceCol: "Price",
    stockCol: "Stock",
    statusCol2: "Status",
    actionsCol2: "Actions",

    // Books Management
    booksMgmtTitle: "Books Management",
    booksMgmtDesc:
      "Manage your bookstore inventory, add new books, and update existing ones.",
    addNewBookBtn2: "Add New Book",
    idCol2: "ID",
    coverCol: "Cover",
    titleCol2: "Title",
    authorCol2: "Author",
    categoryCol: "Category",
    priceCol2: "Price",
    stockCol2: "Stock",
    statusCol3: "Status",
    actionsCol3: "Actions",

    // Orders Management
    ordersMgmtTitle: "Orders Management",
    ordersMgmtDesc:
      "View and manage customer orders, update status, and process refunds.",
    allOrdersTitle: "All Orders",
    orderIdCol2: "Order ID",
    customerCol2: "Customer",
    booksCol2: "Books",
    amountCol2: "Amount",
    statusCol4: "Status",
    dateCol2: "Date",
    actionsCol4: "Actions",

    // Users Management
    usersMgmtTitle: "Users Management",
    usersMgmtDesc: "Manage registered users, view details, and manage roles.",
    allUsersTitle: "All Users",
    userIdCol: "ID",
    userNameCol: "Name",
    userEmailCol: "Email",
    userRoleCol: "Role",
    userJoinDateCol: "Join Date",
    userStatusCol: "Status",
    userActionsCol: "Actions",
    active: "Active",
    inactive: "Inactive",
    suspended: "Suspended",

    // Reviews Management
    reviewsMgmtTitle: "Reviews Management",
    reviewsMgmtDesc: "Manage book reviews, approve or delete user reviews.",
    allReviewsTitle: "All Reviews",
    reviewIdCol: "ID",
    reviewBookCol: "Book",
    reviewUserCol: "User",
    reviewRatingCol: "Rating",
    reviewCommentCol: "Comment",
    reviewDateCol: "Date",
    reviewStatusCol2: "Status",
    reviewActionsCol: "Actions",
    approved: "Approved",
    pending: "Pending",
    rejected: "Rejected",

    // Settings
    settingsTitle: "Settings",
    settingsDesc: "Configure your bookstore settings and preferences.",
    generalSettingsTitle: "General Settings",
    storeNameLabel: "Store Name",
    storeEmailLabel: "Store Email",
    currencyLabel: "Currency",
    timezoneLabel: "Timezone",
    languageLabel: "Default Language",
    saveSettingsBtn: "Save Settings",

    // Add Book Modal
    addBookTitle: "Add New Book",
    bookTitleLabel: "Book Title *",
    bookAuthorLabel: "Author *",
    bookPriceLabel: "Price (ብር) *",
    bookStockLabel: "Stock Quantity *",
    bookCategoryLabel: "Category",
    bookLanguageLabel: "Language",
    bookDescLabel: "Description",
    saveBookBtn: "Save Book",
    cancelBtn: "Cancel",

    // Actions
    editBtn: "Edit",
    deleteBtn: "Delete",
    viewBtn: "View",
    updateBtn: "Update",
    saveBtn: "Save",
    approveBtn: "Approve",
    rejectBtn: "Reject",
    viewDetailsBtn: "View Details",
    suspendBtn: "Suspend",
    activateBtn: "Activate",

    // Status
    inStock: "In Stock",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    pending: "Pending",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
    logoutBtn: "Logout",
  },
  am: {
    // Dashboard
    dashboardTitle: "ዳሽቦርድ አጠቃላይ እይታ",
    dashboardDesc: "እንኳን በደህና መጡ! ዛሬ በመጽሃፍ ሱቅዎ ላይ የሚከሰቱትን ነገሮች ይኸውና።",
    totalBooksLabel: "አጠቃላይ መጽሃፍት",
    totalOrdersLabel: "አጠቃላይ ትዕዛዞች",
    totalUsersLabel: "የተመዘገቡ ተጠቃሚዎች",
    totalRevenueLabel: "አጠቃላይ ገቢ",
    fromLastMonth: "ከባለፈው ወር",
    fromLastWeek: "ከባለፈው ሳምንት",
    newToday: "አዲስ ዛሬ",
    fromLastMonthRev: "ከባለፈው ወር",
    recentOrdersTitle: "የቅርብ ጊዜ ትዕዛዞች",
    viewAllOrders: "ሁሉንም ትዕዛዞች ይመልከቱ",
    recentBooksTitle: "የተጨመሩ የቅርብ ጊዜ መጽሃፍት",
    addNewBookBtn: "አዲስ መጽሃፍ ጨምር",
    orderIdCol: "የትዕዛዝ መታወቂያ",
    customerCol: "ደንበኛ",
    booksCol: "መጽሃፍት",
    amountCol: "መጠን",
    statusCol: "ሁኔታ",
    dateCol: "ቀን",
    actionsCol: "ድርጊቶች",
    idCol: "መታወቂያ",
    titleCol: "ርዕስ",
    authorCol: "ደራሲ",
    priceCol: "ዋጋ",
    stockCol: "ክምችት",
    statusCol2: "ሁኔታ",
    actionsCol2: "ድርጊቶች",

    // Books Management
    booksMgmtTitle: "የመጽሃፍት አስተዳደር",
    booksMgmtDesc: "የመጽሃፍ ሱቅዎን ክምችት ያስተዳድሩ፣ አዲስ መጽሃፍት ይጨምሩ እና ያሉትን ያዘምኑ።",
    addNewBookBtn2: "አዲስ መጽሃፍ ጨምር",
    idCol2: "መታወቂያ",
    coverCol: "ክፍል",
    titleCol2: "ርዕስ",
    authorCol2: "ደራሲ",
    categoryCol: "ምድብ",
    priceCol2: "ዋጋ",
    stockCol2: "ክምችት",
    statusCol3: "ሁኔታ",
    actionsCol3: "ድርጊቶች",

    // Orders Management
    ordersMgmtTitle: "የትዕዛዞች አስተዳደር",
    ordersMgmtDesc:
      "የደንበኞችን ትዕዛዞች ይመልከቱ እና ያስተዳድሩ፣ ሁኔታውን ያዘምኑ እና የተመለሱ ገንዘቦችን ያቀናብሩ።",
    allOrdersTitle: "ሁሉም ትዕዛዞች",
    orderIdCol2: "የትዕዛዝ መታወቂያ",
    customerCol2: "ደንበኛ",
    booksCol2: "መጽሃፍት",
    amountCol2: "መጠን",
    statusCol4: "ሁኔታ",
    dateCol2: "ቀን",
    actionsCol4: "ድርጊቶች",

    // Users Management
    usersMgmtTitle: "የተጠቃሚዎች አስተዳደር",
    usersMgmtDesc: "የተመዘገቡ ተጠቃሚዎችን ያስተዳድሩ፣ ዝርዝሮችን ይመልከቱ እና ሚናዎችን ያስተዳድሩ።",
    allUsersTitle: "ሁሉም ተጠቃሚዎች",
    userIdCol: "መታወቂያ",
    userNameCol: "ስም",
    userEmailCol: "ኢሜይል",
    userRoleCol: "ሚና",
    userJoinDateCol: "የተጠቃለለበት ቀን",
    userStatusCol: "ሁኔታ",
    userActionsCol: "ድርጊቶች",
    active: "ንቁ",
    inactive: "ንቁ ያልሆነ",
    suspended: "የተከለከለ",

    // Reviews Management
    reviewsMgmtTitle: "የአስተያየቶች አስተዳደር",
    reviewsMgmtDesc: "የመጽሃፍ አስተያየቶችን ያስተዳድሩ፣ የተጠቃሚ አስተያየቶችን ያረጋግጡ ወይም ይሰርዙ።",
    allReviewsTitle: "ሁሉም አስተያየቶች",
    reviewIdCol: "መታወቂያ",
    reviewBookCol: "መጽሃፍ",
    reviewUserCol: "ተጠቃሚ",
    reviewRatingCol: "ደረጃ",
    reviewCommentCol: "አስተያየት",
    reviewDateCol: "ቀን",
    reviewStatusCol2: "ሁኔታ",
    reviewActionsCol: "ድርጊቶች",
    approved: "የተጸድቀ",
    pending: "በመጠባበቅ ላይ",
    rejected: "የተቀባ",

    // Settings
    settingsTitle: "ቅንብሮች",
    settingsDesc: "የመጽሃፍ ሱቅዎን ቅንብሮች እና ምርጫዎች ያዋቅሩ።",
    generalSettingsTitle: "አጠቃላይ ቅንብሮች",
    storeNameLabel: "የሱቅ ስም",
    storeEmailLabel: "የሱቅ ኢሜይል",
    currencyLabel: "ምንዛሪ",
    timezoneLabel: "የጊዜ ሰውጣ",
    languageLabel: "ነባሪ ቋንቋ",
    saveSettingsBtn: "ቅንብሮችን አስቀምጥ",

    // Add Book Modal
    addBookTitle: "አዲስ መጽሃፍ ጨምር",
    bookTitleLabel: "የመጽሃፍ ርዕስ *",
    bookAuthorLabel: "ደራሲ *",
    bookPriceLabel: "ዋጋ (ብር) *",
    bookStockLabel: "የክምችት ብዛት *",
    bookCategoryLabel: "ምድብ",
    bookLanguageLabel: "ቋንቋ",
    bookDescLabel: "መግለጫ",
    saveBookBtn: "መጽሃፍን አስቀምጥ",
    cancelBtn: "ሰርዝ",

    // Actions
    editBtn: "አርትዕ",
    deleteBtn: "ሰርዝ",
    viewBtn: "ይመልከቱ",
    updateBtn: "አዘምን",
    saveBtn: "አስቀምጥ",
    approveBtn: "አጽድቅ",
    rejectBtn: "ተቀባ",
    viewDetailsBtn: "ዝርዝሮችን ይመልከቱ",
    suspendBtn: "አቁም",
    activateBtn: "አግብር",

    // Status
    inStock: "በክምችት ላይ",
    lowStock: "ክምችቱ እየጠፋ ነው",
    outOfStock: "ክምችቱ አልቋል",
    pending: "በመጠባበቅ ላይ",
    processing: "በሂደት ላይ",
    shipped: "ተልኳል",
    delivered: "ደርሷል",
    cancelled: "ተሰርዟል",
    logoutBtn: "ውጣ",
  },
};

// Session management variables
let lastActivity = Date.now();
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

// Initialize the admin panel when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // ===== AUTHENTICATION CHECK =====
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");

  // Only allow access if user is logged in AND is admin
  if (!isLoggedIn || userRole !== "admin") {
    // Redirect to login page
    window.location.href = "../Admin_log.html";
    return; // Stop execution
  }

  // Show welcome message with admin name
  const adminName = localStorage.getItem("userName") || "Admin";
  console.log(`Welcome, ${adminName}!`);

  // Display admin name in header
  const adminNameElement = document.getElementById("adminName");
  if (adminNameElement) {
    adminNameElement.textContent = adminName;
  }

  // ===== REST OF INITIALIZATION =====
  // Set default language from localStorage or browser preference
  const savedLanguage = localStorage.getItem("bookstoreAdminLanguage") || "en";
  changeLanguage(savedLanguage);
  document.getElementById("languageSelect").value = savedLanguage;

  // Load data from localStorage if available
  loadFromLocalStorage();

  // Show dashboard by default
  showPage("dashboard");

  // Initialize stats
  updateStats();

  // Render recent books and orders on dashboard
  renderRecentBooks();
  renderRecentOrders();

  // Render all books on books page
  renderAllBooks();

  // Render all orders on orders page
  renderAllOrders();

  // Render all users on users page
  renderAllUsers();

  // Render all reviews on reviews page
  renderAllReviews();

  // Load settings
  loadSettings();

  // Initialize session timeout
  initSessionTimeout();
});

// Initialize session timeout functionality
function initSessionTimeout() {
  // Reset activity timer on user interaction
  document.addEventListener("click", resetActivityTimer);
  document.addEventListener("keypress", resetActivityTimer);

  // Check session every minute
  setInterval(checkSession, 60000);
}

// Reset activity timer
function resetActivityTimer() {
  lastActivity = Date.now();
}

// Check session timeout
function checkSession() {
  const currentTime = Date.now();
  const timeSinceLastActivity = currentTime - lastActivity;

  if (timeSinceLastActivity > SESSION_TIMEOUT) {
    const timeoutMessage =
      currentLanguage === "en"
        ? "Your session has expired due to inactivity. Please login again."
        : "የእርስዎ ክፍለ ጊዜ በምንም እንቅስቃሴ ባለመኖሩ ጊዜው አልፎታል። እባክዎ እንደገና ይግቡ።";

    alert(timeoutMessage);
    performLogout();
  }
}

// Page navigation function
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
    page.classList.remove("active");
  });

  // Show the selected page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = "block";
    activePage.classList.add("active");
  }

  // Update active link in sidebar
  const links = document.querySelectorAll(".admin-nav a");
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${pageId}`) {
      link.classList.add("active");
    }
  });

  // If showing books page, refresh the books table
  if (pageId === "books") {
    renderAllBooks();
  }

  // If showing orders page, refresh the orders table
  if (pageId === "orders") {
    renderAllOrders();
  }

  // If showing users page, refresh the users table
  if (pageId === "users") {
    renderAllUsers();
  }

  // If showing reviews page, refresh the reviews table
  if (pageId === "reviews") {
    renderAllReviews();
  }
}

// Logout function
function logout() {
  const confirmMessage =
    currentLanguage === "en"
      ? "Are you sure you want to logout?"
      : "እርግጠኛ ነህ መውጣት ትፈልጋለህ?";

  if (confirm(confirmMessage)) {
    performLogout();
  }
}

// Perform logout (clears data and redirects)
function performLogout() {
  // Clear all authentication data
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  // Show logout message
  const logoutMessage =
    currentLanguage === "en"
      ? "Logged out successfully! Redirecting to login page..."
      : "በተሳካ ሁኔታ ወጥተሃል! ወደ መግቢያ ገጽ እየተዛወርን...";

  alert(logoutMessage);

  // Redirect to login page after a short delay
  setTimeout(() => {
    window.location.href = "../Admin_log.html";
  }, 1000);
}

// Change language function
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("bookstoreAdminLanguage", lang);

  // Update logout button text if it exists
  const logoutTextElement = document.getElementById("logoutText");
  if (logoutTextElement) {
    logoutTextElement.textContent = translations[lang].logoutBtn;
  }

  // Update page titles and descriptions
  document.getElementById("dashboardTitle").textContent =
    translations[lang].dashboardTitle;
  document.getElementById("dashboardDesc").textContent =
    translations[lang].dashboardDesc;
  document.getElementById("booksMgmtTitle").textContent =
    translations[lang].booksMgmtTitle;
  document.getElementById("booksMgmtDesc").textContent =
    translations[lang].booksMgmtDesc;
  document.getElementById("ordersMgmtTitle").textContent =
    translations[lang].ordersMgmtTitle;
  document.getElementById("ordersMgmtDesc").textContent =
    translations[lang].ordersMgmtDesc;
  document.getElementById("usersMgmtTitle").textContent =
    translations[lang].usersMgmtTitle;
  document.getElementById("usersMgmtDesc").textContent =
    translations[lang].usersMgmtDesc;
  document.getElementById("reviewsMgmtTitle").textContent =
    translations[lang].reviewsMgmtTitle;
  document.getElementById("reviewsMgmtDesc").textContent =
    translations[lang].reviewsMgmtDesc;
  document.getElementById("settingsTitle").textContent =
    translations[lang].settingsTitle;
  document.getElementById("settingsDesc").textContent =
    translations[lang].settingsDesc;

  // Update stats labels
  document.getElementById("totalBooksLabel").textContent =
    translations[lang].totalBooksLabel;
  document.getElementById("totalOrdersLabel").textContent =
    translations[lang].totalOrdersLabel;
  document.getElementById("totalUsersLabel").textContent =
    translations[lang].totalUsersLabel;
  document.getElementById("totalRevenueLabel").textContent =
    translations[lang].totalRevenueLabel;
  document.getElementById("fromLastMonth").textContent =
    translations[lang].fromLastMonth;
  document.getElementById("fromLastWeek").textContent =
    translations[lang].fromLastWeek;
  document.getElementById("newToday").textContent = translations[lang].newToday;
  document.getElementById("fromLastMonthRev").textContent =
    translations[lang].fromLastMonthRev;

  // Update table headers
  document.getElementById("recentOrdersTitle").textContent =
    translations[lang].recentOrdersTitle;
  document.getElementById("viewAllOrders").textContent =
    translations[lang].viewAllOrders;
  document.getElementById("recentBooksTitle").textContent =
    translations[lang].recentBooksTitle;
  document.getElementById("addNewBookBtn").textContent =
    translations[lang].addNewBookBtn;
  document.getElementById("orderIdCol").textContent =
    translations[lang].orderIdCol;
  document.getElementById("customerCol").textContent =
    translations[lang].customerCol;
  document.getElementById("booksCol").textContent = translations[lang].booksCol;
  document.getElementById("amountCol").textContent =
    translations[lang].amountCol;
  document.getElementById("statusCol").textContent =
    translations[lang].statusCol;
  document.getElementById("dateCol").textContent = translations[lang].dateCol;
  document.getElementById("actionsCol").textContent =
    translations[lang].actionsCol;
  document.getElementById("idCol").textContent = translations[lang].idCol;
  document.getElementById("titleCol").textContent = translations[lang].titleCol;
  document.getElementById("authorCol").textContent =
    translations[lang].authorCol;
  document.getElementById("priceCol").textContent = translations[lang].priceCol;
  document.getElementById("stockCol").textContent = translations[lang].stockCol;
  document.getElementById("statusCol2").textContent =
    translations[lang].statusCol2;
  document.getElementById("actionsCol2").textContent =
    translations[lang].actionsCol2;

  // Books management page
  document.getElementById("addNewBookBtn2").textContent =
    translations[lang].addNewBookBtn2;
  document.getElementById("idCol2").textContent = translations[lang].idCol2;
  document.getElementById("coverCol").textContent = translations[lang].coverCol;
  document.getElementById("titleCol2").textContent =
    translations[lang].titleCol2;
  document.getElementById("authorCol2").textContent =
    translations[lang].authorCol2;
  document.getElementById("categoryCol").textContent =
    translations[lang].categoryCol;
  document.getElementById("priceCol2").textContent =
    translations[lang].priceCol2;
  document.getElementById("stockCol2").textContent =
    translations[lang].stockCol2;
  document.getElementById("statusCol3").textContent =
    translations[lang].statusCol3;
  document.getElementById("actionsCol3").textContent =
    translations[lang].actionsCol3;

  // Orders management page
  document.getElementById("allOrdersTitle").textContent =
    translations[lang].allOrdersTitle;
  document.getElementById("orderIdCol2").textContent =
    translations[lang].orderIdCol2;
  document.getElementById("customerCol2").textContent =
    translations[lang].customerCol2;
  document.getElementById("booksCol2").textContent =
    translations[lang].booksCol2;
  document.getElementById("amountCol2").textContent =
    translations[lang].amountCol2;
  document.getElementById("statusCol4").textContent =
    translations[lang].statusCol4;
  document.getElementById("dateCol2").textContent = translations[lang].dateCol2;
  document.getElementById("actionsCol4").textContent =
    translations[lang].actionsCol4;

  // Users management page
  document.getElementById("allUsersTitle").textContent =
    translations[lang].allUsersTitle;
  document.getElementById("userIdCol").textContent =
    translations[lang].userIdCol;
  document.getElementById("userNameCol").textContent =
    translations[lang].userNameCol;
  document.getElementById("userEmailCol").textContent =
    translations[lang].userEmailCol;
  document.getElementById("userRoleCol").textContent =
    translations[lang].userRoleCol;
  document.getElementById("userJoinDateCol").textContent =
    translations[lang].userJoinDateCol;
  document.getElementById("userStatusCol").textContent =
    translations[lang].userStatusCol;
  document.getElementById("userActionsCol").textContent =
    translations[lang].userActionsCol;

  // Reviews management page
  document.getElementById("allReviewsTitle").textContent =
    translations[lang].allReviewsTitle;
  document.getElementById("reviewIdCol").textContent =
    translations[lang].reviewIdCol;
  document.getElementById("reviewBookCol").textContent =
    translations[lang].reviewBookCol;
  document.getElementById("reviewUserCol").textContent =
    translations[lang].reviewUserCol;
  document.getElementById("reviewRatingCol").textContent =
    translations[lang].reviewRatingCol;
  document.getElementById("reviewCommentCol").textContent =
    translations[lang].reviewCommentCol;
  document.getElementById("reviewDateCol").textContent =
    translations[lang].reviewDateCol;
  document.getElementById("reviewStatusCol2").textContent =
    translations[lang].reviewStatusCol2;
  document.getElementById("reviewActionsCol").textContent =
    translations[lang].reviewActionsCol;

  // Settings page
  document.getElementById("generalSettingsTitle").textContent =
    translations[lang].generalSettingsTitle;
  document.getElementById("storeNameLabel").textContent =
    translations[lang].storeNameLabel;
  document.getElementById("storeEmailLabel").textContent =
    translations[lang].storeEmailLabel;
  document.getElementById("currencyLabel").textContent =
    translations[lang].currencyLabel;
  document.getElementById("timezoneLabel").textContent =
    translations[lang].timezoneLabel;
  document.getElementById("languageLabel").textContent =
    translations[lang].languageLabel;
  document.getElementById("saveSettingsBtn").textContent =
    translations[lang].saveSettingsBtn;

  // Modal
  document.getElementById("addBookTitle").textContent =
    translations[lang].addBookTitle;
  document.getElementById("bookTitleLabel").textContent =
    translations[lang].bookTitleLabel;
  document.getElementById("bookAuthorLabel").textContent =
    translations[lang].bookAuthorLabel;
  document.getElementById("bookPriceLabel").textContent =
    translations[lang].bookPriceLabel;
  document.getElementById("bookStockLabel").textContent =
    translations[lang].bookStockLabel;
  document.getElementById("bookCategoryLabel").textContent =
    translations[lang].bookCategoryLabel;
  document.getElementById("bookLanguageLabel").textContent =
    translations[lang].bookLanguageLabel;
  document.getElementById("bookDescLabel").textContent =
    translations[lang].bookDescLabel;
  document.getElementById("saveBookBtn").textContent =
    translations[lang].saveBookBtn;
  document.getElementById("cancelBtn").textContent =
    translations[lang].cancelBtn;

  // Update button texts in tables (need to re-render tables)
  renderRecentBooks();
  renderRecentOrders();
  renderAllBooks();
  renderAllOrders();
  renderAllUsers();
  renderAllReviews();
}

// Update dashboard statistics
function updateStats() {
  // Calculate totals
  const totalBooks = books.length;
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

  // Calculate changes (mock data for demonstration)
  const booksChange = 12;
  const ordersChange = 8;
  const usersChange = 5;
  const revenueChange = 15;

  // Update DOM
  document.getElementById("totalBooks").textContent = totalBooks;
  document.getElementById("totalOrders").textContent = totalOrders;
  document.getElementById("totalUsers").textContent = totalUsers;
  document.getElementById(
    "totalRevenue"
  ).textContent = `${totalRevenue.toLocaleString()} ብር`;

  document.getElementById("booksChange").textContent = `${booksChange}%`;
  document.getElementById("ordersChange").textContent = `${ordersChange}%`;
  document.getElementById("usersChange").textContent = usersChange;
  document.getElementById("revenueChange").textContent = `${revenueChange}%`;
}

// Render recent books on dashboard
function renderRecentBooks() {
  const tbody = document.getElementById("recentBooksBody");
  tbody.innerHTML = "";

  // Get 5 most recent books (by ID as proxy for recency)
  const recentBooks = [...books].sort((a, b) => b.id - a.id).slice(0, 5);

  recentBooks.forEach((book) => {
    const row = document.createElement("tr");
    const statusClass =
      book.status === "In Stock"
        ? "status-success"
        : book.status === "Low Stock"
        ? "status-warning"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? book.status
        : book.status === "In Stock"
        ? translations.am.inStock
        : book.status === "Low Stock"
        ? translations.am.lowStock
        : translations.am.outOfStock;

    row.innerHTML = `
            <td>${book.id}</td>
            <td><strong>${book.title}</strong></td>
            <td>${book.author}</td>
            <td>${book.price} ብር</td>
            <td>${book.stock}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="editBook(${book.id})">
                    <i class="fas fa-edit"></i> ${translations[currentLanguage].editBtn}
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id})">
                    <i class="fas fa-trash"></i> ${translations[currentLanguage].deleteBtn}
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Render recent orders on dashboard
function renderRecentOrders() {
  const tbody = document.getElementById("ordersBody");
  tbody.innerHTML = "";

  // Get 5 most recent orders (by date)
  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  recentOrders.forEach((order) => {
    const row = document.createElement("tr");
    const statusClass =
      order.status === "Delivered"
        ? "status-success"
        : order.status === "Shipped"
        ? "status-info"
        : order.status === "Processing"
        ? "status-warning"
        : order.status === "Pending"
        ? "status-secondary"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? order.status
        : order.status === "Pending"
        ? translations.am.pending
        : order.status === "Processing"
        ? translations.am.processing
        : order.status === "Shipped"
        ? translations.am.shipped
        : order.status === "Delivered"
        ? translations.am.delivered
        : translations.am.cancelled;

    row.innerHTML = `
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.books.join(", ")}</td>
            <td>${order.amount} ብር</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>${order.date}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="viewOrder('${
                  order.id
                }')">
                    <i class="fas fa-eye"></i> ${
                      translations[currentLanguage].viewBtn
                    }
                </button>
                <button class="btn btn-sm btn-primary" onclick="updateOrderStatus('${
                  order.id
                }')">
                    <i class="fas fa-edit"></i> ${
                      translations[currentLanguage].updateBtn
                    }
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Render all books on books management page
function renderAllBooks() {
  const tbody = document.getElementById("booksBody");
  tbody.innerHTML = "";

  books.forEach((book) => {
    const row = document.createElement("tr");
    const statusClass =
      book.status === "In Stock"
        ? "status-success"
        : book.status === "Low Stock"
        ? "status-warning"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? book.status
        : book.status === "In Stock"
        ? translations.am.inStock
        : book.status === "Low Stock"
        ? translations.am.lowStock
        : translations.am.outOfStock;

    row.innerHTML = `
            <td>${book.id}</td>
            <td><img src="${book.cover}" alt="${book.title}" class="book-cover"></td>
            <td><strong>${book.title}</strong></td>
            <td>${book.author}</td>
            <td><span class="category-badge">${book.category}</span></td>
            <td>${book.price} ብር</td>
            <td>${book.stock}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="editBook(${book.id})">
                    <i class="fas fa-edit"></i> ${translations[currentLanguage].editBtn}
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id})">
                    <i class="fas fa-trash"></i> ${translations[currentLanguage].deleteBtn}
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Render all orders on orders management page
function renderAllOrders() {
  const tbody = document.getElementById("allOrdersBody");
  tbody.innerHTML = "";

  orders.forEach((order) => {
    const row = document.createElement("tr");
    const statusClass =
      order.status === "Delivered"
        ? "status-success"
        : order.status === "Shipped"
        ? "status-info"
        : order.status === "Processing"
        ? "status-warning"
        : order.status === "Pending"
        ? "status-secondary"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? order.status
        : order.status === "Pending"
        ? translations.am.pending
        : order.status === "Processing"
        ? translations.am.processing
        : order.status === "Shipped"
        ? translations.am.shipped
        : order.status === "Delivered"
        ? translations.am.delivered
        : translations.am.cancelled;

    row.innerHTML = `
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}<br><small>${order.customerEmail}</small></td>
            <td>${order.books.join(", ")}</td>
            <td>${order.amount} ብር</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>${order.date}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="viewOrder('${
                  order.id
                }')">
                    <i class="fas fa-eye"></i> ${
                      translations[currentLanguage].viewBtn
                    }
                </button>
                <button class="btn btn-sm btn-primary" onclick="updateOrderStatus('${
                  order.id
                }')">
                    <i class="fas fa-edit"></i> ${
                      translations[currentLanguage].updateBtn
                    }
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteOrder('${
                  order.id
                }')">
                    <i class="fas fa-trash"></i> ${
                      translations[currentLanguage].deleteBtn
                    }
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Render all users on users management page
function renderAllUsers() {
  const tbody = document.getElementById("usersBody");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");
    const statusClass =
      user.status === "Active"
        ? "status-success"
        : user.status === "Inactive"
        ? "status-secondary"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? user.status
        : user.status === "Active"
        ? translations.am.active
        : user.status === "Inactive"
        ? translations.am.inactive
        : translations.am.suspended;

    row.innerHTML = `
            <td>${user.id}</td>
            <td>
                <strong>${user.name}</strong>
                <small style="display: block; opacity: 0.8">Last login: ${
                  user.lastLogin
                }</small>
            </td>
            <td>${user.email}</td>
            <td><span class="role-badge">${user.role}</span></td>
            <td>${user.joinDate}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="viewUserDetails(${
                  user.id
                })">
                    <i class="fas fa-eye"></i> ${
                      translations[currentLanguage].viewDetailsBtn
                    }
                </button>
                ${
                  user.status === "Active"
                    ? `<button class="btn btn-sm btn-warning" onclick="suspendUser(${user.id})">
                        <i class="fas fa-ban"></i> ${translations[currentLanguage].suspendBtn}
                    </button>`
                    : `<button class="btn btn-sm btn-success" onclick="activateUser(${user.id})">
                        <i class="fas fa-check"></i> ${translations[currentLanguage].activateBtn}
                    </button>`
                }
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${
                  user.id
                })">
                    <i class="fas fa-trash"></i> ${
                      translations[currentLanguage].deleteBtn
                    }
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Render all reviews on reviews management page
function renderAllReviews() {
  const tbody = document.getElementById("reviewsBody");
  tbody.innerHTML = "";

  reviews.forEach((review) => {
    const row = document.createElement("tr");
    const statusClass =
      review.status === "Approved"
        ? "status-success"
        : review.status === "Pending"
        ? "status-warning"
        : "status-danger";
    const statusText =
      currentLanguage === "en"
        ? review.status
        : review.status === "Approved"
        ? translations.am.approved
        : review.status === "Pending"
        ? translations.am.pending
        : translations.am.rejected;

    // Create star rating display
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        stars += '<i class="fas fa-star" style="color: #f39c12;"></i>';
      } else {
        stars += '<i class="far fa-star" style="color: #ddd;"></i>';
      }
    }

    row.innerHTML = `
            <td>${review.id}</td>
            <td><strong>${review.bookTitle}</strong></td>
            <td>${review.userName}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 5px;">
                    ${stars}
                    <span style="margin-left: 5px;">(${review.rating}/5)</span>
                </div>
            </td>
            <td>${
              review.comment.length > 50
                ? review.comment.substring(0, 50) + "..."
                : review.comment
            }</td>
            <td>${review.date}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="viewReviewDetails(${
                  review.id
                })">
                    <i class="fas fa-eye"></i> ${
                      translations[currentLanguage].viewDetailsBtn
                    }
                </button>
                ${
                  review.status === "Pending"
                    ? `<button class="btn btn-sm btn-success" onclick="approveReview(${review.id})">
                        <i class="fas fa-check"></i> ${translations[currentLanguage].approveBtn}
                    </button>`
                    : ""
                }
                ${
                  review.status !== "Rejected"
                    ? `<button class="btn btn-sm btn-danger" onclick="rejectReview(${review.id})">
                        <i class="fas fa-times"></i> ${translations[currentLanguage].rejectBtn}
                    </button>`
                    : ""
                }
                <button class="btn btn-sm btn-danger" onclick="deleteReview(${
                  review.id
                })">
                    <i class="fas fa-trash"></i> ${
                      translations[currentLanguage].deleteBtn
                    }
                </button>
            </td>
        `;
    tbody.appendChild(row);
  });
}

// Show add book modal
function showAddBookModal() {
  const modal = document.getElementById("addBookModal");
  modal.style.display = "flex";

  // Reset form
  document.getElementById("bookForm").reset();
  document.getElementById("addBookTitle").textContent =
    translations[currentLanguage].addBookTitle;

  // Reset form submit handler
  document.getElementById("bookForm").onsubmit = function (e) {
    e.preventDefault();
    addBook(e);
  };

  // Reset save button text
  document.getElementById("saveBookBtn").textContent =
    translations[currentLanguage].saveBookBtn;
}

// Close modal
function closeModal() {
  const modal = document.getElementById("addBookModal");
  modal.style.display = "none";
}

// Add new book
function addBook(event) {
  event.preventDefault();

  // Get form values
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const price = parseFloat(document.getElementById("bookPrice").value);
  const stock = parseInt(document.getElementById("bookStock").value);
  const category = document.getElementById("bookCategory").value;
  const language = document.getElementById("bookLanguage").value;
  const description = document.getElementById("bookDescription").value;

  // Determine status based on stock
  let status = "In Stock";
  if (stock === 0) status = "Out of Stock";
  else if (stock < 10) status = "Low Stock";

  // Generate new ID
  const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

  // Create cover placeholder based on title
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
  const colors = ["4a90e2", "2ecc71", "e74c3c", "f39c12", "9b59b6"];
  const color = colors[newId % colors.length];

  // Create new book object
  const newBook = {
    id: newId,
    title,
    author,
    category,
    price,
    stock,
    status,
    language,
    description,
    cover: `https://via.placeholder.com/50x70/${color}/ffffff?text=${initials}`,
  };

  // Add to books array
  books.push(newBook);

  // Save to localStorage
  saveToLocalStorage();

  // Update UI
  renderRecentBooks();
  renderAllBooks();
  updateStats();

  // Close modal
  closeModal();

  // Show success message
  alert(
    currentLanguage === "en"
      ? `Book "${title}" added successfully!`
      : `"${title}" የተሰኘው መጽሃፍ በተሳካ ሁኔታ ጨምሯል!`
  );
}

// Edit book
function editBook(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  // Populate form with book data
  document.getElementById("bookTitle").value = book.title;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookPrice").value = book.price;
  document.getElementById("bookStock").value = book.stock;
  document.getElementById("bookCategory").value = book.category;
  document.getElementById("bookLanguage").value = book.language;
  document.getElementById("bookDescription").value = book.description;

  // Change modal title
  document.getElementById("addBookTitle").textContent =
    currentLanguage === "en" ? "Edit Book" : "መጽሃፍ አርትዕ";

  // Show modal
  const modal = document.getElementById("addBookModal");
  modal.style.display = "flex";

  // Change form submit to update instead of add
  const form = document.getElementById("bookForm");
  form.onsubmit = function (e) {
    e.preventDefault();
    updateBook(bookId);
  };

  // Change save button text
  document.getElementById("saveBookBtn").textContent =
    translations[currentLanguage].updateBtn;
}

// Update book
function updateBook(bookId) {
  // Get form values
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const price = parseFloat(document.getElementById("bookPrice").value);
  const stock = parseInt(document.getElementById("bookStock").value);
  const category = document.getElementById("bookCategory").value;
  const language = document.getElementById("bookLanguage").value;
  const description = document.getElementById("bookDescription").value;

  // Determine status based on stock
  let status = "In Stock";
  if (stock === 0) status = "Out of Stock";
  else if (stock < 10) status = "Low Stock";

  // Find book index
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex !== -1) {
    // Update book
    books[bookIndex] = {
      ...books[bookIndex],
      title,
      author,
      price,
      stock,
      category,
      language,
      description,
      status,
    };

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderRecentBooks();
    renderAllBooks();
    updateStats();

    // Close modal
    closeModal();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Book "${title}" updated successfully!`
        : `"${title}" የተሰኘው መጽሃፍ በተሳካ ሁኔታ ተዘምኗል!`
    );
  }

  // Reset form submit handler
  const form = document.getElementById("bookForm");
  form.onsubmit = function (e) {
    e.preventDefault();
    addBook(e);
  };

  // Reset save button text
  document.getElementById("saveBookBtn").textContent =
    translations[currentLanguage].saveBookBtn;
}

// Delete book
function deleteBook(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to delete "${book.title}"?`
      : `እርግጠኛ ነህ "${book.title}" መሰረዝ ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    // Remove book from array
    books = books.filter((b) => b.id !== bookId);

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderRecentBooks();
    renderAllBooks();
    updateStats();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Book "${book.title}" deleted successfully!`
        : `"${book.title}" የተሰኘው መጽሃፍ በተሳካ ሁኔታ ተሰርዟል!`
    );
  }
}

// View order details
function viewOrder(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (!order) return;

  const orderDetails =
    currentLanguage === "en"
      ? `
            Order ID: ${order.id}
            Customer: ${order.customer}
            Email: ${order.customerEmail}
            Books: ${order.books.join(", ")}
            Amount: ${order.amount} ብር
            Status: ${order.status}
            Date: ${order.date}
        `
      : `
            የትዕዛዝ መታወቂያ: ${order.id}
            ደንበኛ: ${order.customer}
            ኢሜይል: ${order.customerEmail}
            መጽሃፍት: ${order.books.join(", ")}
            መጠን: ${order.amount} ብር
            ሁኔታ: ${
              order.status === "Pending"
                ? translations.am.pending
                : order.status === "Processing"
                ? translations.am.processing
                : order.status === "Shipped"
                ? translations.am.shipped
                : order.status === "Delivered"
                ? translations.am.delivered
                : translations.am.cancelled
            }
            ቀን: ${order.date}
        `;

  alert(orderDetails);
}

// Update order status
function updateOrderStatus(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (!order) return;

  const statusOptions =
    currentLanguage === "en"
      ? ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]
      : [
          translations.am.pending,
          translations.am.processing,
          translations.am.shipped,
          translations.am.delivered,
          translations.am.cancelled,
        ];

  const currentStatusIndex = statusOptions.findIndex(
    (opt) =>
      opt === order.status ||
      (currentLanguage === "am" &&
        ((order.status === "Pending" && opt === translations.am.pending) ||
          (order.status === "Processing" &&
            opt === translations.am.processing) ||
          (order.status === "Shipped" && opt === translations.am.shipped) ||
          (order.status === "Delivered" && opt === translations.am.delivered) ||
          (order.status === "Cancelled" && opt === translations.am.cancelled)))
  );

  const newStatus = prompt(
    currentLanguage === "en"
      ? `Update order status for ${order.id}:\n\nCurrent: ${
          order.status
        }\n\nOptions: ${statusOptions.join(", ")}`
      : `ለ ${order.id} የትዕዛዝ ሁኔታ አዘምን:\n\nአሁን ያለው: ${
          order.status === "Pending"
            ? translations.am.pending
            : order.status === "Processing"
            ? translations.am.processing
            : order.status === "Shipped"
            ? translations.am.shipped
            : order.status === "Delivered"
            ? translations.am.delivered
            : translations.am.cancelled
        }\n\nምርጫዎች: ${statusOptions.join(", ")}`,
    statusOptions[currentStatusIndex]
  );

  if (newStatus && statusOptions.includes(newStatus)) {
    // Map back to English status if needed
    let englishStatus = newStatus;
    if (currentLanguage === "am") {
      if (newStatus === translations.am.pending) englishStatus = "Pending";
      else if (newStatus === translations.am.processing)
        englishStatus = "Processing";
      else if (newStatus === translations.am.shipped) englishStatus = "Shipped";
      else if (newStatus === translations.am.delivered)
        englishStatus = "Delivered";
      else if (newStatus === translations.am.cancelled)
        englishStatus = "Cancelled";
    }

    order.status = englishStatus;

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderRecentOrders();
    renderAllOrders();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Order status updated to ${englishStatus}!`
        : `የትዕዛዝ ሁኔታ ወደ ${newStatus} ተቀይሯል!`
    );
  } else if (newStatus) {
    alert(
      currentLanguage === "en"
        ? "Invalid status. Please enter one of the options shown."
        : "ልክ ያልሆነ ሁኔታ። ከቀረቡት ምርጫዎች ውስጥ አንዱን ያስገቡ።"
    );
  }
}

// Delete order
function deleteOrder(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (!order) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to delete order "${order.id}"?`
      : `እርግጠኛ ነህ ትዕዛዝ "${order.id}" መሰረዝ ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    // Remove order from array
    orders = orders.filter((o) => o.id !== orderId);

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderRecentOrders();
    renderAllOrders();
    updateStats();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Order "${order.id}" deleted successfully!`
        : `ትዕዛዝ "${order.id}" በተሳካ ሁኔታ ተሰርዟል!`
    );
  }
}

// View user details
function viewUserDetails(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  const userDetails =
    currentLanguage === "en"
      ? `
            User ID: ${user.id}
            Name: ${user.name}
            Email: ${user.email}
            Role: ${user.role}
            Status: ${user.status}
            Join Date: ${user.joinDate}
            Last Login: ${user.lastLogin}
            Total Orders: ${user.totalOrders}
            Total Spent: ${user.totalSpent} ብር
        `
      : `
            የተጠቃሚ መታወቂያ: ${user.id}
            ስም: ${user.name}
            ኢሜይል: ${user.email}
            ሚና: ${user.role}
            ሁኔታ: ${
              user.status === "Active"
                ? translations.am.active
                : user.status === "Inactive"
                ? translations.am.inactive
                : translations.am.suspended
            }
            የተጠቃለለበት ቀን: ${user.joinDate}
            የመጨረሻ መግቢያ: ${user.lastLogin}
            አጠቃላይ ትዕዛዞች: ${user.totalOrders}
            አጠቃላይ ወጪ: ${user.totalSpent} ብር
        `;

  alert(userDetails);
}

// Suspend user
function suspendUser(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to suspend user "${user.name}"?`
      : `እርግጠኛ ነህ ተጠቃሚ "${user.name}" ማቆም ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    user.status = "Suspended";

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllUsers();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `User "${user.name}" suspended successfully!`
        : `ተጠቃሚ "${user.name}" በተሳካ ሁኔታ ተቆሟል!`
    );
  }
}

// Activate user
function activateUser(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to activate user "${user.name}"?`
      : `እርግጠኛ ነህ ተጠቃሚ "${user.name}" ማግባት ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    user.status = "Active";

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllUsers();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `User "${user.name}" activated successfully!`
        : `ተጠቃሚ "${user.name}" በተሳካ ሁኔታ ተገብሯል!`
    );
  }
}

// Delete user
function deleteUser(userId) {
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to delete user "${user.name}"? This action cannot be undone.`
      : `እርግጠኛ ነህ ተጠቃሚ "${user.name}" መሰረዝ ትፈልጋለህ? ይህ ተግባር መመለስ አይችልም።`;

  if (confirm(confirmMessage)) {
    users = users.filter((u) => u.id !== userId);

    // Also delete user's reviews
    reviews = reviews.filter((r) => r.userId !== userId);

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllUsers();
    renderAllReviews();
    updateStats();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `User "${user.name}" deleted successfully!`
        : `ተጠቃሚ "${user.name}" በተሳካ ሁኔታ ተሰርዟል!`
    );
  }
}

// View review details
function viewReviewDetails(reviewId) {
  const review = reviews.find((r) => r.id === reviewId);
  if (!review) return;

  const reviewDetails =
    currentLanguage === "en"
      ? `
            Review ID: ${review.id}
            Book: ${review.bookTitle}
            User: ${review.userName}
            Rating: ${review.rating}/5
            Date: ${review.date}
            Status: ${review.status}
            Comment: ${review.comment}
        `
      : `
            የአስተያየት መታወቂያ: ${review.id}
            መጽሃፍ: ${review.bookTitle}
            ተጠቃሚ: ${review.userName}
            ደረጃ: ${review.rating}/5
            ቀን: ${review.date}
            ሁኔታ: ${
              review.status === "Approved"
                ? translations.am.approved
                : review.status === "Pending"
                ? translations.am.pending
                : translations.am.rejected
            }
            አስተያየት: ${review.comment}
        `;

  alert(reviewDetails);
}

// Approve review
function approveReview(reviewId) {
  const review = reviews.find((r) => r.id === reviewId);
  if (!review) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to approve this review?`
      : `እርግጠኛ ነህ ይህን አስተያየት ማጽደቅ ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    review.status = "Approved";

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllReviews();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Review approved successfully!`
        : `አስተያየቱ በተሳካ ሁኔታ ተጸድቋል!`
    );
  }
}

// Reject review
function rejectReview(reviewId) {
  const review = reviews.find((r) => r.id === reviewId);
  if (!review) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to reject this review?`
      : `እርግጠኛ ነህ ይህን አስተያየት ማገላበጥ ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    review.status = "Rejected";

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllReviews();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Review rejected successfully!`
        : `አስተያየቱ በተሳካ ሁኔታ ተቀባ!`
    );
  }
}

// Delete review
function deleteReview(reviewId) {
  const review = reviews.find((r) => r.id === reviewId);
  if (!review) return;

  const confirmMessage =
    currentLanguage === "en"
      ? `Are you sure you want to delete this review?`
      : `እርግጠኛ ነህ ይህን አስተያየት መሰረዝ ትፈልጋለህ?`;

  if (confirm(confirmMessage)) {
    reviews = reviews.filter((r) => r.id !== reviewId);

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderAllReviews();

    // Show success message
    alert(
      currentLanguage === "en"
        ? `Review deleted successfully!`
        : `አስተያየቱ በተሳካ ሁኔታ ተሰርዟል!`
    );
  }
}

// Search table function
function searchTable(tableId, query) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query.toLowerCase())) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Filter by category
function filterByCategory() {
  const filterValue = document.getElementById("categoryFilter").value;
  const rows = document.querySelectorAll("#booksBody tr");

  rows.forEach((row) => {
    const category = row.querySelector("td:nth-child(5)").textContent;
    if (!filterValue || category === filterValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Filter by status
function filterByStatus() {
  const filterValue = document.getElementById("statusFilter").value;
  const rows = document.querySelectorAll("#allOrdersBody tr");

  rows.forEach((row) => {
    const statusElement = row.querySelector("td:nth-child(5) span");
    const status = statusElement ? statusElement.textContent : "";
    if (!filterValue || status === filterValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Filter by role
function filterByRole() {
  const filterValue = document.getElementById("roleFilter").value;
  const rows = document.querySelectorAll("#usersBody tr");

  rows.forEach((row) => {
    const role = row.querySelector("td:nth-child(4) span").textContent;
    if (!filterValue || role === filterValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Filter by review status
function filterByReviewStatus() {
  const filterValue = document.getElementById("reviewStatusFilter").value;
  const rows = document.querySelectorAll("#reviewsBody tr");

  rows.forEach((row) => {
    const statusElement = row.querySelector("td:nth-child(7) span");
    const status = statusElement ? statusElement.textContent : "";
    if (!filterValue || status === filterValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Filter by rating
function filterByRating() {
  const filterValue = document.getElementById("ratingFilter").value;
  const rows = document.querySelectorAll("#reviewsBody tr");

  rows.forEach((row) => {
    const ratingText = row.querySelector("td:nth-child(4) span").textContent;
    const ratingMatch = ratingText.match(/\((\d+)\/5\)/);
    if (ratingMatch) {
      const rating = parseInt(ratingMatch[1]);
      if (!filterValue || rating == filterValue) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
}

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem("bookstoreAdminSettings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    document.getElementById("storeName").value =
      settings.storeName || "Ethiopian Bookstore";
    document.getElementById("storeEmail").value =
      settings.storeEmail || "contact@ethiopianbooks.com";
    document.getElementById("currency").value = settings.currency || "BIRR";
    document.getElementById("timezone").value =
      settings.timezone || "Africa/Addis_Ababa";
    document.getElementById("defaultLanguage").value =
      settings.defaultLanguage || "am";
  }
}

// Save settings to localStorage
function saveSettings() {
  const settings = {
    storeName: document.getElementById("storeName").value,
    storeEmail: document.getElementById("storeEmail").value,
    currency: document.getElementById("currency").value,
    timezone: document.getElementById("timezone").value,
    defaultLanguage: document.getElementById("defaultLanguage").value,
  };

  localStorage.setItem("bookstoreAdminSettings", JSON.stringify(settings));

  // Update language if changed
  if (settings.defaultLanguage !== currentLanguage) {
    changeLanguage(settings.defaultLanguage);
    document.getElementById("languageSelect").value = settings.defaultLanguage;
  }

  alert(
    currentLanguage === "en"
      ? "Settings saved successfully!"
      : "ቅንብሮች በተሳካ ሁኔታ ተቀምጠዋል!"
  );
}

// Save data to localStorage
function saveToLocalStorage() {
  const data = {
    books,
    orders,
    users,
    reviews,
  };

  localStorage.setItem("bookstoreAdminData", JSON.stringify(data));
}

// Load data from localStorage
function loadFromLocalStorage() {
  const savedData = localStorage.getItem("bookstoreAdminData");
  if (savedData) {
    const data = JSON.parse(savedData);
    books = data.books || books;
    orders = data.orders || orders;
    users = data.users || users;
    reviews = data.reviews || reviews;
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("addBookModal");
  if (event.target === modal) {
    closeModal();
  }
};
