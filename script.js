async function getGreeting() {
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("message");

    if (!name.trim()) {
        messageElement.innerText = "Please enter a name.";
        return;
    }

    try {
        const response = await fetch(`https://greeting-app1.onrender.com/api/greet?name=${name}`);
        const data = await response.json();

        if (response.ok) {
            messageElement.innerText = data.message;
        } else {
            messageElement.innerText = data.error;
        }
    } catch (error) {
        messageElement.innerText = "Error fetching greeting.";
    }
}
