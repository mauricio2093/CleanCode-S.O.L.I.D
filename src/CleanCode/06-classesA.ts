/* eslint-disable */
(() => {
  // No aplicando el Principio de Responsabilidad Unica

  type Gender = 'M' | 'F';

  class Person {
    public name: string;

    public gender: Gender;

    public birthday: Date;

    constructor(name: string, gender: Gender, birthday: Date) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredential = ():boolean => true;
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super(email, role, name, gender, birthday);
    }
  }
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'mauricio@gmail.com',
    'Admin',
    'Mauricio',
    'M',
    new Date('1993-07-20'),
  );
  console.log({ userSettings });
})();
