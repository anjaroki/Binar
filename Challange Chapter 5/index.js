//variabel yang di embed dari id html
const pBatu = document.getElementById("batu");
const pKertas = document.getElementById("kertas");
const pGunting = document.getElementById("gunting");

//mencari value computer secara rendom
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "kertas";
  return "gunting";
}

//formula aturan permainan
function getHasil(comp, player) {
  if (player === comp) return "draw";
  if (player === "batu") return comp === "gunting" ? "player1win" : "comwin";
  if (player === "gunting") return comp === "kertas" ? "player1win" : "comwin";
  if (player === "kertas") return comp === "batu" ? "player1win" : "comwin";
}

//aksi batu
function pilBatu() {
  document.querySelector("#latarBatu").classList.add("item-box");

  pKertas.removeAttribute("onClick");
  pGunting.removeAttribute("onClick");

  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pBatu.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("item-box");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("item-box");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("item-box");
  }

  //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}

//aksi kertas
function pilKertas() {
  document.querySelector("#latarKertas").classList.add("item-box");

  pBatu.removeAttribute("onClick");
  pGunting.removeAttribute("onClick");

  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pKertas.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("item-box");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("item-box");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("item-box");
  }

  // //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}

//aksi gunting
function pilGunting() {
  document.querySelector("#latarGunting").classList.add("item-box");

  pKertas.removeAttribute("onClick");
  pBatu.removeAttribute("onClick");

  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGunting.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("item-box");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("item-box");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("item-box");
  }

  //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}
