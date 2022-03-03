const taskList = require('./taskList.js');

describe('TaskList', () => {
  test('Add task', () => {
    taskList.addTask('please work');
    const taskArray = taskList.length;
    expect(taskArray).toBe(1);
  });
});
