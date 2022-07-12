/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
(() => {
  type Gender = 'M' | 'F';

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string;
    workingDirectory: string,
  }

  class Person {
    public birthday: Date;

    public gender: Gender;

    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  class User extends Person {
    private lastAccess: Date;

    public email: string;

    public role: string;

    constructor({
      email,
      role,
      name,
      gender,
      birthday,
    }: UserProps) {
      super({ name, gender, birthday });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential = ():boolean => true;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;

    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthday,
    }: UserSettingsProps) {
      super({
        email,
        role,
        name,
        gender,
        birthday,
      });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'mauricio@gmail.com',
    role: 'Admin',
    name: 'Mauricio',
    gender: 'M',
    birthday: new Date('1993-07-20'),
  });
  console.log({ userSettings });
})();
