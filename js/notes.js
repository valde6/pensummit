async function loadNotes() {
    const res = await fetch("/noter/notes.json");
    const notes = await res.json();

    const container = document.getElementById("notes-list");

    notes.forEach(note => {
        const el = document.createElement("a");
        el.href = note.path;
        el.className = "note-card";

        el.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.excerpt}</p>
      <small>${note.subject}</small>
    `;

        container.appendChild(el);
    });
}

loadNotes();