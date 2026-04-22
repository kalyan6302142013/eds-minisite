export default function decorate(block) {
  block.innerHTML = `
    <nav class="nav">
      <h2 class="logo">My EDS Site</h2>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#cards">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  `;
}