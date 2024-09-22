const services = [
    "RAG: search for and chat with company documents",
    "Agents: give chatbots external tools and knowledge to help automate business processes",
    "Local deployment: securely communicate with AI on your own hardware",
    "Vision: leverage multimodal AI models for image and video analysis",
    "Voice: build voice activated agents and other applications"
];

function populateServices() {
    const scrollingText = document.querySelector('.scrolling-text');
    const servicesText = services.join(' • ');
    
    // Duplicate the text to ensure smooth looping
    scrollingText.textContent = servicesText + ' • ' + servicesText;
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateServices);