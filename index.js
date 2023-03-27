const addLevel = {
  2: 'CSS',
  3: 'JavaScript',
  4: 'React',
  5: 'NodeJS',
}

const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel(lev) {
    this.level++
    const key = this.level.toString()
    this.level > 5 ? alertMsg.call(this) : this.stack.push(addLevel[key])
    console.log(this)
    return this
  },
}

function alertMsg() {
  alert(`Студент выучил все технологии! Его уровень ${this.level}`)
}

student
  .improveLevel(student.level)
  .improveLevel(student.level)
  .improveLevel(student.level)
  .improveLevel(student.level)
  .improveLevel(student.level)
