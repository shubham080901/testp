function addMessage() {
    let message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        let messageList = document.getElementById("messages");
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        document.getElementById("messageInput").value = "";
    }
}
