
const fs = require('fs');
const check = require('../utils/check');


// Main function, using imported "check" module to validate Resource field in AWS::IAM::Role Policy json data.
// json data are being read from "rolePolicy.json" file.

(async () => {

    const policyFile = 'src/rolePolicy.json';

    try {

        // Importing and parsing json AWS::IAM::Role Policy data
        const data = fs.readFileSync(policyFile, 'utf8');
        const jsonData = JSON.parse(data);

        // Using "check" module
        if (check(jsonData)) {
            console.log("Returned: True");
            return true;
        } else {
            console.log("Returned: False");
            return false;
        }

    } catch (error) {
        console.log(`There was an error: ${error}`);
    }

})();



