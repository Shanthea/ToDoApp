let input = prompt('What would you like to do?');
const TO_DOS = ['Collect Eggs', 'Collect Chicken Eggs', 'Clean Room'];
while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('***************')
        for (let i = 0; i < TO_DOS.length; i++) {
            console.log(`${i}: ${TO_DOS[i]}`);
        }
        console.log('***************')
        } else if (input === 'new') {
         let newTodo = prompt('Okay, what is the new todo?');
         TO_DOS.push(newTodo);
         console.log(`${newTodo} added to the list!`);
         } else if (input === 'delete'){
        const index = parseInt(prompt('Okay, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = TO_DOS.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
     }
    input = prompt('What would you like to do?')
}
console.log('Okay. You quit the app!')
