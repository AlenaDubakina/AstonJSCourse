function createPerson({ name = 'New User', skills = [] }) {
  const person = {
    name,
    skills,
    addSkill(newSkill) {
      if (!this.skills.includes(newSkill)) this.skills.push(newSkill);

      return this;
    },
    removeSkill(skill) {
      this.skills.splice(this.skills.indexOf(skill), 1);
      return this;
    },
    addName(newName) {
      this.name = newName;
      return this;
    },
  };
  Object.seal(person);
  return person;
}
