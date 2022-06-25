let n = +prompt("Введите номер задания от 1 до 8", 8);

function task1() {
  const NOTEBOOK = {
    SerialNumber: "3V5E7EA",
    Model: "HP 255 G8",
    Screen: {
      ScreenType: "IPS",
      Permission: "1920x1080",
    },
    CPU: "Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)",
    RAM: "8 ГБ",
    DataDrives: {
      Volume: "HDD 256 ГБ SSD",
      videoCard: "AMD Radeon Graphics",
    },
    Frame: {
      Color: "Silver",
      Weight: 1.7,
      Dimensions: "358 x 242 x 19",
    },
  };
  console.log(NOTEBOOK);
}

function task2() {
  class user {
    constructor(login, password) {
      this.login = login;
      this.password = password;
    }
  }
  let user1, user2, user3;
  const users = [
    (user1 = new user("Vasia", "QWERTY")),
    (user2 = new user("Lisa", "QWERTYU")),
    (user3 = new user("Mia", "qwertyui")),
  ];
  console.log(users);
  
}

function task3() {
  class user {
    constructor(login, password) {
      this.login = login;
      this.password = password;
    }
  }
  let user1, user2, user3;
  const users = [
    (user1 = new user("Vasia", "QWERTY")),
    (user2 = new user("Lisa", "QWERTYU")),
    (user3 = new user("Mia", "qwertyui")),
  ];
  const map = new Map();
  users.forEach((element) => map.set(element.login, element));
  console.log(map);
}

function task4() {
  let arr = [4,5,6,3,22,12];
  let arr2 = [2,4,5,22,32,11,1];
   console.log([...new Set([...arr,...arr2])])
}



switch (n) {
  case 1:
    task1();
    break;
  case 2:
    task2();
    break;
  case 3:
    task3();
    break;
  case 4:
    task4();
    break;
}
