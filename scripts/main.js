

// Page 3 specific behavior - Dynamic select injection
document.getElementById("add-select-btn")?.addEventListener("click", () => {
  const container = document.getElementById("dynamic-content");
  container.innerHTML = `
    <sl-select label="Select one">
      <sl-option value="option-1">Option 1</sl-option>
      <sl-option value="option-2">Option 2</sl-option>
      <sl-option value="option-3">Option 3</sl-option>
    </sl-select>
  `;
});

document.getElementById("add-unknown-btn")?.addEventListener("click", () => {
  document.body.append(document.createElement('not-defined')) 
});

