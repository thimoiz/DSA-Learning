function towerOfHanoi(n, source, helper, destination) {
  if (n == 1) {
    console.log("Disk ", n, " Transfered from ", source, " to ", destination);
    return;
  }
  towerOfHanoi(n - 1, source, destination, helper);
  console.log("Disk ", n, " Transfered from ", source, " to ", destination);
  towerOfHanoi(n - 1, helper, source, destination);
}

towerOfHanoi(3, "S", "H", "D");
