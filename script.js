
const sections = ['Code Documentation Example', 'Interactive Python Game', 'Electronics Vocabulary Quiz Game', '3D Model Showcase', 'Influential Scientist Essay', 'Circuit Tutorials', 'Radio and Transmitter Build Tutorials', 'Soldering Tutorial', 'Technical Cheat Sheets', 'Prompt Engineering Cheat Sheet', 'AI Use and Ethics Tutorial', 'Personal Statement'];

function showSection(index) {
    const content = document.getElementById("content");
    content.innerHTML = `<h2>${sections[index]}</h2><p>[Placeholder content for ${sections[index]}]</p>`;
}
