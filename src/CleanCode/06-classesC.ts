/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizando la composicion frente a la herencia
  type Gender = 'M' | 'F';

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string,
  }

  interface UserSettingsProps extends PersonProps, UserProps, SettingsProps{

  }

  class Person {
    public birthday: Date;

    public gender: Gender;

    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  class User {
    private lastAccess: Date;

    public email: string;

    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredential = ():boolean => true;
  }

  class Settings {
    public lastOpenFolder: string;

    public workingDirectory: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  class UserSettings {
    private person: Person;

    public user: User;

    public settings: Settings;

    constructor({
      name, gender, birthday,
      email, role,
      lastOpenFolder, workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthday });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
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
