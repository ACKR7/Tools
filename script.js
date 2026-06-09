// Static data for demo
const adminId = '9999';
const initialValidIds = ['1234', adminId];
let validIds = JSON.parse(localStorage.getItem('validIds')) || initialValidIds;
localStorage.setItem('validIds', JSON.stringify(validIds));

const tasks = [
    { id: 1, name: 'Fix bug in module A', accepted: false },
    { id: 2, name: 'Update documentation', accepted: false },
    { id: 3, name: 'Test new feature', accepted: false }
];
let currentUser = null;
let isAdmin = false;
let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
let currentTaskForIssue = null;

function login() {
    const id = document.getElementById('userId').value;
    if (validIds.includes(id)) {
        currentUser = id;
        isAdmin = (id === adminId);
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        if (isAdmin) {
            document.getElementById('adminPanel').style.display = 'block';
        }
        // Show chat for all users
        document.getElementById('chatPanel').style.display = 'block';
        loadChat();
        loadTasks();
    } else {
        document.getElementById('loginError').textContent = 'Invalid ID';
    }
}

function loadTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            ${task.name} 
            <button onclick="acceptTask(${task.id})" ${task.accepted ? 'disabled' : ''}>Accept</button>
            <button onclick="reportIssue(${task.id})">Report Issue</button>
        `;
        list.appendChild(li);
    });
}

function acceptTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.accepted = true;
        alert(`Task "${task.name}" accepted!`);
        loadTasks();
    }
}

function reportIssue(taskId) {
    const task = tasks.find(t => t.id === taskId);
    currentTaskForIssue = task;
    document.getElementById('issueForm').style.display = 'block';
    document.getElementById('issueText').value = '';
}

function submitIssue() {
    const issueText = document.getElementById('issueText').value.trim();
    if (issueText && currentTaskForIssue) {
        const subject = encodeURIComponent(`Issue Report for Task: ${currentTaskForIssue.name}`);
        const body = encodeURIComponent(`Reported by User: ${currentUser}\nTask: ${currentTaskForIssue.name}\nIssue: ${issueText}`);
        const mailtoLink = `mailto:admin@example.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        alert('Email client opened with issue details. Please send the email.');
        document.getElementById('issueForm').style.display = 'none';
        currentTaskForIssue = null;
    } else {
        alert('Please describe the issue.');
    }
}

function addMember() {
    if (!isAdmin) return;
    const newId = document.getElementById('newMemberId').value.trim();
    if (newId && !validIds.includes(newId)) {
        validIds.push(newId);
        localStorage.setItem('validIds', JSON.stringify(validIds));
        alert(`New member ID "${newId}" added!`);
        document.getElementById('newMemberId').value = '';
        document.getElementById('addError').textContent = '';
    } else {
        document.getElementById('addError').textContent = 'Invalid or duplicate ID';
    }
}

function sendMessage() {
    // Allow all users to send messages
    const input = document.getElementById('chatInput');
    const fileInput = document.getElementById('fileInput');
    const message = input.value.trim();
    const file = fileInput.files[0];
    if (message || file) {
        let attachment = null;
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (file.type.startsWith('image/')) {
                    attachment = { type: 'image', name: file.name, src: e.target.result };
                } else {
                    attachment = { type: 'file', name: file.name };
                }
                const msg = { user: currentUser, text: message, attachment: attachment, timestamp: new Date().toLocaleTimeString() };
                chatMessages.push(msg);
                localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
                input.value = '';
                fileInput.value = '';
                loadChat();
            };
            reader.readAsDataURL(file);
        } else {
            const msg = { user: currentUser, text: message, attachment: null, timestamp: new Date().toLocaleTimeString() };
            chatMessages.push(msg);
            localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
            input.value = '';
            loadChat();
        }
    }
}

function loadChat() {
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML = '';
    chatMessages.forEach(msg => {
        const p = document.createElement('p');
        let content = `${msg.timestamp} [${msg.user}]: ${msg.text}`;
        if (msg.attachment) {
            if (msg.attachment.type === 'image') {
                content += `<br><img src="${msg.attachment.src}" alt="${msg.attachment.name}" style="max-width: 200px; max-height: 200px;">`;
            } else {
                content += `<br>Attachment: ${msg.attachment.name}`;
            }
        }
        p.innerHTML = content;
        messagesDiv.appendChild(p);
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function logout() {
    currentUser = null;
    isAdmin = false;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('chatPanel').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('userId').value = '';
    document.getElementById('loginError').textContent = '';
}