// Simple error handler to capture and log browser errors
const setupErrorLogging = () => {
  // Keep track of errors
  window.appErrors = [];

  // Global error handler
  window.addEventListener("error", (event) => {
    const error = {
      message: event.message,
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error?.stack || "No stack trace",
      timestamp: new Date().toISOString(),
    };

    console.error("Application Error:", error);
    window.appErrors.push(error);

    // Display a visible error in the UI for debugging
    const errorContainer = document.createElement("div");
    errorContainer.style.position = "fixed";
    errorContainer.style.top = "0";
    errorContainer.style.left = "0";
    errorContainer.style.right = "0";
    errorContainer.style.backgroundColor = "#ff5252";
    errorContainer.style.color = "white";
    errorContainer.style.padding = "10px";
    errorContainer.style.zIndex = "9999";
    errorContainer.style.fontFamily = "monospace";
    errorContainer.style.fontSize = "12px";
    errorContainer.style.whiteSpace = "pre-wrap";
    errorContainer.textContent = `Error: ${event.message}\nAt: ${
      event.filename
    }:${event.lineno}\n${event.error?.stack || ""}`;

    document.body.appendChild(errorContainer);

    return false; // Let the error propagate
  });

  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    const error = {
      message: event.reason?.message || "Unhandled Promise Rejection",
      stack: event.reason?.stack || "No stack trace",
      timestamp: new Date().toISOString(),
    };

    console.error("Unhandled Promise Rejection:", error);
    window.appErrors.push(error);

    // Display a visible error in the UI for debugging
    const errorContainer = document.createElement("div");
    errorContainer.style.position = "fixed";
    errorContainer.style.top = "0";
    errorContainer.style.left = "0";
    errorContainer.style.right = "0";
    errorContainer.style.backgroundColor = "#ff9800";
    errorContainer.style.color = "white";
    errorContainer.style.padding = "10px";
    errorContainer.style.zIndex = "9999";
    errorContainer.style.fontFamily = "monospace";
    errorContainer.style.fontSize = "12px";
    errorContainer.style.whiteSpace = "pre-wrap";
    errorContainer.textContent = `Promise Rejection: ${error.message}\n${error.stack}`;

    document.body.appendChild(errorContainer);
  });

  console.log("Error handler initialized");
};

export default setupErrorLogging;
