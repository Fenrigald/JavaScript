function primeNumbers() {
    var i = 1;
    var primeArr = [ ];
    while (i <= 100)
    { if (i==2 || i==3 || i==5 || i==7) {
    primeArr.push(" " + i);
    i++
    continue;
    } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
    i++;
    continue;
    }
    primeArr.push(" " + i++);
    }
    alert(primeArr)
    }
alert(primeNumbers())