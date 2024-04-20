
module.exports = (jsonData) => {

    try {

        const statements = jsonData.PolicyDocument.Statement;

        // Extracting Resource field from each statement in json file
        for(const statement of statements) {
            const resource = statement.Resource;

        // Checking whether Resource field(s) meets the conditions from task
            if (Array.isArray(resource)){
                for (const element of resource) {
                    if (element == '*') {
                        return false;
                    }
                }

            } else if (resource == '*') {
                    return false;
            }
        }

        return true;

      } catch (err) {
        console.error('There was an error in check module:', err);
        return false;
      }
}
