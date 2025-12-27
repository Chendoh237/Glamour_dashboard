// messages.js

function sendMessage() {
  const input = document.getElementById("messageInput");
  const channel = document.getElementById("channelSelect").value;
  const messages = document.getElementById("chatMessages");

  if (!input.value.trim()) return;

  // Admin message
  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.textContent = input.value;
  messages.appendChild(msg);

  // System log
  const sys = document.createElement("div");
  sys.className = "message system";
  sys.textContent = `Message sent via ${channel.toUpperCase()}`;
  messages.appendChild(sys);

  messages.scrollTop = messages.scrollHeight;
  input.value = "";
}

function loadConversation(id) {
  document.querySelectorAll(".conversation").forEach(c => c.classList.remove("active"));
  event.currentTarget.classList.add("active");

  // Demo switch
  document.getElementById("chatTitle").textContent =
    id === 1 ? "Jane Doe (Client)" :
    id === 2 ? "Polished Perfection" :
    "Crown Glory";
}
