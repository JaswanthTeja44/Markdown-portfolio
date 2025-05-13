    const textarea = document.getElementById('markdown');
    const preview = document.getElementById('preview');
    const errorBox = document.getElementById('error');

    textarea.addEventListener('input', () => {
      const content = textarea.value;
      try {
        if (content.includes('<script')) {
          throw new Error("Security alert: <script> tags are not allowed.");
        }
        preview.innerHTML = marked.parse(content);
        errorBox.textContent = '';
      } catch (err) {
        errorBox.textContent = err.message;
      }
    });

    // Optional: Example starter markdown
    textarea.value = `# Welcome to My Portfolio\n\nHi, I'm **Your Name**.\n\n- 🌐 Web Developer\n- 🎨 UI/UX Enthusiast\n- 📫 Contact: you@example.com\n\n## Projects\n\n### Project One\nDescription here...\n\n> *Built with love in 2025.*`;
    textarea.dispatchEvent(new Event('input'));

