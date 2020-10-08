'use strict'

class Project {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required|url'
    }
  }
}

module.exports = Project
