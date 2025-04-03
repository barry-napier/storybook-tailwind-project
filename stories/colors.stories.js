const colors = {
    gray: [900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  };
  
  export default {
    title: 'Foundations/Colors',
  };
  
  export const Palette = () => {
    const groups = Object.entries(colors).map(([name, shades]) => {
      const swatches = shades.map(shade => `
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded" style="background-color: var(--color-${name}-${shade});"></div>
          <code class="text-sm">--color-${name}-${shade}</code>
        </div>
      `).join('');
  
      return `
        <div class="mb-8">
          <h3 class="font-semibold text-xl mb-2 capitalize">${name}</h3>
          <div class="grid grid-cols-2 gap-2">
            ${swatches}
          </div>
        </div>
      `;
    });
  
    return `<div class="p-6 font-sans">${groups.join('')}</div>`;
  };
  