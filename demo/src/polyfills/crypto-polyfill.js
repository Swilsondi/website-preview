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

// Create a hash function for Node.js environment
function nodeHash(algorithm, data) {
  // Convert data to string if it's not already
  const dataStr = typeof data === "string" ? data : JSON.stringify(data);
  return simpleHash(dataStr, algorithm);
}

// Safely provide the hash method to the global crypto object for Node.js environment
if (typeof global !== "undefined" && global.crypto && !global.crypto.hash) {
  global.crypto.hash = nodeHash;
}

// Don't modify browser's crypto object as it's protected
// This polyfill is mainly for Node.js environment where Vite is running

export default {
  hash: nodeHash,
};
