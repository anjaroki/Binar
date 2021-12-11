function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "kertas";
  return "gunting";
}

function getHasil(comp, player) {
  if (player === comp) return "draw";
  if (player === "batu") return comp === "gunting" ? "player1win" : "comwin";
  if (player === "gunting") return comp === "kertas" ? "player1win" : "comwin";
  if (player === "kertas") return comp === "batu" ? "player1win" : "comwin";
}

const pBatu = document.querySelector("#batu");
pBatu.addEventListener("click", function () {
  document.querySelector("#latarBatu").classList.add("border");
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pBatu.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");
  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("border");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("border");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("border");
  }

  console.log("player : " + pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("hasil: " + hasil);
});

const pKertas = document.querySelector("#kertas");
pKertas.addEventListener("click", function () {
  document.querySelector("#latarKertas").classList.add("border");
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pKertas.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");
  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("border");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("border");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("border");
  }

  console.log("player : " + pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("hasil: " + hasil);
});

const pGunting = document.querySelector("#gunting");
pGunting.addEventListener("click", function () {
  document.querySelector("#latarGunting").classList.add("border");
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGunting.id;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  document.querySelector(".picHasil").setAttribute("src", "assets/" + hasil + ".png");
  if (pilihanComputer == "batu") {
    document.querySelector("#latarBatuC").classList.add("border");
  } else if (pilihanComputer == "kertas") {
    document.querySelector("#latarKertasC").classList.add("border");
  } else if (pilihanComputer == "gunting") {
    document.querySelector("#latarGuntingC").classList.add("border");
  }

  console.log("player : " + pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("hasil: " + hasil);
});
