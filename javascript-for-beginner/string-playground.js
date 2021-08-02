const message = 'This is my first message';
console.log(message.length)
for (let i in message) {
    console.log(message[i]);
}
for (let character of message) {
    console.log(character);
}

console.log(message.startsWith('this'));
console.log(message.startsWith('This'));
console.log(message.indexOf('my'));

newMessage = message.replace('my', 'your');
console.log(newMessage);
console.log(newMessage.toUpperCase());

const wordsInMessage = message.split(' ');
for (let wordIndex in wordsInMessage) {
    console.log(wordsInMessage[wordIndex]);
}


//--------------------------
// Template literal
newMessage = 
'This is my\n' +
'\'first\' message';
console.log(newMessage);

const str = `This is my
'first' message`;
console.log(str);

const targetName = 'John';
const emailTemplate = 
`Hi ${targetName},

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(emailTemplate);

