// Authentication functions
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert('Account created!'))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert('Logged in!'))
    .catch(err => alert(err.message));
}

function resetPassword() {
  const email = document.getElementById('email').value;
  auth.sendPasswordResetEmail(email)
    .then(() => alert('Reset email sent!'))
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut();
  alert('Logged out!');
}

// Firestore submission
function submitData() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  db.collection('entries').add({
    name: name,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => alert('Data added!'))
    .catch(err => alert(err.message));
}

// Realtime listener for entries
// Listen for new entries and update list in real-time

db.collection('entries').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  const list = document.getElementById('entries');
  list.innerHTML = '';
  snapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement('li');
    li.textContent = `${data.name}: ${data.message}`;
    list.appendChild(li);
  });
});
