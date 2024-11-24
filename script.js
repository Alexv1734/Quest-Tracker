
document.addEventListener("DOMContentLoaded", () => {
    const questInput = document.getElementById("quest-input");
    const addQuestButton = document.getElementById("add-quest");
    const questList = document.getElementById("quest-list");
    const progressBar = document.getElementById("progress-bar");
    const levelDisplay = document.getElementById("level-display");

    let xp = 0;
    let level = 1;

    const updateProgress = () => {
        const progress = (xp % 100) + "%";
        progressBar.style.width = progress;
        if (xp >= level * 100) {
            level++;
            xp = 0;
            alert("Level Up! You are now level " + level);
        }
        levelDisplay.textContent = "Level: " + level;
    };

    const addQuest = () => {
        const questText = questInput.value.trim();
        if (!questText) return;

        const listItem = document.createElement("li");
        listItem.textContent = questText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            xp += 25;
            updateProgress();
            listItem.remove();
        });

        listItem.appendChild(completeButton);
        questList.appendChild(listItem);
        questInput.value = "";
    };

    addQuestButton.addEventListener("click", addQuest);
    questInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addQuest();
    });
});
