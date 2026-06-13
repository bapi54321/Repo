/**
 * Test Suite for Advocate Application
 * Tests for Nisha Karim's Advocate App
 */

const Advocate = require('./advocate');

console.log('🧪 Running Advocate App Tests...\n');

// Test 1: Create Advocate
console.log('Test 1: Creating Advocate Instance');
const advocate = new Advocate('Nisha Karim');
console.log(`✅ Advocate created: ${advocate.name}\n`);

// Test 2: Add Advocacy
console.log('Test 2: Adding Advocacy Causes');
const advocacy1 = advocate.addAdvocacy('Environmental Protection', 'Combat climate change');
console.log(`✅ Added advocacy: "${advocacy1.cause}"\n`);

// Test 3: Get Advocacies
console.log('Test 3: Retrieving All Advocacies');
advocate.addAdvocacy('Education Access', 'Improve education');
advocate.addAdvocacy('Women Empowerment', 'Support women rights');
const advocacies = advocate.getAdvocacies();
console.log(`✅ Retrieved ${advocacies.length} advocacies\n`);

// Test 4: Get Advocacy by ID
console.log('Test 4: Getting Advocacy by ID');
const advocacy = advocate.getAdvocacyById(1);
console.log(`✅ Retrieved advocacy: "${advocacy.cause}"\n`);

// Test 5: Update Advocacy
console.log('Test 5: Updating Advocacy');
const updated = advocate.updateAdvocacy(1, { status: 'completed' });
console.log(`✅ Updated advocacy status to: "${updated.status}"\n`);

// Test 6: Remove Advocacy
console.log('Test 6: Removing Advocacy');
const removed = advocate.removeAdvocacy(3);
console.log(`✅ Removed advocacy: "${removed.cause}"\n`);

// Test 7: Get Advocate Info
console.log('Test 7: Getting Advocate Information');
const info = advocate.getInfo();
console.log(`✅ Advocate info retrieved:`);
console.log(`   Name: ${info.name}`);
console.log(`   Role: ${info.role}`);
console.log(`   Total Advocacies: ${info.totalAdvocacies}\n`);

// Test 8: Get Active Advocacies Count
console.log('Test 8: Getting Active Advocacies Count');
const activeCount = advocate.getActiveAdvocaciesCount();
console.log(`✅ Active advocacies: ${activeCount}\n`);

console.log('🎉 All tests completed successfully!\n');
