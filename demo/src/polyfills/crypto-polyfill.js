// Polyfill for crypto.hash used by Vite
// This is a pure JavaScript implementation that doesn't rely on crypto-browserify

// Simple string hashing function
function simpleHash(str, algorithm = "md5") {
  // Convert string to a simple numeric hash
  let hash = 0;

  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Convert the numeric hash to a byte array
  const hashBytes = new Uint8Array(16); // MD5-like length
  for (let i = 0; i < 16; i++) {
    hashBytes[i] = (hash >> (i * 8)) & 0xff;
  }

  return hashBytes;
}

// Create a mock crypto implementation that provides the hash method Vite needs
const mockCrypto = {
  // The hash method that Vite is looking for
  hash: (algorithm, data) => {
    // Convert data to string if it's not already
    const dataStr = typeof data === "string" ? data : JSON.stringify(data);
    return simpleHash(dataStr, algorithm);
  },
};

// Instead of modifying window.crypto directly (which is readonly),
// we'll create a proxy for node's crypto module
// that Vite can use when it tries to access crypto.hash

// Export our mock implementation
export default mockCrypto;

// Add a global constructor that Vite might be looking for
if (typeof globalThis !== "undefined") {
  globalThis._ViteCryptoPolyfill = mockCrypto;
}
