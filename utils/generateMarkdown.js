
//Function for the layout of the markdown
function generateMarkdown(input) {

    let markDown = 
    `  
    
    # ${input.ptitle}
    
    
    # Name
    
    ${input.name}
    
    
    
    # Github
    
    ${input.github}
    
    
    
    # Description
    
    ${input.description}
    
    # Sample
    
    
    # Table of Contents
     
    
    # License
    
    ${input.license}
    
    
    # Usage
    
    ${input.usage}
    
    
    # Credits
    
    ${input.credits}
    
    
    
    # How to Contribute
    
    ${input.contribute}
    `
    return markDown;
    }
    
    
    
    module.exports = generateMarkdown;