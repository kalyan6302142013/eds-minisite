async function loadBlock(block) {
  const name = block.dataset.blockName;

  try {
    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `blocks/${name}/${name}.css`;
    document.head.appendChild(link);

    // Load JS
    const module = await import(`./blocks/${name}/${name}.js`);
    module.default(block);

  } catch (err) {
    console.error(`Error loading block: ${name}`, err);
  }
}

document.querySelectorAll("[data-block-name]").forEach(loadBlock);