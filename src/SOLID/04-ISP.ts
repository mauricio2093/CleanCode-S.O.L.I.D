/* eslint-disable */
interface Bird {
  eat(): void;
  fly(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() {}

  public eat() {}

  public run() {}

  public swim() {}
}

class Humminbird implements Bird {
  public fly() {}

  public eat() {}

  public run() {}

  public swim() {}
}

class Ostrich implements Bird {
  public fly() {
    throw new Error('Esta ave no vuela');
  }

  public eat() {}

  public run() {}

  public swim() {}
}

class Penguin implements Bird {
  public fly() {
    throw new Error('Esta ave no vuela');
  }

  public eat() {}

  public run() {}

  public swim() {}
}

/* eslint-enable */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
interface Bird1 {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

interface RuningBird {
  run(): void;
}
class Tucan1 implements Bird1, FlyingBird {
  public fly() {}

  public eat() {}
}

class Humminbird1 implements Bird1, FlyingBird {
  public fly() {}

  public eat() {}
}

class Ostrich1 implements Bird1, RuningBird {
  public eat() {}

  public run() {}
}

class Penguin1 implements Bird1, SwimmingBird {
  public eat() {}

  public swim() {}
}
