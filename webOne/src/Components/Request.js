

/**
 * 
 Example of an HTTP Request /API 
 
 */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();




fetch("https://api.example.com/data.json")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));

/** 

simple web socket 

*/


const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server listening on port 8080');


// Command to connect to the web socket 

// wscat -c ws://localhost:8080



// Recursive factorial programme in MIPS 

/**

# Compute the factorial of a number using recursion

# Input: a0 = number (n)
# Output: v0 = factorial of n

.data

.text

# Factorial function
factorial:
    # Base case: if n <= 1, return 1
    bgt $a0, 1, recursive_case
    li $v0, 1
    jr $ra

recursive_case:
    # Recursive case: n! = n * (n-1)!
    sub $a0, $a0, 1 # decrement n
    jal factorial # call factorial on n-1
    mul $v0, $v0, $a0 # multiply by n
    jr $ra # return result

# Main function
main:
    # Read n
    li $v0, 5
    syscall

    # Call factorial
    move $a0, $v0
    jal factorial

    # Print result
    li $v0, 1
    move $a0, $v0
    syscall

    # Exit
    li $v0, 10
    syscall



*/
