function findShortestString(arr) {

    let shortest = arr[0];

    arr.forEach(string => {
        if (string.length < shortest.length) {
            shortest = string;
        }
    });

    return shortest;

}

