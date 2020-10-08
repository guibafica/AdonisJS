'use strict'

class Task {
  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }
}

module.exports = Task
