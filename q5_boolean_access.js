// Q5. Boolean Logic Access System
// Smart home security system using Boolean logic

console.log("=== Boolean Logic Access System ===\n");

// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check security status
function checkSecurity(
  doorLocked,
  windowClosed,
  alarmOn,
  ownerInside
) {
  const isSecure =
    alarmOn && doorLocked && windowClosed && ownerInside;

  console.log(`Door Locked: ${doorLocked ? "✅ Yes" : "❌ No"}`);
  console.log(`Window Closed: ${windowClosed ? "✅ Yes" : "❌ No"}`);
  console.log(`Alarm On: ${alarmOn ? "✅ Yes" : "❌ No"}`);
  console.log(`Owner Inside: ${ownerInside ? "✅ Yes" : "❌ No"}`);
  console.log(
    `\nSecurity Status: ${isSecure ? "🔒 SECURE" : "🚨 UNSAFE"}`
  );

  return isSecure;
}

// Test Case 1: All conditions met
console.log("--- Test Case 1: All Conditions Met ---");
checkSecurity(true, true, true, true);

// Test Case 2: Door unlocked
console.log("\n--- Test Case 2: Door Unlocked ---");
checkSecurity(false, true, true, true);

// Test Case 3: Window open
console.log("\n--- Test Case 3: Window Open ---");
checkSecurity(true, false, true, true);

// Test Case 4: Alarm off
console.log("\n--- Test Case 4: Alarm Off ---");
checkSecurity(true, true, false, true);

// Test Case 5: Owner outside
console.log("\n--- Test Case 5: Owner Outside ---");
checkSecurity(true, true, true, false);

// Test Case 6: Multiple failures
console.log("\n--- Test Case 6: Door Unlocked & Alarm Off ---");
checkSecurity(false, true, false, true);

// Advanced boolean logic scenarios
console.log("\n=== Advanced Security Scenarios ===");

function advancedSecurityCheck(door, window, alarm, owner, guest) {
  // Secure if: (alarm is on AND door/window closed) OR (owner inside)
  // BUT if guest is present, additional conditions apply
  let status;

  if (guest) {
    // Guest present: stricter rules
    status =
      alarm && door && window && owner
        ? "SECURE with Guest"
        : "RESTRICTED - Guest present";
  } else {
    // Normal security rules
    status = (alarm && door && window) || owner
      ? "SECURE"
      : "UNSAFE";
  }

  console.log(`Door: ${door}, Window: ${window}, Alarm: ${alarm}, Owner: ${owner}, Guest: ${guest}`);
  console.log(`Status: ${status}\n`);
}

console.log("Scenario 1: Owner Inside, No Guest");
advancedSecurityCheck(true, true, true, true, false);

console.log("Scenario 2: Owner Inside, Guest Present");
advancedSecurityCheck(true, true, true, true, true);

console.log("Scenario 3: Door Open, Owner Outside, Guest Present");
advancedSecurityCheck(false, true, true, false, true);

// Using NOT operator (!)
console.log("\n=== Using NOT Operator (!) ===");
const alarm = true;
const door = false;

console.log(`!alarm = ${!alarm} (NOT true = false)`);
console.log(`!door = ${!door} (NOT false = true)`);
console.log(`Both secure? ${!alarm && !door ? "No" : "Requires checking"}`);
